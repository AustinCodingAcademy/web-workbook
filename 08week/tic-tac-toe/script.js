"use strict";
//building tic tac toe
$(document).ready(function() {
  let character = "X";
  $("[data-cell]").click(function() {
    let currentText = $(this).text();
    console.log(currentText);
    if (!currentText) {
      $(this).prepend(`${character}`);
      if (character === "O") {
        character = "X";
      } else {
        character = "O";
      }
    }
  });
  //hiding and showing who won
  $(".row").text(function() {
    $("#announce-winner").show(text("Winner"));
    $("#announce-winner").hide();
  });
});
