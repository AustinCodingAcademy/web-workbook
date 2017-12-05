'use strict';

$(document).ready(function() {
  // Put app logic in here
  var turns = 0;
  var win = false;
  var playerTurn = 'X';
  $('[data-cell]').click(function() {
    if ($(this).text() === '') {
      $(this).text(playerTurn);
      checkIfPlayerWon();
      checkIfTie();
      if (playerTurn === 'X') {
        playerTurn = 'O';
      } else {
        playerTurn = 'X';
      }
    }

  });

  function checkIfPlayerWon() {
    if (($('[data-cell = "0"]').text() === playerTurn &&
        $('[data-cell = "1"]').text() === playerTurn &&
        $('[data-cell = "2"]').text() === playerTurn) ||

      ($('[data-cell = "3"]').text() === playerTurn &&
        $('[data-cell = "4"]').text() === playerTurn &&
        $('[data-cell = "5"]').text() === playerTurn) ||

      ($('[data-cell = "6"]').text() === playerTurn &&
        $('[data-cell = "7"]').text() === playerTurn &&
        $('[data-cell = "8"]').text() === playerTurn) ||

      ($('[data-cell = "0"]').text() === playerTurn &&
        $('[data-cell = "4"]').text() === playerTurn &&
        $('[data-cell = "8"]').text() === playerTurn) ||

      ($('[data-cell = "2"]').text() === playerTurn &&
        $('[data-cell = "4"]').text() === playerTurn &&
        $('[data-cell = "6"]').text() === playerTurn) ||

      ($('[data-cell = "0"]').text() === playerTurn &&
        $('[data-cell = "3"]').text() === playerTurn &&
        $('[data-cell = "6"]').text() === playerTurn) ||

      ($('[data-cell = "1"]').text() === playerTurn &&
        $('[data-cell = "4"]').text() === playerTurn &&
        $('[data-cell = "7"]').text() === playerTurn) ||

      ($('[data-cell = "2"]').text() === playerTurn &&
        $('[data-cell = "5"]').text() === playerTurn &&
        $('[data-cell = "8"]').text() === playerTurn)) {
      win = true;
      $('#announce-winner').text(`Player ${playerTurn} Wins!`);
    }
  }

  $('#clear').click(function() {
    $(this).click(function() {
      $('[data-cell]').empty();
      turns = 0;
      win = false;
      playerTurn = 'X';

      $('#announce-winner').empty();
    });
  });

  function checkIfTie() {
    turns++;
    if (turns === 9 && !win) {
      $('#announce-winner').text('Tie');
    }
  }
});
