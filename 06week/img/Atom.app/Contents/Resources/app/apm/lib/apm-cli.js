(function() {
  var _, colors, commandClass, commandClasses, commands, config, fs, getPythonVersion, git, i, j, len, len1, name, npm, parseOptions, path, printVersions, ref, ref1, setupTempDirectory, showHelp, spawn, wordwrap, yargs;

  spawn = require('child_process').spawn;

  path = require('path');

  _ = require('underscore-plus');

  colors = require('colors');

  npm = require('npm');

  yargs = require('yargs');

  wordwrap = require('wordwrap');

  require('asar-require');

  config = require('./apm');

  fs = require('./fs');

  git = require('./git');

  setupTempDirectory = function() {
    var temp, tempDirectory;
    temp = require('temp');
    tempDirectory = require('os').tmpdir();
    tempDirectory = path.resolve(fs.absolute(tempDirectory));
    temp.dir = tempDirectory;
    try {
      fs.makeTreeSync(temp.dir);
    } catch (undefined) {}
    return temp.track();
  };

  setupTempDirectory();

  commandClasses = [require('./clean'), require('./config'), require('./dedupe'), require('./develop'), require('./disable'), require('./docs'), require('./enable'), require('./featured'), require('./init'), require('./install'), require('./links'), require('./link'), require('./list'), require('./login'), require('./publish'), require('./rebuild'), require('./rebuild-module-cache'), require('./search'), require('./star'), require('./stars'), require('./test'), require('./uninstall'), require('./unlink'), require('./unpublish'), require('./unstar'), require('./upgrade'), require('./view')];

  commands = {};

  for (i = 0, len = commandClasses.length; i < len; i++) {
    commandClass = commandClasses[i];
    ref1 = (ref = commandClass.commandNames) != null ? ref : [];
    for (j = 0, len1 = ref1.length; j < len1; j++) {
      name = ref1[j];
      commands[name] = commandClass;
    }
  }

  parseOptions = function(args) {
    var arg, index, k, len2, options;
    if (args == null) {
      args = [];
    }
    options = yargs(args).wrap(100);
    options.usage("\napm - Atom Package Manager powered by https://atom.io\n\nUsage: apm <command>\n\nwhere <command> is one of:\n" + (wordwrap(4, 80)(Object.keys(commands).sort().join(', '))) + ".\n\nRun `apm help <command>` to see the more details about a specific command.");
    options.alias('v', 'version').describe('version', 'Print the apm version');
    options.alias('h', 'help').describe('help', 'Print this usage message');
    options.boolean('color')["default"]('color', true).describe('color', 'Enable colored output');
    options.command = options.argv._[0];
    for (index = k = 0, len2 = args.length; k < len2; index = ++k) {
      arg = args[index];
      if (!(arg === options.command)) {
        continue;
      }
      options.commandArgs = args.slice(index + 1);
      break;
    }
    return options;
  };

  showHelp = function(options) {
    var help;
    if (options == null) {
      return;
    }
    help = options.help();
    if (help.indexOf('Options:') >= 0) {
      help += "\n  Prefix an option with `no-` to set it to false such as --no-color to disable";
      help += "\n  colored output.";
    }
    return console.error(help);
  };

  printVersions = function(args, callback) {
    var apmVersion, nodeVersion, npmVersion, ref2, ref3, ref4;
    apmVersion = (ref2 = require('../package.json').version) != null ? ref2 : '';
    npmVersion = (ref3 = require('npm/package.json').version) != null ? ref3 : '';
    nodeVersion = (ref4 = process.versions.node) != null ? ref4 : '';
    return getPythonVersion(function(pythonVersion) {
      return git.getGitVersion(function(gitVersion) {
        var ref5, versions, visualStudioVersion;
        if (args.json) {
          versions = {
            apm: apmVersion,
            npm: npmVersion,
            node: nodeVersion,
            python: pythonVersion,
            git: gitVersion
          };
          if (config.isWin32()) {
            versions.visualStudio = config.getInstalledVisualStudioFlag();
          }
          console.log(JSON.stringify(versions));
        } else {
          if (pythonVersion == null) {
            pythonVersion = '';
          }
          if (gitVersion == null) {
            gitVersion = '';
          }
          versions = 'apm'.red + "  " + apmVersion.red + "\n" + 'npm'.green + "  " + npmVersion.green + "\n" + 'node'.blue + " " + nodeVersion.blue + "\n" + 'python'.yellow + " " + pythonVersion.yellow + "\n" + 'git'.magenta + " " + gitVersion.magenta;
          if (config.isWin32()) {
            visualStudioVersion = (ref5 = config.getInstalledVisualStudioFlag()) != null ? ref5 : '';
            versions += "\n" + 'visual studio'.cyan + " " + visualStudioVersion.cyan;
          }
          console.log(versions);
        }
        return callback();
      });
    });
  };

  getPythonVersion = function(callback) {
    var npmOptions;
    npmOptions = {
      userconfig: config.getUserConfigPath(),
      globalconfig: config.getGlobalConfigPath()
    };
    return npm.load(npmOptions, function() {
      var outputChunks, python, pythonExe, ref2, ref3, rootDir, spawned;
      python = (ref2 = npm.config.get('python')) != null ? ref2 : process.env.PYTHON;
      if (config.isWin32() && !python) {
        rootDir = (ref3 = process.env.SystemDrive) != null ? ref3 : 'C:\\';
        if (rootDir[rootDir.length - 1] !== '\\') {
          rootDir += '\\';
        }
        pythonExe = path.resolve(rootDir, 'Python27', 'python.exe');
        if (fs.isFileSync(pythonExe)) {
          python = pythonExe;
        }
      }
      if (python == null) {
        python = 'python';
      }
      spawned = spawn(python, ['--version']);
      outputChunks = [];
      spawned.stderr.on('data', function(chunk) {
        return outputChunks.push(chunk);
      });
      spawned.stdout.on('data', function(chunk) {
        return outputChunks.push(chunk);
      });
      spawned.on('error', function() {});
      return spawned.on('close', function(code) {
        var ref4, version;
        if (code === 0) {
          ref4 = Buffer.concat(outputChunks).toString().split(' '), name = ref4[0], version = ref4[1];
          version = version != null ? version.trim() : void 0;
        }
        return callback(version);
      });
    });
  };

  module.exports = {
    run: function(args, callback) {
      var Command, base, base1, callbackCalled, command, options;
      config.setupApmRcFile();
      options = parseOptions(args);
      if (!options.argv.color) {
        colors.setTheme({
          blue: 'stripColors',
          cyan: 'stripColors',
          green: 'stripColors',
          magenta: 'stripColors',
          red: 'stripColors',
          yellow: 'stripColors',
          rainbow: 'stripColors'
        });
      }
      callbackCalled = false;
      options.callback = function(error) {
        var message, ref2;
        if (callbackCalled) {
          return;
        }
        callbackCalled = true;
        if (error != null) {
          if (_.isString(error)) {
            message = error;
          } else {
            message = (ref2 = error.message) != null ? ref2 : error;
          }
          if (message === 'canceled') {
            console.log();
          } else if (message) {
            console.error(message.red);
          }
        }
        return typeof callback === "function" ? callback(error) : void 0;
      };
      args = options.argv;
      command = options.command;
      if (args.version) {
        return printVersions(args, options.callback);
      } else if (args.help) {
        if (Command = commands[options.command]) {
          showHelp(typeof (base = new Command()).parseOptions === "function" ? base.parseOptions(options.command) : void 0);
        } else {
          showHelp(options);
        }
        return options.callback();
      } else if (command) {
        if (command === 'help') {
          if (Command = commands[options.commandArgs]) {
            showHelp(typeof (base1 = new Command()).parseOptions === "function" ? base1.parseOptions(options.commandArgs) : void 0);
          } else {
            showHelp(options);
          }
          return options.callback();
        } else if (Command = commands[command]) {
          return new Command().run(options);
        } else {
          return options.callback("Unrecognized command: " + command);
        }
      } else {
        showHelp(options);
        return options.callback();
      }
    }
  };

}).call(this);
