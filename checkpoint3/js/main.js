"use strict";
$(document).ready(function() {
  var cntByOnes = 0;

  $("#anvil").mousedown(function() {
    $("#hammer").toggleClass("down");
    $("#anvil").toggleClass("shake");
    cntByOnes++;
    $("#counter").text(cntByOnes);
  });

  $("#anvil").mouseup(function() {
    $("#hammer").toggleClass("down");
    $("#anvil").toggleClass("shake");
  });

  // Reset
  $("#reset").click(function() {
    cntByOnes = 1;
    $("#counter").text(cntByOnes);
  });
});
