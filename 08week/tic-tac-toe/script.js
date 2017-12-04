'use strict';

$(document).ready(function() {
  // Put app logic in here
  var playerTurn = 'X';
  var numOfClicks = 0;
  var win = false;
  $('[data-cell]').click(function() {
    if ($(this).text() === '' && playerTurn === 'X') {
      $(this).text('X');
      playerTurn = 'O';

    
    }
    if ($(this).text() === '' && playerTurn === 'O') {
      $(this).text('O');
      playerTurn = 'X';


    }
    checkForWins();
    numOfClicks++;
    checkForTie();
    // checkForWins();
    // checkForTie();
console.log(win)
  })

  function checkForWins() {
    //Checking top row for wins;
    if ($('[data-cell ="0"]').text() === playerTurn &&
      $('[data-cell ="1"]').text() === playerTurn &&
      $('[data-cell ="2"]').text() === playerTurn) {
      $('#announce-winner').text(`Player ${playerTurn} Wins!`);
      win = true;
    }
    //Checking middle row for wins;
    if ($('[data-cell ="3"]').text() === playerTurn &&
      $('[data-cell ="4"]').text() === playerTurn &&
      $('[data-cell ="5"]').text() === playerTurn) {
      $('#announce-winner').text(`Player ${playerTurn} Wins!`);
        win = true;
    }
    //Checking bottom row for wins;
    if ($('[data-cell ="6"]').text() === playerTurn &&
      $('[data-cell ="7"]').text() === playerTurn &&
      $('[data-cell ="8"]').text() === playerTurn) {
      $('#announce-winner').text(`Player ${playerTurn} Wins!`);
        win = true;
    }
    //Checking left column for wins;
    if ($('[data-cell ="0"]').text() === playerTurn &&
      $('[data-cell ="3"]').text() === playerTurn &&
      $('[data-cell ="6"]').text() === playerTurn) {
      $('#announce-winner').text(`Player ${playerTurn} Wins!`);
        win = true;
    }
    //Checking middle column for wins;
    if ($('[data-cell ="1"]').text() === playerTurn &&
      $('[data-cell ="4"]').text() === playerTurn &&
      $('[data-cell ="7"]').text() === playerTurn) {
      $('#announce-winner').text(`Player ${playerTurn} Wins!`);
        win = true;
    }
    //Checking right column for wins;
    if ($('[data-cell ="2"]').text() === playerTurn &&
      $('[data-cell ="5"]').text() === playerTurn &&
      $('[data-cell ="8"]').text() === playerTurn) {
      $('#announce-winner').text(`Player ${playerTurn} Wins!`);
        win = true;
    }
    //Checking top right to bottom left for wins;
    if ($('[data-cell ="2"]').text() === playerTurn &&
      $('[data-cell ="4"]').text() === playerTurn &&
      $('[data-cell ="6"]').text() === playerTurn) {
      $('#announce-winner').text(`Player ${playerTurn} Wins!`);
        win = true;
    }
    //Checking top left to bottom right for wins;
    if ($('[data-cell ="0"]').text() === playerTurn &&
      $('[data-cell ="4"]').text() === playerTurn &&
      $('[data-cell ="8"]').text() === playerTurn) {
      $('#announce-winner').text(`Player ${playerTurn} Wins!`);
        win = true;
    }

  }
  //Checking for tie;

  function checkForTie() {
    if (numOfClicks === 9 && !win) {
      $('#announce-winner').text('Tie Game!');
    }
  }
  //Clearing the board;
  $('#clear').click(function() {
    $('[data-cell]').empty();
    win = false;
    playerTurn = 'X';
    numOfClicks = 0;
    $('#announce-winner').empty();

  })



});
