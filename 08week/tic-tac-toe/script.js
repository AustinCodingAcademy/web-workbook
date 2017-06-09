'use strict';

$(document).ready(function() {
  $('#clear').prop('disabled', true);
  playerActions();
  displayTurn();
  clearBoard();
});

// 2 players, X & Os, one player at a time

// Use variable to keep track of the player’s turn (1 = X or 2 = O)
var playerTurn = 1;

// other constants
var clearButton = $('#clear');
var displayMsg = $('#displayMessage');

function displayTurn() {
  $('.currentTurn').html('Player ' + playerTurn + ' \'s turn');
}

function playerActions() {

  // * When a player clicks on a box, if the box is a data cell, then assign the X or O depending on the turn
  $('div').click(function() {
    var cell = $(this);

    // first check if the box already has a class, if it does not, use CSS class X or O to add to respective to div
    if (cell.attr('data-cell')) {
      // TODO: drill down into the class names
      // if (!cell.attr('class'))
      if (!$(this).is('.taken')) {
        var className = ((playerTurn === 1) ? 'X taken' : 'O taken');
        cell.addClass(className);
      } else {
        alert('Silly goose! That\'s not how you play. Please choose another box!');
        // allows the current player to choose another box without switching turns
        if (playerTurn === 1) {
          playerTurn = 2;
        } else {
          playerTurn = 1;
        }
      }
      // check for a win function
      checkWin();
      checkDraw();

      // switch the player turn and then display it
      if (playerTurn === 1) {
        playerTurn = 2;
      } else {
        playerTurn = 1;
      }

      displayTurn();
    }
  });
}

// If draw, display game over message with no winner
function checkDraw() {
  if ($('.taken').length === 9) {
    displayMsg.html('Game Over! It\'s a draw!');
    clearButton.prop('disabled', false);
    return false;
  }
}

// * Clear board
function clearBoard() {

  // When a user clicks clear board button
  $('#clear').click(function() {
    // Remove all css classes from data-cell divs
    $('.X, .O').removeClass();
    // Reset the player variable to 1
    playerTurn = 1;
    // Set content of display game over message to ‘'
    displayMsg.html('');
    // Disable the button
    $(this).prop('disabled', true);
    displayTurn();
  });
}


// check for win
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

  var coords = []
  all.each(function(i) {
    coords.push(Number($(this).attr('data-cell')));
  });
  coords = coords.sort(); // not sure if needed
  coords = coords.join();

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
  }

}
