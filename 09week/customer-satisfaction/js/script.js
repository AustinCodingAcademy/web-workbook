'use strict';

$(document).ready(function() {
  $("#explain-no").hide();
  $("#no").click(function() {
      $("#explain-no").show();
  });
  $("#yes").click(function() {
      $("#explain-no").hide();
  });
});
