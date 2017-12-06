'use strict';

$(document).ready(function() {
  let playerTurn = 'X';
  var counter = 0;
  var win = false;
  $('[data-cell]').click(function() {
    if($(this).text() === ''){
    $(this).text(playerTurn);
    checkForWins();

    if (playerTurn === 'X') {
      playerTurn = 'O';
    } else {
      playerTurn = 'X';
    }

    counter++;
    console.log(counter);
    console.log(win);
    checkTie();
  }

  });

  function checkForWins(){
    if(($('[data-cell = "0"]').text() === playerTurn &&
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

      ($('[data-cell = "0"]').text() === playerTurn &&
      $('[data-cell = "3"]').text() === playerTurn &&
      $('[data-cell = "6"]').text() === playerTurn) ||

      ($('[data-cell = "1"]').text() === playerTurn &&
      $('[data-cell = "4"]').text() === playerTurn &&
      $('[data-cell = "7"]').text() === playerTurn) ||

      ($('[data-cell = "2"]').text() === playerTurn &&
      $('[data-cell = "5"]').text() === playerTurn &&
      $('[data-cell = "8"]').text() === playerTurn) ||

      ($('[data-cell = "6"]').text() === playerTurn &&
      $('[data-cell = "4"]').text() === playerTurn &&
      $('[data-cell = "2"]').text() === playerTurn))
     {
        $('#announce-winner').text(`Player ${playerTurn} Wins!`);
        win = true;
      }
  };

  function checkTie (){
    if (counter === 9 && !win)
    {
      alert('Players Tie!');
    }
  };

  $('#clear').click(function(){
    $('[data-cell]').empty();
    $('#announce-winner').empty();
  });

});
