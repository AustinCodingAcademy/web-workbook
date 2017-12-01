'use strict';

$(document).ready(function() {
  var playerTurn = 'X';
  var turnCount = 9;
  $('[data-cell]').click(function() {
    if ($(this).text() === '' && $('#winner').text() === '') {
      $(this).text(playerTurn);
      turnCount--;
      $('#rageTimer').text(`Turns left: ${turnCount}`)
      checkWin();
      if (playerTurn === 'X') {
        playerTurn = 'O';
      } else {
        playerTurn = 'X';
      }
    }
  })

  // function fillBoard() {
  //   $('[data-cell = "0"]').text(playerTurn);
  //   $('[data-cell = "1"]').text(playerTurn);
  //   $('[data-cell = "2"]').text(playerTurn);
  //   $('[data-cell = "3"]').text(playerTurn);
  //   $('[data-cell = "4"]').text(playerTurn);
  //   $('[data-cell = "5"]').text(playerTurn);
  //   $('[data-cell = "6"]').text(playerTurn);
  //   $('[data-cell = "7"]').text(playerTurn);
  //   $('[data-cell = "8"]').text(playerTurn);
  //
  // }

  function checkWin() {
    if ($('[data-cell = "0"]').text() === playerTurn &&
      $('[data-cell = "1"]').text() === playerTurn &&
      $('[data-cell = "2"]').text() === playerTurn) {
        $('#winner').text(`${playerTurn} is the winner`);
      turnCount = 9;
      // fillBoard();
    } else if ($('[data-cell = "0"]').text() === playerTurn &&
      $('[data-cell = "3"]').text() === playerTurn &&
      $('[data-cell = "6"]').text() === playerTurn) {
        $('#winner').text(`${playerTurn} is the winner`);
      turnCount = 9;
      // fillBoard();
    } else if ($('[data-cell = "0"]').text() === playerTurn &&
      $('[data-cell = "4"]').text() === playerTurn &&
      $('[data-cell = "8"]').text() === playerTurn) {
        $('#winner').text(`${playerTurn} is the winner`);
      turnCount = 9;
      // fillBoard();
    } else if ($('[data-cell = "2"]').text() === playerTurn &&
      $('[data-cell = "5"]').text() === playerTurn &&
      $('[data-cell = "8"]').text() === playerTurn) {
        $('#winner').text(`${playerTurn} is the winner`);
      turnCount = 9;
      // fillBoard();
    } else if ($('[data-cell = "2"]').text() === playerTurn &&
      $('[data-cell = "4"]').text() === playerTurn &&
      $('[data-cell = "6"]').text() === playerTurn) {
        $('#winner').text(`${playerTurn} is the winner`);
      turnCount = 9;
      // fillBoard();
    } else if ($('[data-cell = "6"]').text() === playerTurn &&
      $('[data-cell = "7"]').text() === playerTurn &&
      $('[data-cell = "8"]').text() === playerTurn) {
        $('#winner').text(`${playerTurn} is the winner`);
      turnCount = 9;
      // fillBoard();
    } else if ($('[data-cell = "2"]').text() === playerTurn &&
      $('[data-cell = "5"]').text() === playerTurn &&
      $('[data-cell = "8"]').text() === playerTurn) {
        $('#winner').text(`${playerTurn} is the winner`);
      turnCount = 9;
      // fillBoard();
    } else if ($('[data-cell = "1"]').text() === playerTurn &&
      $('[data-cell = "4"]').text() === playerTurn &&
      $('[data-cell = "7"]').text() === playerTurn) {
        $('#winner').text(`${playerTurn} is the winner`);
      turnCount = 9;
      // fillBoard();
    } else if ($('[data-cell = "3"]').text() === playerTurn &&
      $('[data-cell = "4"]').text() === playerTurn &&
      $('[data-cell = "5"]').text() === playerTurn) {
      $('#winner').text(`${playerTurn} is the winner`);
      turnCount = 9;
      // fillBoard();
    } else if (turnCount === 0) {
      $('#winner').text(`Nobody wins.`);
      turnCount = 9;
    }
  }

  $('#clear').click(function() {
    turnCount = 9;
    $('[data-cell]').empty();
    $('#winner').empty();
  })
});
