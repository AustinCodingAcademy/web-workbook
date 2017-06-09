'use strict';

$(document).ready(function() {
  disableButton();
  displayTurn();
  playerActions();
  clearBoard();
});

// Use variable to keep track of the player’s turn (1 = X or 2 = O)
var playerTurn = 1;
// other constants
var clearButton = $('#clear');
var displayMsg = $('#displayMessage');

function displayTurn() {
  $('.currentTurn').html('Player ' + playerTurn + ' \'s turn');
}

function disableButton() {
  clearButton.prop('disabled', true);
}

function nextTurn() {
  if (playerTurn === 1) {
    playerTurn = 2;
  } else {
    playerTurn = 1;
  }
}

// * When a player clicks on a box, if the box is a data cell, then assign the X or O depending on the turn
function playerActions() {

  $('div').click(function() {
    var cell = $(this);

    if (cell.attr('data-cell')) {

      // first check if the box already has taken class, if it does not, use CSS class X or O to add to respective to div
      if (!$(this).is('.taken')) /* if (!cell.attr('class')) */ {
        var className = ((playerTurn === 1) ? 'X taken' : 'O taken');
        cell.addClass(className);
      } else {
        alert('Silly goose! That\'s not how you play. Please choose another box!');
        nextTurn(); // allows the current player to choose another box without switching turns
      }

      // check for a win function, then a draw, if neither, continue
      checkWin();

      // switch the player turn and then display it
      nextTurn();
      displayTurn();
    }
  });
}

// If draw, display game over message with no winner
function checkDraw() {
  if ($('.taken').length === 9) {
    displayMsg.html('Game Over! It\'s a draw!');
    clearButton.prop('disabled', false);
    nextTurn();
  }
}

// reset everything to original state
function clearBoard() {

  $('#clear').click(function() {
    $('.X, .O').removeClass();
    playerTurn = 1;
    displayMsg.html('');
    disableButton();
    displayTurn();
  });
}


// let's see if there's a win! all possible combos
function checkWin() {
  var wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  var playersMarker = playerTurn === 1 ? 'X' : 'O'; // dynamic based on user's turn

  var all = $('.board div.' + playersMarker);

  var coords = [] // create array that keeps track of X and O coordinates
  all.each(function(i) {
    coords.push(Number($(this).attr('data-cell')));
  });
  coords = coords.sort(); // not sure if needed
  coords = coords.join();
  console.log(coords);

  var userWon = false;

  for (var i = 0; i < wins.length; i++) {
    var win = wins[i]; // [0, 1, 2]

    var gotWin = true;
    for (var j = 0; j < win.length; j++) {
      var bit = win[j]; // 0, 1, 2

      if (coords.indexOf(bit) > -1) {} else {
        gotWin = false;
        break;
      }
    }

    if (gotWin) {
      userWon = true;
      break;
    }
  }

  if (userWon) {
    displayMsg.html('Game Over! Player ' + playerTurn + ' has won!');
    clearButton.prop('disabled', false);
    nextTurn();
  } else {
      checkDraw();
    }

  }
