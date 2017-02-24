(function() {
  var Command, Dedupe, _, async, config, fs, path, yargs,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    slice = [].slice;

  path = require('path');

  async = require('async');

  _ = require('underscore-plus');

  yargs = require('yargs');

  config = require('./apm');

  Command = require('./command');

  fs = require('./fs');

  module.exports = Dedupe = (function(superClass) {
    extend(Dedupe, superClass);

    Dedupe.commandNames = ['dedupe'];

    function Dedupe() {
      this.atomDirectory = config.getAtomDirectory();
      this.atomPackagesDirectory = path.join(this.atomDirectory, 'packages');
      this.atomNodeDirectory = path.join(this.atomDirectory, '.node-gyp');
      this.atomNpmPath = require.resolve('npm/bin/npm-cli');
      this.atomNodeGypPath = require.resolve('node-gyp/bin/node-gyp');
    }

    Dedupe.prototype.parseOptions = function(argv) {
      var options;
      options = yargs(argv).wrap(100);
      options.usage("\nUsage: apm dedupe [<package_name>...]\n\nReduce duplication in the node_modules folder in the current directory.\n\nThis command is experimental.");
      return options.alias('h', 'help').describe('help', 'Print this usage message');
    };

    Dedupe.prototype.installNode = function(callback) {
      var env, installNodeArgs;
      installNodeArgs = ['install'];
      installNodeArgs.push("--runtime=electron");
      installNodeArgs.push("--target=" + this.electronVersion);
      installNodeArgs.push("--dist-url=" + (config.getElectronUrl()));
      installNodeArgs.push("--arch=" + (config.getElectronArch()));
      installNodeArgs.push('--ensure');
      env = _.extend({}, process.env, {
        HOME: this.atomNodeDirectory,
        RUSTUP_HOME: config.getRustupHomeDirPath()
      });
      if (config.isWin32()) {
        env.USERPROFILE = env.HOME;
      }
      fs.makeTreeSync(this.atomDirectory);
      return config.loadNpm((function(_this) {
        return function(error, npm) {
          var proxy, ref, useStrictSsl;
          useStrictSsl = (ref = npm.config.get('strict-ssl')) != null ? ref : true;
          if (!useStrictSsl) {
            env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
          }
          proxy = npm.config.get('https-proxy') || npm.config.get('proxy') || env.HTTPS_PROXY || env.HTTP_PROXY;
          if (proxy) {
            installNodeArgs.push("--proxy=" + proxy);
          }
          return _this.fork(_this.atomNodeGypPath, installNodeArgs, {
            env: env,
            cwd: _this.atomDirectory
          }, function(code, stderr, stdout) {
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
      })(this));
    };

    Dedupe.prototype.getVisualStudioFlags = function() {
      var vsVersion;
      if (vsVersion = config.getInstalledVisualStudioFlag()) {
        return "--msvs_version=" + vsVersion;
      }
    };

    Dedupe.prototype.dedupeModules = function(options, callback) {
      process.stdout.write('Deduping modules ');
      return this.forkDedupeCommand(options, (function(_this) {
        return function() {
          var args;
          args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          return _this.logCommandResults.apply(_this, [callback].concat(slice.call(args)));
        };
      })(this));
    };

    Dedupe.prototype.forkDedupeCommand = function(options, callback) {
      var dedupeArgs, dedupeOptions, env, i, len, packageName, ref, vsArgs;
      dedupeArgs = ['--globalconfig', config.getGlobalConfigPath(), '--userconfig', config.getUserConfigPath(), 'dedupe'];
      dedupeArgs.push("--runtime=electron");
      dedupeArgs.push("--target=" + this.electronVersion);
      dedupeArgs.push("--arch=" + (config.getElectronArch()));
      if (options.argv.silent) {
        dedupeArgs.push('--silent');
      }
      if (options.argv.quiet) {
        dedupeArgs.push('--quiet');
      }
      if (vsArgs = this.getVisualStudioFlags()) {
        dedupeArgs.push(vsArgs);
      }
      ref = options.argv._;
      for (i = 0, len = ref.length; i < len; i++) {
        packageName = ref[i];
        dedupeArgs.push(packageName);
      }
      env = _.extend({}, process.env, {
        HOME: this.atomNodeDirectory,
        RUSTUP_HOME: config.getRustupHomeDirPath()
      });
      if (config.isWin32()) {
        env.USERPROFILE = env.HOME;
      }
      dedupeOptions = {
        env: env
      };
      if (options.cwd) {
        dedupeOptions.cwd = options.cwd;
      }
      return this.fork(this.atomNpmPath, dedupeArgs, dedupeOptions, callback);
    };

    Dedupe.prototype.createAtomDirectories = function() {
      fs.makeTreeSync(this.atomDirectory);
      return fs.makeTreeSync(this.atomNodeDirectory);
    };

    Dedupe.prototype.run = function(options) {
      var callback, commands, cwd;
      callback = options.callback, cwd = options.cwd;
      options = this.parseOptions(options.commandArgs);
      options.cwd = cwd;
      this.createAtomDirectories();
      commands = [];
      commands.push((function(_this) {
        return function(callback) {
          return _this.loadInstalledAtomMetadata(callback);
        };
      })(this));
      commands.push((function(_this) {
        return function(callback) {
          return _this.installNode(callback);
        };
      })(this));
      commands.push((function(_this) {
        return function(callback) {
          return _this.dedupeModules(options, callback);
        };
      })(this));
      return async.waterfall(commands, callback);
    };

    return Dedupe;

  })(Command);

}).call(this);
