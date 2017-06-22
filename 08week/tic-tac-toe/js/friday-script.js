'use strict';
//add x to board
$(document).ready(function() {
  $("[data-cell]").click(function() {
    //turn off click
    $(this).text("X").off();
    checkForWin();
  });

  //change player turn
  var playerTurn = "X";
  $("[data-cell]").click(function() {
    $(this).text(playerTurn);
    playerTurn = (playerTurn == "X") ? 'O' : 'X';
  })

  //czech for win
  function verticalWin() {
    if (
      $('div [data-cell="0"]').text() === playerTurn && $('div [data-cell="1"]').text() === playerTurn && $('div [data-cell="2"]').text() === playerTurn ||
      $('div [data-cell="3"]').text() === playerTurn && $('div [data-cell="4"]').text() === playerTurn && $('div [data-cell="5"]').text() === playerTurn ||
      $('div [data-cell="6"]').text() === playerTurn && $('div [data-cell="7"]').text() === playerTurn && $('div [data-cell="8"]').text() === playerTurn
    ) {
      return true;
    }
  }

  function horizontalWin() {
    if (
      $('div [data-cell="0"]').text() === playerTurn && $('div [data-cell="3"]').text() === playerTurn && $('div [data-cell="6"]').text() === playerTurn ||
      $('div [data-cell="1"]').text() === playerTurn && $('div [data-cell="4"]').text() === playerTurn && $('div [data-cell="7"]').text() === playerTurn ||
      $('div [data-cell="2"]').text() === playerTurn && $('div [data-cell="5"]').text() === playerTurn && $('div [data-cell="8"]').text() === playerTurn
    ) {
      return true;
    }
  }

  function diagonalWin() {
    if (
      $('div [data-cell="0"]').text() === playerTurn && $('div [data-cell="4"]').text() === playerTurn && $('div [data-cell="8"]').text() === playerTurn ||
      $('div [data-cell="2"]').text() === playerTurn && $('div [data-cell="4"]').text() === playerTurn && $('div [data-cell="6"]').text() === playerTurn
    ) {
      return true;
    }
  }

  function checkForWin() {
    if (horizontalWin() || verticalWin() || diagonalWin()) {
      $("#announce-winner").text("Player " + playerTurn + " Wins!");
      //turn off click if winner
      $("[data-cell]").off();
    }
  }

  $("#clear").click(function(){
    $(".html").html("");
  });
});
