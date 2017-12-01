'use strict';

$(document).ready(function() {
  var playerTurn = 'X';
  var turns = 0;
  $('[data-cell]').click(function() {

    if($(this).text() === '') {

    $(this).text(playerTurn);
      checkWins();

      if (playerTurn === 'O') {
        playerTurn = 'X';
      } else {
        playerTurn = 'O';
      }
      turns++;
      if (turns>8) {
        $('#announce-winner').text("We have a tie!");
      }
    }

  })

  // function checkWins(){
  //   if($('[data-cell = "0"]').text() === playerTurn && $('[data-cell = "1"]').text() === playerTurn && $('[data-cell = "2"]').text() === playerTurn) {
  //     $('#announce-winner').text(`Player ${playerTurn} Wins!`);
  //   }else if($('[data-cell = "3"]').text() === playerTurn && $('[data-cell = "4"]').text() === playerTurn && $('[data-cell = "5"]').text() === playerTurn) {
  //     $('#announce-winner').text(`Player ${playerTurn} Wins!`);
  //   }else if($('[data-cell = "6"]').text() === playerTurn && $('[data-cell = "7"]').text() === playerTurn && $('[data-cell = "8"]').text() === playerTurn) {
  //     $('#announce-winner').text(`Player ${playerTurn} Wins!`);
  //   }else if($('[data-cell = "0"]').text() === playerTurn && $('[data-cell = "3"]').text() === playerTurn && $('[data-cell = "6"]').text() === playerTurn) {
  //     $('#announce-winner').text(`Player ${playerTurn} Wins!`);
  //   }else if($('[data-cell = "1"]').text() === playerTurn && $('[data-cell = "4"]').text() === playerTurn && $('[data-cell = "7"]').text() === playerTurn) {
  //     $('#announce-winner').text(`Player ${playerTurn} Wins!`);
  //   }else if($('[data-cell = "2"]').text() === playerTurn && $('[data-cell = "5"]').text() === playerTurn && $('[data-cell = "8"]').text() === playerTurn) {
  //     $('#announce-winner').text(`Player ${playerTurn} Wins!`);
  //   }else if($('[data-cell = "0"]').text() === playerTurn && $('[data-cell = "4"]').text() === playerTurn && $('[data-cell = "8"]').text() === playerTurn) {
  //     $('#announce-winner').text(`Player ${playerTurn} Wins!`);
  //   }else if($('[data-cell = "2"]').text() === playerTurn && $('[data-cell = "4"]').text() === playerTurn && $('[data-cell = "6"]').text() === playerTurn) {
  //     $('#announce-winner').text(`Player ${playerTurn} Wins!`);
  //   }
  // }

  function checkWins(){
    if (($('[data-cell = "0"]').text() === playerTurn && $('[data-cell = "1"]').text() === playerTurn && $('[data-cell = "2"]').text() === playerTurn)
    || ($('[data-cell = "3"]').text() === playerTurn && $('[data-cell = "4"]').text() === playerTurn && $('[data-cell = "5"]').text() === playerTurn)
    || ($('[data-cell = "6"]').text() === playerTurn && $('[data-cell = "7"]').text() === playerTurn && $('[data-cell = "8"]').text() === playerTurn)
    || ($('[data-cell = "0"]').text() === playerTurn && $('[data-cell = "3"]').text() === playerTurn && $('[data-cell = "6"]').text() === playerTurn)
    || ($('[data-cell = "1"]').text() === playerTurn && $('[data-cell = "4"]').text() === playerTurn && $('[data-cell = "7"]').text() === playerTurn)
    || ($('[data-cell = "2"]').text() === playerTurn && $('[data-cell = "5"]').text() === playerTurn && $('[data-cell = "8"]').text() === playerTurn)
    || ($('[data-cell = "0"]').text() === playerTurn && $('[data-cell = "4"]').text() === playerTurn && $('[data-cell = "8"]').text() === playerTurn)
    || ($('[data-cell = "2"]').text() === playerTurn && $('[data-cell = "4"]').text() === playerTurn && $('[data-cell = "6"]').text() === playerTurn)) {
        $('#announce-winner').text(`Player ${playerTurn} Wins!`);

    }
  }

  $('#clear').click(function(){
    $('[data-cell]').empty();
    playerTurn = 'X';
    turns = 0;
    $('#announce-winner').empty();
  })
});
