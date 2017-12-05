'use strict';

$(document).ready(function() {
  // Put app logic in here
  var playerTurn = 'X';
  var numOfClicks = 0;
  var win = false;
  $('[data-cell]').click(function() {
    if ($(this).text() === '') {
      $(this).text(playerTurn);
    }
    checkForWins();
    numOfClicks++;
    checkForTie();
    if (playerTurn==='X') {
      playerTurn = 'O';
    } else {
      playerTurn = 'X';
    }
    // if ($(this).text() === '' && playerTurn === 'X') {
    //   $(this).text('X');
    //   playerTurn = 'O';
    //
    //
    // }
    // if ($(this).text() === '' && playerTurn === 'O') {
    //   $(this).text('O');
    //   playerTurn = 'X';
    //
    // }

    // checkForWins();
    // checkForTie();
    console.log(win)
    console.log(playerTurn);
  })

  function checkForWins() {
    //Checking top row for wins;
    if ($('[data-cell ="0"]').text() === playerTurn &&
      $('[data-cell ="1"]').text() === playerTurn &&
      $('[data-cell ="2"]').text() === playerTurn ||
      //Checking middle row for wins;
      $('[data-cell ="3"]').text() === playerTurn &&
      $('[data-cell ="4"]').text() === playerTurn &&
      $('[data-cell ="5"]').text() === playerTurn ||
      //Checking bottom row for wins;
      $('[data-cell ="6"]').text() === playerTurn &&
      $('[data-cell ="7"]').text() === playerTurn &&
      $('[data-cell ="8"]').text() === playerTurn ||
      //Checking left column for wins;
      $('[data-cell ="0"]').text() === playerTurn &&
      $('[data-cell ="3"]').text() === playerTurn &&
      $('[data-cell ="6"]').text() === playerTurn ||
      //Checking middle column for wins;
      $('[data-cell ="1"]').text() === playerTurn &&
      $('[data-cell ="4"]').text() === playerTurn &&
      $('[data-cell ="7"]').text() === playerTurn ||
      //Checking right column for wins;
      $('[data-cell ="2"]').text() === playerTurn &&
      $('[data-cell ="5"]').text() === playerTurn &&
      $('[data-cell ="8"]').text() === playerTurn ||
      //Checking top right to bottom left for wins;
      $('[data-cell ="2"]').text() === playerTurn &&
      $('[data-cell ="4"]').text() === playerTurn &&
      $('[data-cell ="6"]').text() === playerTurn ||

      //Checking top left to bottom right for wins;
      $('[data-cell ="0"]').text() === playerTurn &&
      $('[data-cell ="4"]').text() === playerTurn &&
      $('[data-cell ="8"]').text() === playerTurn) {
      win = true;
      $('#announce-winner').text(`Player ${playerTurn} Wins!`);
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
