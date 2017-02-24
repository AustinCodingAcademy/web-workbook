(function() {
  var error, error1, keytar, tokenName;

  try {
    keytar = require('keytar');
  } catch (error1) {
    error = error1;
    if (process.platform === 'linux') {
      keytar = {
        findPassword: function() {},
        replacePassword: function() {}
      };
    } else {
      throw error;
    }
  }

  tokenName = 'Atom.io API Token';

  module.exports = {
    getToken: function(callback) {
      var token;
      if (token = keytar.findPassword(tokenName)) {
        callback(null, token);
        return;
      }
      if (token = process.env.ATOM_ACCESS_TOKEN) {
        callback(null, token);
        return;
      }
      return callback("No Atom.io API token in keychain\nRun `apm login` or set the `ATOM_ACCESS_TOKEN` environment variable.");
    },
    saveToken: function(token) {
      return keytar.replacePassword(tokenName, 'atom.io', token);
    }
  };

}).call(this);
