(function() {
  var CSON, Command, Git, Install, RebuildModuleCache, _, assert, async, config, fs, hostedGitInfo, isDeprecatedPackage, path, request, semver, temp, yargs,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    slice = [].slice;

  assert = require('assert');

  path = require('path');

  _ = require('underscore-plus');

  async = require('async');

  CSON = require('season');

  yargs = require('yargs');

  Git = require('git-utils');

  semver = require('semver');

  temp = require('temp');

  hostedGitInfo = require('hosted-git-info');

  config = require('./apm');

  Command = require('./command');

  fs = require('./fs');

  RebuildModuleCache = require('./rebuild-module-cache');

  request = require('./request');

  isDeprecatedPackage = require('./deprecated-packages').isDeprecatedPackage;

  module.exports = Install = (function(superClass) {
    extend(Install, superClass);

    Install.commandNames = ['install', 'i'];

    function Install() {
      this.installGitPackageDependencies = bind(this.installGitPackageDependencies, this);
      this.installModules = bind(this.installModules, this);
      this.installNode = bind(this.installNode, this);
      this.atomDirectory = config.getAtomDirectory();
      this.atomPackagesDirectory = path.join(this.atomDirectory, 'packages');
      this.atomNodeDirectory = path.join(this.atomDirectory, '.node-gyp');
      this.atomNpmPath = require.resolve('npm/bin/npm-cli');
      this.atomNodeGypPath = require.resolve('node-gyp/bin/node-gyp');
    }

    Install.prototype.parseOptions = function(argv) {
      var options;
      options = yargs(argv).wrap(100);
      options.usage("\nUsage: apm install [<package_name>...]\n       apm install <package_name>@<package_version>\n       apm install <git_remote>\n       apm install <github_username>/<github_project>\n       apm install --packages-file my-packages.txt\n       apm i (with any of the previous argument usage)\n\nInstall the given Atom package to ~/.atom/packages/<package_name>.\n\nIf no package name is given then all the dependencies in the package.json\nfile are installed to the node_modules folder in the current working\ndirectory.\n\nA packages file can be specified that is a newline separated list of\npackage names to install with optional versions using the\n`package-name@version` syntax.");
      options.alias('c', 'compatible').string('compatible').describe('compatible', 'Only install packages/themes compatible with this Atom version');
      options.alias('h', 'help').describe('help', 'Print this usage message');
      options.alias('s', 'silent').boolean('silent').describe('silent', 'Set the npm log level to silent');
      options.alias('q', 'quiet').boolean('quiet').describe('quiet', 'Set the npm log level to warn');
      options.boolean('check').describe('check', 'Check that native build tools are installed');
      options.boolean('verbose')["default"]('verbose', false).describe('verbose', 'Show verbose debug information');
      options.string('packages-file').describe('packages-file', 'A text file containing the packages to install');
      return options.boolean('production').describe('production', 'Do not install dev dependencies');
    };

    Install.prototype.installNode = function(callback) {
      var env, installNodeArgs, opts, proxy, ref, useStrictSsl;
      installNodeArgs = ['install'];
      installNodeArgs.push("--runtime=electron");
      installNodeArgs.push("--target=" + this.electronVersion);
      installNodeArgs.push("--dist-url=" + (config.getElectronUrl()));
      installNodeArgs.push("--arch=" + (config.getElectronArch()));
      installNodeArgs.push("--ensure");
      if (this.verbose) {
        installNodeArgs.push("--verbose");
      }
      env = _.extend({}, process.env, {
        HOME: this.atomNodeDirectory,
        RUSTUP_HOME: config.getRustupHomeDirPath()
      });
      if (config.isWin32()) {
        env.USERPROFILE = env.HOME;
      }
      fs.makeTreeSync(this.atomDirectory);
      useStrictSsl = (ref = this.npm.config.get('strict-ssl')) != null ? ref : true;
      if (!useStrictSsl) {
        env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
      }
      proxy = this.npm.config.get('https-proxy') || this.npm.config.get('proxy') || env.HTTPS_PROXY || env.HTTP_PROXY;
      if (proxy) {
        installNodeArgs.push("--proxy=" + proxy);
      }
      opts = {
        env: env,
        cwd: this.atomDirectory
      };
      if (this.verbose) {
        opts.streaming = true;
      }
      return this.fork(this.atomNodeGypPath, installNodeArgs, opts, function(code, stderr, stdout) {
        if (stderr == null) {
          stderr = '';
        }
        if (stdout == null) {
          stdout = '';
        }
        if (code === 0) {
          return callback();
        } else {
          return callback(stdout + "\n" + stderr);
        }
      });
    };

    Install.prototype.installModule = function(options, pack, modulePath, callback) {
      var env, installArgs, installDirectory, installGlobally, installOptions, nodeModulesDirectory, ref, vsArgs;
      installGlobally = (ref = options.installGlobally) != null ? ref : true;
      installArgs = ['--globalconfig', config.getGlobalConfigPath(), '--userconfig', config.getUserConfigPath(), 'install'];
      installArgs.push(modulePath);
      installArgs.push("--runtime=electron");
      installArgs.push("--target=" + this.electronVersion);
      installArgs.push("--arch=" + (config.getElectronArch()));
      if (installGlobally) {
        installArgs.push("--global-style");
      }
      if (options.argv.silent) {
        installArgs.push('--silent');
      }
      if (options.argv.quiet) {
        installArgs.push('--quiet');
      }
      if (options.argv.production) {
        installArgs.push('--production');
      }
      if (vsArgs = this.getVisualStudioFlags()) {
        installArgs.push(vsArgs);
      }
      env = _.extend({}, process.env, {
        HOME: this.atomNodeDirectory,
        RUSTUP_HOME: config.getRustupHomeDirPath()
      });
      this.addBuildEnvVars(env);
      installOptions = {
        env: env
      };
      if (this.verbose) {
        installOptions.streaming = true;
      }
      if (installGlobally) {
        installDirectory = temp.mkdirSync('apm-install-dir-');
        nodeModulesDirectory = path.join(installDirectory, 'node_modules');
        fs.makeTreeSync(nodeModulesDirectory);
        installOptions.cwd = installDirectory;
      }
      return this.fork(this.atomNpmPath, installArgs, installOptions, (function(_this) {
        return function(code, stderr, stdout) {
          var child, children, commands, destination, error, source;
          if (stderr == null) {
            stderr = '';
          }
          if (stdout == null) {
            stdout = '';
          }
          if (code === 0) {
            if (installGlobally) {
              commands = [];
              children = fs.readdirSync(nodeModulesDirectory).filter(function(dir) {
                return dir !== ".bin";
              });
              assert.equal(children.length, 1, "Expected there to only be one child in node_modules");
              child = children[0];
              source = path.join(nodeModulesDirectory, child);
              destination = path.join(_this.atomPackagesDirectory, child);
              commands.push(function(next) {
                return fs.cp(source, destination, next);
              });
              commands.push(function(next) {
                return _this.buildModuleCache(pack.name, next);
              });
              commands.push(function(next) {
                return _this.warmCompileCache(pack.name, next);
              });
              return async.waterfall(commands, function(error) {
                if (error != null) {
                  _this.logFailure();
                } else {
                  if (!options.argv.json) {
                    _this.logSuccess();
                  }
                }
                return callback(error, {
                  name: child,
                  installPath: destination
                });
              });
            } else {
              return callback(null, {
                name: child,
                installPath: destination
              });
            }
          } else {
            if (installGlobally) {
              fs.removeSync(installDirectory);
              _this.logFailure();
            }
            error = stdout + "\n" + stderr;
            if (error.indexOf('code ENOGIT') !== -1) {
              error = _this.getGitErrorMessage(pack);
            }
            return callback(error);
          }
        };
      })(this));
    };

    Install.prototype.getGitErrorMessage = function(pack) {
      var message;
      message = "Failed to install " + pack.name + " because Git was not found.\n\nThe " + pack.name + " package has module dependencies that cannot be installed without Git.\n\nYou need to install Git and add it to your path environment variable in order to install this package.\n";
      switch (process.platform) {
        case 'win32':
          message += "\nYou can install Git by downloading, installing, and launching GitHub for Windows: https://windows.github.com\n";
          break;
        case 'linux':
          message += "\nYou can install Git from your OS package manager.\n";
      }
      message += "\nRun apm -v after installing Git to see what version has been detected.";
      return message;
    };

    Install.prototype.installModules = function(options, callback) {
      if (!options.argv.json) {
        process.stdout.write('Installing modules ');
      }
      return this.forkInstallCommand(options, (function(_this) {
        return function() {
          var args;
          args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          if (options.argv.json) {
            return _this.logCommandResultsIfFail.apply(_this, [callback].concat(slice.call(args)));
          } else {
            return _this.logCommandResults.apply(_this, [callback].concat(slice.call(args)));
          }
        };
      })(this));
    };

    Install.prototype.forkInstallCommand = function(options, callback) {
      var env, installArgs, installOptions, vsArgs;
      installArgs = ['--globalconfig', config.getGlobalConfigPath(), '--userconfig', config.getUserConfigPath(), 'install'];
      installArgs.push("--runtime=electron");
      installArgs.push("--target=" + this.electronVersion);
      installArgs.push("--arch=" + (config.getElectronArch()));
      if (options.argv.silent) {
        installArgs.push('--silent');
      }
      if (options.argv.quiet) {
        installArgs.push('--quiet');
      }
      if (options.argv.production) {
        installArgs.push('--production');
      }
      if (vsArgs = this.getVisualStudioFlags()) {
        installArgs.push(vsArgs);
      }
      env = _.extend({}, process.env, {
        HOME: this.atomNodeDirectory,
        RUSTUP_HOME: config.getRustupHomeDirPath()
      });
      if (config.isWin32()) {
        this.updateWindowsEnv(env);
      }
      this.addNodeBinToEnv(env);
      this.addProxyToEnv(env);
      installOptions = {
        env: env
      };
      if (options.cwd) {
        installOptions.cwd = options.cwd;
      }
      if (this.verbose) {
        installOptions.streaming = true;
      }
      return this.fork(this.atomNpmPath, installArgs, installOptions, callback);
    };

    Install.prototype.requestPackage = function(packageName, callback) {
      var requestSettings;
      requestSettings = {
        url: (config.getAtomPackagesUrl()) + "/" + packageName,
        json: true,
        retries: 4
      };
      return request.get(requestSettings, function(error, response, body) {
        var message;
        if (body == null) {
          body = {};
        }
        if (error != null) {
          message = "Request for package information failed: " + error.message;
          if (error.code) {
            message += " (" + error.code + ")";
          }
          return callback(message);
        } else if (response.statusCode !== 200) {
          message = request.getErrorMessage(response, body);
          return callback("Request for package information failed: " + message);
        } else {
          if (body.releases.latest) {
            return callback(null, body);
          } else {
            return callback("No releases available for " + packageName);
          }
        }
      });
    };

    Install.prototype.downloadPackage = function(packageUrl, installGlobally, callback) {
      var requestSettings;
      requestSettings = {
        url: packageUrl
      };
      return request.createReadStream(requestSettings, (function(_this) {
        return function(readStream) {
          readStream.on('error', function(error) {
            return callback("Unable to download " + packageUrl + ": " + error.message);
          });
          return readStream.on('response', function(response) {
            var chunks, filePath, writeStream;
            if (response.statusCode === 200) {
              filePath = path.join(temp.mkdirSync(), 'package.tgz');
              writeStream = fs.createWriteStream(filePath);
              readStream.pipe(writeStream);
              writeStream.on('error', function(error) {
                return callback("Unable to download " + packageUrl + ": " + error.message);
              });
              return writeStream.on('close', function() {
                return callback(null, filePath);
              });
            } else {
              chunks = [];
              response.on('data', function(chunk) {
                return chunks.push(chunk);
              });
              return response.on('end', function() {
                var error, error1, message, parseError, ref, ref1, ref2, ref3;
                try {
                  error = JSON.parse(Buffer.concat(chunks));
                  message = (ref = (ref1 = error.message) != null ? ref1 : error.error) != null ? ref : error;
                  if (installGlobally) {
                    _this.logFailure();
                  }
                  return callback("Unable to download " + packageUrl + ": " + ((ref2 = response.headers.status) != null ? ref2 : response.statusCode) + " " + message);
                } catch (error1) {
                  parseError = error1;
                  if (installGlobally) {
                    _this.logFailure();
                  }
                  return callback("Unable to download " + packageUrl + ": " + ((ref3 = response.headers.status) != null ? ref3 : response.statusCode));
                }
              });
            }
          });
        };
      })(this));
    };

    Install.prototype.getPackageCachePath = function(packageName, packageVersion, callback) {
      var cacheDir, cachePath, tempPath;
      cacheDir = config.getCacheDirectory();
      cachePath = path.join(cacheDir, packageName, packageVersion, 'package.tgz');
      if (fs.isFileSync(cachePath)) {
        tempPath = path.join(temp.mkdirSync(), path.basename(cachePath));
        return fs.cp(cachePath, tempPath, function(error) {
          if (error != null) {
            return callback(error);
          } else {
            return callback(null, tempPath);
          }
        });
      } else {
        return process.nextTick(function() {
          return callback(new Error(packageName + "@" + packageVersion + " is not in the cache"));
        });
      }
    };

    Install.prototype.isPackageInstalled = function(packageName, packageVersion) {
      var error, error1, ref, version;
      try {
        version = ((ref = CSON.readFileSync(CSON.resolve(path.join('node_modules', packageName, 'package')))) != null ? ref : {}).version;
        return packageVersion === version;
      } catch (error1) {
        error = error1;
        return false;
      }
    };

    Install.prototype.installRegisteredPackage = function(metadata, options, callback) {
      var installGlobally, label, packageName, packageVersion, ref;
      packageName = metadata.name;
      packageVersion = metadata.version;
      installGlobally = (ref = options.installGlobally) != null ? ref : true;
      if (!installGlobally) {
        if (packageVersion && this.isPackageInstalled(packageName, packageVersion)) {
          callback(null, {});
          return;
        }
      }
      label = packageName;
      if (packageVersion) {
        label += "@" + packageVersion;
      }
      if (!options.argv.json) {
        process.stdout.write("Installing " + label + " ");
        if (installGlobally) {
          process.stdout.write("to " + this.atomPackagesDirectory + " ");
        }
      }
      return this.requestPackage(packageName, (function(_this) {
        return function(error, pack) {
          var commands, installNode, ref1, ref2, ref3, tarball;
          if (error != null) {
            _this.logFailure();
            return callback(error);
          } else {
            if (packageVersion == null) {
              packageVersion = _this.getLatestCompatibleVersion(pack);
            }
            if (!packageVersion) {
              _this.logFailure();
              callback("No available version compatible with the installed Atom version: " + _this.installedAtomVersion);
              return;
            }
            tarball = ((ref1 = (ref2 = pack.versions[packageVersion]) != null ? ref2.dist : void 0) != null ? ref1 : {}).tarball;
            if (!tarball) {
              _this.logFailure();
              callback("Package version: " + packageVersion + " not found");
              return;
            }
            commands = [];
            commands.push(function(next) {
              return _this.getPackageCachePath(packageName, packageVersion, function(error, packagePath) {
                if (packagePath) {
                  return next(null, packagePath);
                } else {
                  return _this.downloadPackage(tarball, installGlobally, next);
                }
              });
            });
            installNode = (ref3 = options.installNode) != null ? ref3 : true;
            if (installNode) {
              commands.push(function(packagePath, next) {
                return _this.installNode(function(error) {
                  return next(error, packagePath);
                });
              });
            }
            commands.push(function(packagePath, next) {
              return _this.installModule(options, pack, packagePath, next);
            });
            commands.push(function(arg, next) {
              var installPath, json;
              installPath = arg.installPath;
              if (installPath != null) {
                metadata = JSON.parse(fs.readFileSync(path.join(installPath, 'package.json'), 'utf8'));
                json = {
                  installPath: installPath,
                  metadata: metadata
                };
                return next(null, json);
              } else {
                return next(null, {});
              }
            });
            return async.waterfall(commands, function(error, json) {
              if (!installGlobally) {
                if (error != null) {
                  _this.logFailure();
                } else {
                  if (!options.argv.json) {
                    _this.logSuccess();
                  }
                }
              }
              return callback(error, json);
            });
          }
        };
      })(this));
    };

    Install.prototype.installPackageDependencies = function(options, callback) {
      var commands, fn, name, ref, version;
      options = _.extend({}, options, {
        installGlobally: false,
        installNode: false
      });
      commands = [];
      ref = this.getPackageDependencies();
      fn = (function(_this) {
        return function(name, version) {
          return commands.push(function(next) {
            return _this.installRegisteredPackage({
              name: name,
              version: version
            }, options, next);
          });
        };
      })(this);
      for (name in ref) {
        version = ref[name];
        fn(name, version);
      }
      return async.series(commands, callback);
    };

    Install.prototype.installDependencies = function(options, callback) {
      var commands;
      options.installGlobally = false;
      commands = [];
      commands.push(this.installNode);
      commands.push((function(_this) {
        return function(callback) {
          return _this.installModules(options, callback);
        };
      })(this));
      commands.push((function(_this) {
        return function(callback) {
          return _this.installPackageDependencies(options, callback);
        };
      })(this));
      return async.waterfall(commands, callback);
    };

    Install.prototype.getPackageDependencies = function() {
      var error, error1, metadata, packageDependencies, ref;
      try {
        metadata = fs.readFileSync('package.json', 'utf8');
        packageDependencies = ((ref = JSON.parse(metadata)) != null ? ref : {}).packageDependencies;
        return packageDependencies != null ? packageDependencies : {};
      } catch (error1) {
        error = error1;
        return {};
      }
    };

    Install.prototype.createAtomDirectories = function() {
      fs.makeTreeSync(this.atomDirectory);
      fs.makeTreeSync(this.atomPackagesDirectory);
      return fs.makeTreeSync(this.atomNodeDirectory);
    };

    Install.prototype.checkNativeBuildTools = function(callback) {
      process.stdout.write('Checking for native build tools ');
      return this.installNode((function(_this) {
        return function(error) {
          var buildArgs, buildOptions, env, vsArgs;
          if (error != null) {
            _this.logFailure();
            return callback(error);
          }
          buildArgs = ['--globalconfig', config.getGlobalConfigPath(), '--userconfig', config.getUserConfigPath(), 'build'];
          buildArgs.push(path.resolve(__dirname, '..', 'native-module'));
          buildArgs.push("--runtime=electron");
          buildArgs.push("--target=" + _this.electronVersion);
          buildArgs.push("--arch=" + (config.getElectronArch()));
          if (vsArgs = _this.getVisualStudioFlags()) {
            buildArgs.push(vsArgs);
          }
          env = _.extend({}, process.env, {
            HOME: _this.atomNodeDirectory,
            RUSTUP_HOME: config.getRustupHomeDirPath()
          });
          if (config.isWin32()) {
            _this.updateWindowsEnv(env);
          }
          _this.addNodeBinToEnv(env);
          _this.addProxyToEnv(env);
          buildOptions = {
            env: env
          };
          if (_this.verbose) {
            buildOptions.streaming = true;
          }
          fs.removeSync(path.resolve(__dirname, '..', 'native-module', 'build'));
          return _this.fork(_this.atomNpmPath, buildArgs, buildOptions, function() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return _this.logCommandResults.apply(_this, [callback].concat(slice.call(args)));
          });
        };
      })(this));
    };

    Install.prototype.packageNamesFromPath = function(filePath) {
      var packages;
      filePath = path.resolve(filePath);
      if (!fs.isFileSync(filePath)) {
        throw new Error("File '" + filePath + "' does not exist");
      }
      packages = fs.readFileSync(filePath, 'utf8');
      return this.sanitizePackageNames(packages.split(/\s/));
    };

    Install.prototype.buildModuleCache = function(packageName, callback) {
      var packageDirectory, rebuildCacheCommand;
      packageDirectory = path.join(this.atomPackagesDirectory, packageName);
      rebuildCacheCommand = new RebuildModuleCache();
      return rebuildCacheCommand.rebuild(packageDirectory, function() {
        return callback();
      });
    };

    Install.prototype.warmCompileCache = function(packageName, callback) {
      var packageDirectory;
      packageDirectory = path.join(this.atomPackagesDirectory, packageName);
      return this.getResourcePath((function(_this) {
        return function(resourcePath) {
          var CompileCache, onDirectory, onFile;
          try {
            CompileCache = require(path.join(resourcePath, 'src', 'compile-cache'));
            onDirectory = function(directoryPath) {
              return path.basename(directoryPath) !== 'node_modules';
            };
            onFile = function(filePath) {
              try {
                return CompileCache.addPathToCache(filePath, _this.atomDirectory);
              } catch (undefined) {}
            };
            fs.traverseTreeSync(packageDirectory, onFile, onDirectory);
          } catch (undefined) {}
          return callback(null);
        };
      })(this));
    };

    Install.prototype.isBundledPackage = function(packageName, callback) {
      return this.getResourcePath(function(resourcePath) {
        var atomMetadata, error, error1, ref;
        try {
          atomMetadata = JSON.parse(fs.readFileSync(path.join(resourcePath, 'package.json')));
        } catch (error1) {
          error = error1;
          return callback(false);
        }
        return callback(atomMetadata != null ? (ref = atomMetadata.packageDependencies) != null ? ref.hasOwnProperty(packageName) : void 0 : void 0);
      });
    };

    Install.prototype.getLatestCompatibleVersion = function(pack) {
      var engine, latestVersion, metadata, ref, ref1, ref2, ref3, version;
      if (!this.installedAtomVersion) {
        if (isDeprecatedPackage(pack.name, pack.releases.latest)) {
          return null;
        } else {
          return pack.releases.latest;
        }
      }
      latestVersion = null;
      ref1 = (ref = pack.versions) != null ? ref : {};
      for (version in ref1) {
        metadata = ref1[version];
        if (!semver.valid(version)) {
          continue;
        }
        if (!metadata) {
          continue;
        }
        if (isDeprecatedPackage(pack.name, version)) {
          continue;
        }
        engine = (ref2 = (ref3 = metadata.engines) != null ? ref3.atom : void 0) != null ? ref2 : '*';
        if (!semver.validRange(engine)) {
          continue;
        }
        if (!semver.satisfies(this.installedAtomVersion, engine)) {
          continue;
        }
        if (latestVersion == null) {
          latestVersion = version;
        }
        if (semver.gt(version, latestVersion)) {
          latestVersion = version;
        }
      }
      return latestVersion;
    };

    Install.prototype.getHostedGitInfo = function(name) {
      return hostedGitInfo.fromUrl(name);
    };

    Install.prototype.installGitPackage = function(packageUrl, options, callback) {
      var cloneDir, iteratee, tasks;
      tasks = [];
      cloneDir = temp.mkdirSync("atom-git-package-clone-");
      tasks.push((function(_this) {
        return function(data, next) {
          var urls;
          urls = _this.getNormalizedGitUrls(packageUrl);
          return _this.cloneFirstValidGitUrl(urls, cloneDir, options, function(err) {
            return next(err, data);
          });
        };
      })(this));
      tasks.push((function(_this) {
        return function(data, next) {
          return _this.installGitPackageDependencies(cloneDir, options, function(err) {
            return next(err, data);
          });
        };
      })(this));
      tasks.push((function(_this) {
        return function(data, next) {
          return _this.getRepositoryHeadSha(cloneDir, function(err, sha) {
            data.sha = sha;
            return next(err, data);
          });
        };
      })(this));
      tasks.push(function(data, next) {
        var metadataFilePath;
        metadataFilePath = CSON.resolve(path.join(cloneDir, 'package'));
        return CSON.readFile(metadataFilePath, function(err, metadata) {
          data.metadataFilePath = metadataFilePath;
          data.metadata = metadata;
          return next(err, data);
        });
      });
      tasks.push(function(data, next) {
        data.metadata.apmInstallSource = {
          type: "git",
          source: packageUrl,
          sha: data.sha
        };
        return CSON.writeFile(data.metadataFilePath, data.metadata, function(err) {
          return next(err, data);
        });
      });
      tasks.push((function(_this) {
        return function(data, next) {
          var name, targetDir;
          name = data.metadata.name;
          targetDir = path.join(_this.atomPackagesDirectory, name);
          if (!options.argv.json) {
            process.stdout.write("Moving " + name + " to " + targetDir + " ");
          }
          return fs.cp(cloneDir, targetDir, function(err) {
            var json;
            if (err) {
              return next(err);
            } else {
              if (!options.argv.json) {
                _this.logSuccess();
              }
              json = {
                installPath: targetDir,
                metadata: data.metadata
              };
              return next(null, json);
            }
          });
        };
      })(this));
      iteratee = function(currentData, task, next) {
        return task(currentData, next);
      };
      return async.reduce(tasks, {}, iteratee, callback);
    };

    Install.prototype.getNormalizedGitUrls = function(packageUrl) {
      var packageInfo;
      packageInfo = this.getHostedGitInfo(packageUrl);
      if (packageUrl.indexOf('file://') === 0) {
        return [packageUrl];
      } else if (packageInfo["default"] === 'sshurl') {
        return [packageInfo.toString()];
      } else if (packageInfo["default"] === 'https') {
        return [packageInfo.https().replace(/^git\+https:/, "https:")];
      } else if (packageInfo["default"] === 'shortcut') {
        return [packageInfo.https().replace(/^git\+https:/, "https:"), packageInfo.sshurl()];
      }
    };

    Install.prototype.cloneFirstValidGitUrl = function(urls, cloneDir, options, callback) {
      return async.detectSeries(urls, (function(_this) {
        return function(url, next) {
          return _this.cloneNormalizedUrl(url, cloneDir, options, function(error) {
            return next(!error);
          });
        };
      })(this), function(result) {
        var invalidUrls, invalidUrlsError;
        if (!result) {
          invalidUrls = "Couldn't clone " + (urls.join(' or '));
          invalidUrlsError = new Error(invalidUrls);
          return callback(invalidUrlsError);
        } else {
          return callback();
        }
      });
    };

    Install.prototype.cloneNormalizedUrl = function(url, cloneDir, options, callback) {
      var Develop, develop;
      Develop = require('./develop');
      develop = new Develop();
      return develop.cloneRepository(url, cloneDir, options, function(err) {
        return callback(err);
      });
    };

    Install.prototype.installGitPackageDependencies = function(directory, options, callback) {
      options.cwd = directory;
      return this.installDependencies(options, callback);
    };

    Install.prototype.getRepositoryHeadSha = function(repoDir, callback) {
      var err, error1, repo, sha;
      try {
        repo = Git.open(repoDir);
        sha = repo.getReferenceTarget("HEAD");
        return callback(null, sha);
      } catch (error1) {
        err = error1;
        return callback(err);
      }
    };

    Install.prototype.run = function(options) {
      var callback, commands, error, error1, installPackage, iteratee, packageNames, packagesFilePath;
      callback = options.callback;
      options = this.parseOptions(options.commandArgs);
      packagesFilePath = options.argv['packages-file'];
      this.createAtomDirectories();
      if (options.argv.check) {
        config.loadNpm((function(_this) {
          return function(error, npm) {
            _this.npm = npm;
            return _this.loadInstalledAtomMetadata(function() {
              return _this.checkNativeBuildTools(callback);
            });
          };
        })(this));
        return;
      }
      this.verbose = options.argv.verbose;
      if (this.verbose) {
        request.debug(true);
        process.env.NODE_DEBUG = 'request';
      }
      installPackage = (function(_this) {
        return function(name, nextInstallStep) {
          var atIndex, gitPackageInfo, version;
          gitPackageInfo = _this.getHostedGitInfo(name);
          if (gitPackageInfo || name.indexOf('file://') === 0) {
            return _this.installGitPackage(name, options, nextInstallStep);
          } else if (name === '.') {
            return _this.installDependencies(options, nextInstallStep);
          } else {
            atIndex = name.indexOf('@');
            if (atIndex > 0) {
              version = name.substring(atIndex + 1);
              name = name.substring(0, atIndex);
            }
            return _this.isBundledPackage(name, function(isBundledPackage) {
              if (isBundledPackage) {
                console.error(("The " + name + " package is bundled with Atom and should not be explicitly installed.\nYou can run `apm uninstall " + name + "` to uninstall it and then the version bundled\nwith Atom will be used.").yellow);
              }
              return _this.installRegisteredPackage({
                name: name,
                version: version
              }, options, nextInstallStep);
            });
          }
        };
      })(this);
      if (packagesFilePath) {
        try {
          packageNames = this.packageNamesFromPath(packagesFilePath);
        } catch (error1) {
          error = error1;
          return callback(error);
        }
      } else {
        packageNames = this.packageNamesFromArgv(options.argv);
        if (packageNames.length === 0) {
          packageNames.push('.');
        }
      }
      commands = [];
      commands.push((function(_this) {
        return function(callback) {
          return config.loadNpm(function(error, npm) {
            _this.npm = npm;
            return callback(error);
          });
        };
      })(this));
      commands.push((function(_this) {
        return function(callback) {
          return _this.loadInstalledAtomMetadata(function() {
            return callback();
          });
        };
      })(this));
      packageNames.forEach(function(packageName) {
        return commands.push(function(callback) {
          return installPackage(packageName, callback);
        });
      });
      iteratee = function(item, next) {
        return item(next);
      };
      return async.mapSeries(commands, iteratee, function(err, installedPackagesInfo) {
        if (err) {
          return callback(err);
        }
        installedPackagesInfo = _.compact(installedPackagesInfo);
        installedPackagesInfo = installedPackagesInfo.filter(function(item, idx) {
          return packageNames[idx] !== ".";
        });
        if (options.argv.json) {
          console.log(JSON.stringify(installedPackagesInfo, null, "  "));
        }
        return callback(null);
      });
    };

    return Install;

  })(Command);

}).call(this);
