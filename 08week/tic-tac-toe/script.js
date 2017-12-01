'use strict';

$(document).ready(function() {
var player = 'X';
var counter = 0;
var win = false;
  $('[data-cell]').click(function() {

    if ($(this).text() === '') {
      $(this).text(player);
      checkWinner();
      counter++;
      checkTie();
      if (player === 'X') {
        player = 'O';
      } else {
        player = 'X';
      }

    }

  });


  function checkWinner() {
    if ($('[data-cell = "0"]').text() === player &&
      $('[data-cell = "1"]').text() === player &&
      $('[data-cell = "2"]').text() === player ||

      $('[data-cell = "3"]').text() === player &&
      $('[data-cell = "4"]').text() === player &&
      $('[data-cell = "5"]').text() === player ||

      $('[data-cell = "6"]').text() === player &&
      $('[data-cell = "7"]').text() === player &&
      $('[data-cell = "8"]').text() === player ||

      $('[data-cell = "0"]').text() === player &&
      $('[data-cell = "3"]').text() === player &&
      $('[data-cell = "6"]').text() === player ||

      $('[data-cell = "1"]').text() === player &&
      $('[data-cell = "4"]').text() === player &&
      $('[data-cell = "7"]').text() === player ||

      $('[data-cell = "2"]').text() === player &&
      $('[data-cell = "5"]').text() === player &&
      $('[data-cell = "8"]').text() === player ||

      $('[data-cell = "0"]').text() === player &&
      $('[data-cell = "4"]').text() === player &&
      $('[data-cell = "8"]').text() === player ||

      $('[data-cell = "2"]').text() === player &&
      $('[data-cell = "4"]').text() === player &&
      $('[data-cell = "6"]').text() === player
    ) {
      $('#announce-winner').text(`${player} wins!`);
win = true;
    }

    $('#clear').click(function() {
      $('[data-cell]').text('');
      $('#announce-winner').text('');
      player = "X";
      counter = 0;
    });


  };

  function checkTie(){

    if (counter === 9 && !win) {
        $('#announce-winner').text("tie!!");
    }
  }
});
