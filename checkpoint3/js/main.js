"use strict";
$(document).ready(function() {
  var cntByOnes = 1;
  var boxes = $(".box");

  // Count By One
  $("#counter-1").click(function() {
    cntByOnes++;
    $(this).text(cntByOnes);
  });

  // Reset
  $("#reset").click(function() {
    cntByOnes = 1;
    $("#counter-1").text(cntByOnes);
  });
});
