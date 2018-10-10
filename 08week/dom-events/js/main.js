"use strict";
// when the document is done loading, run the script inside
$(document).ready(function() {
  var cntByOnes = 1;
  var cntByTens = 10;
  var cntByHundreds = 100;

  alert("Are you ready to count by ones, tens and hundreds?");

  // Count By One
  $("#counter-1").click(function() {
    cntByOnes++;
    $(this).text(cntByOnes);
  });

  // Count By Ten
  $("#counter-10").click(function() {
    cntByTens += 10;
    $(this).text(cntByTens);
  });

  // Count By Hundreds
  $("#counter-100").click(function() {
    cntByHundreds += 100;
    $(this).text(cntByHundreds);
  });

  // Count By All
  $("#counter-all").click(function() {
    cntByOnes++;
    cntByTens += 10;
    cntByHundreds += 100;

    $("#counter-1").text(cntByOnes);
    $("#counter-10").text(cntByTens);
    $("#counter-100").text(cntByHundreds);
  });

  // Reset
  $("#reset").click(function() {
    cntByOnes = 1;
    cntByTens = 10;
    cntByHundreds = 100;

    $("#counter-1").text(cntByOnes);
    $("#counter-10").text(cntByTens);
    $("#counter-100").text(cntByHundreds);
  });
});
