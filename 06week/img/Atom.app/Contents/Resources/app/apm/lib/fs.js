(function() {
  var _, fs, fsAdditions, ncp, rm, wrench;

  _ = require('underscore-plus');

  fs = require('fs-plus');

  ncp = require('ncp');

  rm = require('rimraf');

  wrench = require('wrench');

  fsAdditions = {
    list: function(directoryPath) {
      var e, error1;
      if (fs.isDirectorySync(directoryPath)) {
        try {
          return fs.readdirSync(directoryPath);
        } catch (error1) {
          e = error1;
          return [];
        }
      } else {
        return [];
      }
    },
    listRecursive: function(directoryPath) {
      return wrench.readdirSyncRecursive(directoryPath);
    },
    cp: function(sourcePath, destinationPath, callback) {
      return rm(destinationPath, function(error) {
        if (error != null) {
          return callback(error);
        } else {
          return ncp(sourcePath, destinationPath, callback);
        }
      });
    }
  };

  module.exports = _.extend({}, fs, fsAdditions);

}).call(this);
