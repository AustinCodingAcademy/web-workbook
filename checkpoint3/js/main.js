"use strict";
$(document).ready(function() {
  var cntByOnes = 1;

  // Count By One
  $("#anvil").click(function() {
    cntByOnes++;
    $("#counter").text(cntByOnes);
  });

  // Reset
  $("#reset").click(function() {
    cntByOnes = 1;
    $("#counter").text(cntByOnes);
  });
});
