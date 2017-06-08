'use strict';

$(document).ready(function() {
  playerActions();
  displayTurn();
  clearBoard();
});

// 2 players, X & Os, one player at a time

// Use variable to keep track of the player’s turn (1 = X or 2 = O)
var playerTurn = 1;

function displayTurn() {
  $('.currentTurn').html('Player ' + playerTurn + ' \'s turn');
}

function playerActions() {

  // * When a player clicks on a box, if the box is a data cell, then assign the X or O depending on the turn
  $('div').click(function() {
    var cell = $(this);

    // first check if the box already has a class, if it does not, use CSS class X or O to add respective to div
    if (cell.attr('data-cell')) {
      if (!cell.attr('class')) {

        // TODO: put into function
        var className = ((playerTurn === 1) ? 'X' : 'O');
        cell.addClass(className);

      } else {
        alert('Silly goose! That\'s not how you play. Please choose another box!');
      }
      // check for a win function

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

// * Check for a win function
//     * If win
//         * 3 in a row wins
//         * 0,1,3
//         * 3,4,5
//         * 6,7,8
//         * 0,3,6
//         * 1,4,7
//         * 2,5,8
//         * 0,4,8
//         * Display game over message with winner
//         * Enable reset button
//     * If draw, display game over message with no winner
//         * Enable reset button

// * Clear board
function clearBoard() {

  // When a user clicks the reset game function
  $('#clear').click(function() {
    // Remove all css classes from data-cell divs
    $('.X, .O').removeClass();
    // Reset the player variable to 1
    playerTurn = 1;
    // Set content of of display game over message to ‘ '
    $('#displayMessage').html(' ');
    // Disable the button
    $(this).prop('disabled', true);
  });
}

// work in progress
var arr = $('.row>div').val();
// $('.row').each(function(){
//   arr.push($(this));
// });
console.log(arr[2]);
