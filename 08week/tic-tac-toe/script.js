'use strict';

$(document).ready(function() {
let myTurn = 'X';
$('div[data-cell]').click(function() {
  $(this).text(`${myTurn}`);
if (myTurn === 'O') {
  myTurn = 'X';
  }
else {
  myTurn = 'O';
  };
// This function clears the board
$("button").click(function(){
    $('div[data-cell]').empty();
    });
    // Announce winner
    let winningCombs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ];
    });
});
