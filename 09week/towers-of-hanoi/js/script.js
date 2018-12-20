'use strict';

$(document).ready(function() {
  // Put app logic here
  let block = null;
  let totalNumMoves = 0;

  // Function to move tokens from one row to another
  $('[data-stack]').click(function() {
    // Gets the point value from the data-block attribute
    let blockValue = $(this).children().first().attr('data-block');
    // Checks to determine if the block value is null. If it is, pick up block
    if (block === null && blockValue >= 1) {
      block = $(this).children().first().detach(); // Stores the data-block div in block
      // If the above fails, the below else if runs. Checks to see if the previous stored
      // value in blockValueStore is less than blockValue. If so, add block element to 
      // end of the currently selected data-stack element
    } else if (blockValue > block.attr('data-block') || blockValue === undefined) {
        $(this).prepend(block);
        totalNumMoves++; // Adds 1 to the total number of moves
        $('#totalNumMoves span').text(totalNumMoves); // Pushes the totalNumMoves variable to the span in #totalNumMoves 
        //blockValueStore = 0; // Updates to 0 to that the test can be run again on click
        block = null;  // Updates to null so the test can run
      } else {
        // Alerts the user if they try to place a larger token on a smaller one
        alert('Cannot place on smaller tokens.')
      }
    // Runs function to test for a win
    checkWin();
  });

  // Resets the game to start
  $('#reset').click(reset);
  
  function reset() {
    block = null;
    totalNumMoves = 0;
    $('[data-stack="1"]').html('<div data-block="1"></div><div data-block="2"></div><div data-block="3"></div><div data-block="4"></div>');
    $('[data-stack="2"]').children().remove();
    $('[data-stack="3"]').children().remove();
    $('#totalNumMoves span').text(totalNumMoves);
  };

  // Check for win
  function checkWin() {
    // If the total number of divs inside of data-stack 2 or 3 total more than 3,
    // update the #announce-game-won text
    if ($('[data-stack="3"] div').length > 3) {
      $('#announce-game-won').text('YOU WIN!');
    };
  };

});
