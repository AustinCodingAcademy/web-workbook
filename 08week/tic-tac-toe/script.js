'use strict';

$(document).ready(function() {
  var move = 1;
  var play = true;

  //adds Xs and Os to board, checking first to see if space is blank and if game is currently in play
  $(".row div").click(function() {
    if ($(this).text() == "" && play) {
      if ((move % 2) == 1) { //if move is odd, X is marked
        $(this).append("X").animate({
          fontSize: "50px"
        });
      } else {
        $(this).append("O").animate({
          fontSize: "50px"
        });
      }
      move++;
      //first if checks to make sure there is an actual winner, second if alerts which player won
      if (checkForWinner() != -1 && checkForWinner() != "") {
        if (checkForWinner() == "X") {
          alert("Player 1 wins!");
        } else {
          alert("Player 2 wins!");
        }
        play = false;
      }
      if (checkForWinner() == -1) {
        alert("Draw!")
      }
    }
  });
  //check text in each space
  function checkForWinner() {
    var space1 = $("#0").text();
    var space2 = $("#1").text();
    var space3 = $("#2").text();
    var space4 = $("#3").text();
    var space5 = $("#4").text();
    var space6 = $("#5").text();
    var space7 = $("#6").text();
    var space8 = $("#7").text();
    var space9 = $("#8").text();
    // check rows
    if ((space1 == space2) && (space2 == space3)) {
      return space3;
    } else if ((space4 == space5) && (space5 == space6)) {
      return space6;
    } else if ((space7 == space8) && (space8 == space9)) {
      return space9;
    }
    // check columns
    else if ((space1 == space4) && (space4 == space7)) {
      return space7;
    } else if ((space2 == space5) && (space5 == space8)) {
      return space8;
    } else if ((space3 == space6) && (space6 == space9)) {
      return space9;
    }
    // check diagonals
    else if ((space1 == space5) && (space5 == space9)) {
      return space9;
    } else if ((space3 == space5) && (space5 == space7)) {
      return space7;
    }
    // no winner
    return -1;
  }

  //clear board and reset game
  $("button").click(function() {
    $(".cell").empty();
    play = true;
  });



});