(function() {
  var CSON, Clean, Command, _, async, config, fs, path, yargs,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    slice = [].slice;

  path = require('path');

  async = require('async');

  CSON = require('season');

  yargs = require('yargs');

  _ = require('underscore-plus');

  Command = require('./command');

  config = require('./apm');

  fs = require('./fs');

  module.exports = Clean = (function(superClass) {
    extend(Clean, superClass);

    Clean.commandNames = ['clean'];

    function Clean() {
      this.atomNpmPath = require.resolve('npm/bin/npm-cli');
    }

    Clean.prototype.getDependencies = function(modulePath, allDependencies) {
      var dependencies, error, error1, i, installedModule, len, modulesPath, packageDependencies, ref, ref1, ref2, results;
      try {
        ref1 = (ref = CSON.readFileSync(CSON.resolve(path.join(modulePath, 'package')))) != null ? ref : {}, dependencies = ref1.dependencies, packageDependencies = ref1.packageDependencies;
      } catch (error1) {
        error = error1;
        return;
      }
      _.extend(allDependencies, dependencies);
      modulesPath = path.join(modulePath, 'node_modules');
      ref2 = fs.list(modulesPath);
      results = [];
      for (i = 0, len = ref2.length; i < len; i++) {
        installedModule = ref2[i];
        if (installedModule !== '.bin') {
          results.push(this.getDependencies(path.join(modulesPath, installedModule), allDependencies));
        }
      }
      return results;
    };

    Clean.prototype.getModulesToRemove = function() {
      var dependencies, devDependencies, i, installedModule, installedModules, j, len, len1, modulesPath, modulesToRemove, packageDependencies, packagePath, ref, ref1;
      packagePath = CSON.resolve('package');
      if (!packagePath) {
        return [];
      }
      ref1 = (ref = CSON.readFileSync(packagePath)) != null ? ref : {}, devDependencies = ref1.devDependencies, dependencies = ref1.dependencies, packageDependencies = ref1.packageDependencies;
      if (devDependencies == null) {
        devDependencies = {};
      }
      if (dependencies == null) {
        dependencies = {};
      }
      if (packageDependencies == null) {
        packageDependencies = {};
      }
      modulesToRemove = [];
      modulesPath = path.resolve('node_modules');
      installedModules = fs.list(modulesPath).filter(function(modulePath) {
        return modulePath !== '.bin' && modulePath !== 'atom-package-manager';
      });
      for (i = 0, len = installedModules.length; i < len; i++) {
        installedModule = installedModules[i];
        this.getDependencies(path.join(modulesPath, installedModule), dependencies);
      }
      for (j = 0, len1 = installedModules.length; j < len1; j++) {
        installedModule = installedModules[j];
        if (dependencies.hasOwnProperty(installedModule)) {
          continue;
        }
        if (devDependencies.hasOwnProperty(installedModule)) {
          continue;
        }
        if (packageDependencies.hasOwnProperty(installedModule)) {
          continue;
        }
        modulesToRemove.push(installedModule);
      }
      return modulesToRemove;
    };

    Clean.prototype.parseOptions = function(argv) {
      var options;
      options = yargs(argv).wrap(100);
      options.usage("Usage: apm clean\n\nDeletes all packages in the node_modules folder that are not referenced\nas a dependency in the package.json file.");
      return options.alias('h', 'help').describe('help', 'Print this usage message');
    };

    Clean.prototype.removeModule = function(module, callback) {
      process.stdout.write("Removing " + module + " ");
      return this.fork(this.atomNpmPath, ['uninstall', module], (function(_this) {
        return function() {
          var args;
          args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          return _this.logCommandResults.apply(_this, [callback].concat(slice.call(args)));
        };
      })(this));
    };

    Clean.prototype.run = function(options) {
      var doneCallback, uninstallCommands;
      uninstallCommands = [];
      this.getModulesToRemove().forEach((function(_this) {
        return function(module) {
          return uninstallCommands.push(function(callback) {
            return _this.removeModule(module, callback);
          });
        };
      })(this));
      if (uninstallCommands.length > 0) {
        doneCallback = (function(_this) {
          return function(error) {
            if (error != null) {
              return options.callback(error);
            } else {
              return _this.run(options);
            }
          };
        })(this);
      } else {
        doneCallback = options.callback;
      }
      return async.waterfall(uninstallCommands, doneCallback);
    };

    return Clean;

  })(Command);

}).call(this);
