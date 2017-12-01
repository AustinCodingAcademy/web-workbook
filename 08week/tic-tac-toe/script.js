'use strict';

$(document).ready(function() {
  let playerTurn = 'X';
  $('.column').click(function() {
    $(this).text('playerTurn');
    if (playerTurn === 'O') {
      playerTurn = 'X';
    } else {
      playerTurn = 'O';
    }
  });
});








// put 'x' or 'o' on board
// alternate players
// check for win
// 8 ways to win
// declare winner/tie
// clear board
