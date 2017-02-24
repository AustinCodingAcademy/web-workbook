(function() {
  var child_process, fs, npm, path, semver;

  child_process = require('child_process');

  fs = require('./fs');

  path = require('path');

  npm = require('npm');

  semver = require('semver');

  module.exports = {
    getHomeDirectory: function() {
      if (process.platform === 'win32') {
        return process.env.USERPROFILE;
      } else {
        return process.env.HOME;
      }
    },
    getAtomDirectory: function() {
      var ref;
      return (ref = process.env.ATOM_HOME) != null ? ref : path.join(this.getHomeDirectory(), '.atom');
    },
    getRustupHomeDirPath: function() {
      if (process.env.RUSTUP_HOME) {
        return process.env.RUSTUP_HOME;
      } else {
        return path.join(this.getHomeDirectory(), '.multirust');
      }
    },
    getCacheDirectory: function() {
      return path.join(this.getAtomDirectory(), '.apm');
    },
    getResourcePath: function(callback) {
      var apmFolder, appFolder, appLocation, asarPath;
      if (process.env.ATOM_RESOURCE_PATH) {
        return process.nextTick(function() {
          return callback(process.env.ATOM_RESOURCE_PATH);
        });
      }
      apmFolder = path.resolve(__dirname, '..');
      appFolder = path.dirname(apmFolder);
      if (path.basename(apmFolder) === 'apm' && path.basename(appFolder) === 'app') {
        asarPath = appFolder + ".asar";
        if (fs.existsSync(asarPath)) {
          return process.nextTick(function() {
            return callback(asarPath);
          });
        }
      }
      apmFolder = path.resolve(__dirname, '..', '..', '..');
      appFolder = path.dirname(apmFolder);
      if (path.basename(apmFolder) === 'apm' && path.basename(appFolder) === 'app') {
        asarPath = appFolder + ".asar";
        if (fs.existsSync(asarPath)) {
          return process.nextTick(function() {
            return callback(asarPath);
          });
        }
      }
      switch (process.platform) {
        case 'darwin':
          return child_process.exec('mdfind "kMDItemCFBundleIdentifier == \'com.github.atom\'"', function(error, stdout, stderr) {
            var appLocation;
            if (stdout == null) {
              stdout = '';
            }
            if (!error) {
              appLocation = stdout.split('\n')[0];
            }
            if (!appLocation) {
              appLocation = '/Applications/Atom.app';
            }
            return callback(appLocation + "/Contents/Resources/app.asar");
          });
        case 'linux':
          appLocation = '/usr/local/share/atom/resources/app.asar';
          if (!fs.existsSync(appLocation)) {
            appLocation = '/usr/share/atom/resources/app.asar';
          }
          return process.nextTick(function() {
            return callback(appLocation);
          });
        case 'win32':
          return process.nextTick(function() {
            var programFilesPath;
            programFilesPath = path.join(process.env.ProgramFiles, 'Atom', 'resources', 'app.asar');
            return callback(programFilesPath);
          });
      }
    },
    getReposDirectory: function() {
      var ref;
      return (ref = process.env.ATOM_REPOS_HOME) != null ? ref : path.join(this.getHomeDirectory(), 'github');
    },
    getElectronUrl: function() {
      var ref;
      return (ref = process.env.ATOM_ELECTRON_URL) != null ? ref : 'https://atom.io/download/atom-shell';
    },
    getAtomPackagesUrl: function() {
      var ref;
      return (ref = process.env.ATOM_PACKAGES_URL) != null ? ref : (this.getAtomApiUrl()) + "/packages";
    },
    getAtomApiUrl: function() {
      var ref;
      return (ref = process.env.ATOM_API_URL) != null ? ref : 'https://atom.io/api';
    },
    getElectronArch: function() {
      switch (process.platform) {
        case 'darwin':
          return 'x64';
        case 'win32':
          return 'ia32';
        default:
          return process.arch;
      }
    },
    getUserConfigPath: function() {
      return path.resolve(this.getAtomDirectory(), '.apmrc');
    },
    getGlobalConfigPath: function() {
      return path.resolve(this.getAtomDirectory(), '.apm', '.apmrc');
    },
    isWin32: function() {
      return process.platform === 'win32';
    },
    isWindows64Bit: function() {
      return fs.existsSync("C:\\Windows\\SysWow64\\Notepad.exe");
    },
    x86ProgramFilesDirectory: function() {
      return process.env["ProgramFiles(x86)"] || process.env["ProgramFiles"];
    },
    getInstalledVisualStudioFlag: function() {
      if (!this.isWin32()) {
        return null;
      }
      if (process.env.GYP_MSVS_VERSION) {
        return process.env.GYP_MSVS_VERSION;
      }
      if (this.visualStudioIsInstalled("14.0")) {
        return '2015';
      }
      if (this.visualStudioIsInstalled("12.0")) {
        return '2013';
      }
      if (this.visualStudioIsInstalled("11.0")) {
        return '2012';
      }
      if (this.visualStudioIsInstalled("10.0")) {
        return '2010';
      }
    },
    visualStudioIsInstalled: function(version) {
      return fs.existsSync(path.join(this.x86ProgramFilesDirectory(), "Microsoft Visual Studio " + version, "Common7", "IDE"));
    },
    loadNpm: function(callback) {
      var npmOptions;
      npmOptions = {
        userconfig: this.getUserConfigPath(),
        globalconfig: this.getGlobalConfigPath()
      };
      return npm.load(npmOptions, function() {
        return callback(null, npm);
      });
    },
    getSetting: function(key, callback) {
      return this.loadNpm(function() {
        return callback(npm.config.get(key));
      });
    },
    setupApmRcFile: function() {
      try {
        return fs.writeFileSync(this.getGlobalConfigPath(), "; This file is auto-generated and should not be edited since any\n; modifications will be lost the next time any apm command is run.\n;\n; You should instead edit your .apmrc config located in ~/.atom/.apmrc\ncache = " + (this.getCacheDirectory()) + "\n; Hide progress-bar to prevent npm from altering apm console output.\nprogress = false");
      } catch (undefined) {}
    }
  };

}).call(this);
