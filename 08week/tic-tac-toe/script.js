'use strict';

$(document).ready(function() {
  let playerTurn = 'X';
  var counter = 0;
  $('[data-cell]').click(function() {
    if($(this).text() === ''){
    $(this).text(playerTurn);
    if (playerTurn === 'X') {
      playerTurn = 'O';
    } else {
      playerTurn = 'X';
    }
    checkForWins();
    counter++;
    checkTie();
  }

  });

  function checkForWins(){
    if($('[data-cell = "0"]').text() === playerTurn &&
      $('[data-cell = "1"]').text() === playerTurn &&
      $('[data-cell = "2"]').text() === playerTurn)
      {
          alert(`Player ${playerTurn} Wins!`);
        }
      else if($('[data-cell = "3"]').text() === playerTurn &&
      $('[data-cell = "4"]').text() === playerTurn &&
      $('[data-cell = "5"]').text() === playerTurn)
      {
          alert(`Player ${playerTurn} Wins!`);
        }
      else if($('[data-cell = "6"]').text() === playerTurn &&
      $('[data-cell = "7"]').text() === playerTurn &&
      $('[data-cell = "8"]').text() === playerTurn)
      {
          alert(`Player ${playerTurn} Wins!`);
        }
      else if($('[data-cell = "0"]').text() === playerTurn &&
      $('[data-cell = "4"]').text() === playerTurn &&
      $('[data-cell = "8"]').text() === playerTurn)
      {
          alert(`Player ${playerTurn} Wins!`);
        }
      else if($('[data-cell = "0"]').text() === playerTurn &&
      $('[data-cell = "3"]').text() === playerTurn &&
      $('[data-cell = "6"]').text() === playerTurn)
      {
          alert(`Player ${playerTurn} Wins!`);
        }
      else if($('[data-cell = "1"]').text() === playerTurn &&
      $('[data-cell = "4"]').text() === playerTurn &&
      $('[data-cell = "7"]').text() === playerTurn)
      {
          alert(`Player ${playerTurn} Wins!`);
        }
      else if($('[data-cell = "2"]').text() === playerTurn &&
      $('[data-cell = "5"]').text() === playerTurn &&
      $('[data-cell = "8"]').text() === playerTurn)
      {
          alert(`Player ${playerTurn} Wins!`);
        }
      else if($('[data-cell = "6"]').text() === playerTurn &&
      $('[data-cell = "4"]').text() === playerTurn &&
      $('[data-cell = "2"]').text() === playerTurn)
     {
        alert(`Player ${playerTurn} Wins!`);
      }
  };

  function checkTie (){
    if (counter === 9 && !checkForWins())
    {
      alert('Players Tie!');
    }
  };

  $('#clear').click(function(){
    $('[data-cell]').empty();
  });

});
