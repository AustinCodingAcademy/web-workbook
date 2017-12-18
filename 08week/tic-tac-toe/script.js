'use strict';

$(document).ready(function() {
var player = 'X';
var counter = 0;
var win = false;
var canClick = true; //prevent more clicks after a win
$('.turn').text("X's Turn");
  $('[data-cell]').click(function() {

    if ($(this).text() === '' && canClick === !false) {
      $(this).text(player);
      checkWinner();
      counter++;
      if (player === 'X') {
        player = 'O';
        $('.turn').text("O's Turn");
      } else {
        player = 'X';
        $('.turn').text("X's Turn");
      }
    }
    if (win === true) {
      $('.turn').text("");
    }
    checkTie();
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
      canClick = false;

    }

    $('#clear').click(function() {
      $('[data-cell]').text('');
      $('#announce-winner').text('');
      player = "X";
      counter = 0;
      win = false;
      canClick = true;
      $('.turn').text("X's Turn");
    });

  };

  function checkTie(){
    if (counter === 9 && !win) {
        $('.turn').text("");
        $('#announce-winner').text("tie!!");
    }
  }
});
