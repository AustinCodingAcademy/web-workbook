(function() {
  var apm;

  apm = require('./apm-cli');

  process.title = 'apm';

  apm.run(process.argv.slice(2), function(error) {
    return process.exitCode = error != null ? 1 : 0;
  });

}).call(this);
