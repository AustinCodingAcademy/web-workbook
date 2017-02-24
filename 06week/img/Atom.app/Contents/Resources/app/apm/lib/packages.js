(function() {
  var url;

  url = require('url');

  module.exports = {
    getRepository: function(pack) {
      var name, owner, ref, ref1, ref2, repoPath, repository;
      if (pack == null) {
        pack = {};
      }
      if (repository = (ref = (ref1 = pack.repository) != null ? ref1.url : void 0) != null ? ref : pack.repository) {
        repoPath = url.parse(repository.replace(/\.git$/, '')).pathname;
        ref2 = repoPath.split('/').slice(-2), name = ref2[0], owner = ref2[1];
        if (name && owner) {
          return name + "/" + owner;
        }
      }
      return null;
    }
  };

}).call(this);
