'use strict';

$(document).on('ready', function() {
  // Put app logic in here
});

// add or remove css X:after


// * 2 players, X & Os, one player at a time
//
// * Use variable to keep track of the player’s turn (1 = X or 2 = O)
var playerTurn = 1;
console.log('hi');

// * When a player clicks on a box, if the box is a data cell, then assign the X or O depending on the turn

$('div').click(function() {
  var cell = $(this);

  // Use CSS class X:after or O:after to add respective to div
  if (cell.attr('data-cell')) {
    if (!cell.attr('class')) {

      // TODO: put into function
      var className = 'O';
      if (playerTurn === 1) {
        className = 'X';
      }
      cell.addClass(className);
    } else {
      alert('Please choose another box!');
    }
      // check for a win function
      
      // switch the player turn
      if (playerTurn === 1) {
        playerTurn = 2;
      } else {
        playerTurn = 1
      }

    }
});



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
//     * Else: switch the variable for the player’s turn
// * Reset the game function
//     * When a user clicks the reset game function
//         * Remove all css classes from data-cell divs
//         * Reset the player variable to 1
//         * Set content of of display game over message to ‘ '
//         * Disable the reset button
