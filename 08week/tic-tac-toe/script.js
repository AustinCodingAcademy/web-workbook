'use strict';

$(document).ready(function() {

  var playerTurn = 'X';
  $('[data-cell]').click(function(){
    if($(this).text() === ''){
      $(this).text(playerTurn);
        checkForWins();
        if (playerTurn === 'X'){
          playerTurn = 'O';
        }else{
          playerTurn = 'X';
        }

    }

  })

  function checkForWins(){
    if($('[data-cell = "0"]').text() === playerTurn &&
      $('[data-cell = "1"]').text() === playerTurn &&
      $('[data-cell = "2"]').text() === playerTurn) {
        $('#announce-winner').text(`Player ${playerTurn} Wins!`);
      }
  }

  $('#clear').click(function(){
    $('[data-cell]').empty();
    playerTurn ='X';
  })

})
