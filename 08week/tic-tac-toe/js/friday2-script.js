'use strict';
//add x to board
$(document).ready(function() {
  $("[data-cell]").click(function() {
    //turn off click
    $(this).text("X").off();
    checkForWin();
  });

  //change player turn
  var playerX = "X";
  var playerO = "O";
  $("[data-cell]").click(function() {
   $(this).text(playerX);
   playerX = (playerX == "X") ? 'O' : 'X';
 })



  //czech for win
  function verticalWin() {
    if (
      $('div [data-cell="0"]').text() === playerX && $('div [data-cell="1"]').text() === playerX && $('div [data-cell="2"]').text() === playerX ||
      $('div [data-cell="3"]').text() === playerX && $('div [data-cell="4"]').text() === playerX && $('div [data-cell="5"]').text() === playerX ||
      $('div [data-cell="6"]').text() === playerX && $('div [data-cell="7"]').text() === playerX && $('div [data-cell="8"]').text() === playerX ||
      $('div [data-cell="0"]').text() === playerO && $('div [data-cell="1"]').text() === playerO && $('div [data-cell="2"]').text() === playerO ||
      $('div [data-cell="3"]').text() === playerO && $('div [data-cell="4"]').text() === playerO && $('div [data-cell="5"]').text() === playerO ||
      $('div [data-cell="6"]').text() === playerO && $('div [data-cell="7"]').text() === playerO && $('div [data-cell="8"]').text() === playerO
    ) {
      return true;
    }
  }

  function horizontalWin() {
    if (
      $('div [data-cell="0"]').text() === playerX && $('div [data-cell="3"]').text() === playerX && $('div [data-cell="6"]').text() === playerX ||
      $('div [data-cell="1"]').text() === playerX && $('div [data-cell="4"]').text() === playerX && $('div [data-cell="7"]').text() === playerX ||
      $('div [data-cell="2"]').text() === playerX && $('div [data-cell="5"]').text() === playerX && $('div [data-cell="8"]').text() === playerX ||
      $('div [data-cell="0"]').text() === playerO && $('div [data-cell="3"]').text() === playerO && $('div [data-cell="6"]').text() === playerO ||
      $('div [data-cell="1"]').text() === playerO && $('div [data-cell="4"]').text() === playerO && $('div [data-cell="7"]').text() === playerO ||
      $('div [data-cell="2"]').text() === playerO && $('div [data-cell="5"]').text() === playerO && $('div [data-cell="8"]').text() === playerO
    ) {
      return true;
    }
  }

  function diagonalWin() {
    if (
      $('div [data-cell="0"]').text() === playerX && $('div [data-cell="4"]').text() === playerX && $('div [data-cell="8"]').text() === playerX ||
      $('div [data-cell="2"]').text() === playerX && $('div [data-cell="4"]').text() === playerX && $('div [data-cell="6"]').text() === playerX ||
      $('div [data-cell="0"]').text() === playerO && $('div [data-cell="4"]').text() === playerO && $('div [data-cell="8"]').text() === playerO ||
      $('div [data-cell="2"]').text() === playerO && $('div [data-cell="4"]').text() === playerO && $('div [data-cell="6"]').text() === playerO
    ) {
      return true;
    }
  }

  function checkForWin() {
    if (horizontalWin() || verticalWin() || diagonalWin()) {
      $("#announce-winner").text("Player " + playerX + " Wins!");
      //turn off click if winner


    //} else {
    //  $("#announce-winner").text("Player " + playerO + " Wins!");

  //  }
    $("[data-cell]").off();
  }
});
