'use strict';

$(document).ready(function() {
  let x = []; // Declare arrays x and o;
  let o = [];
  let currentPlayer = "X"; // Declare current player variable, initialized as "X";
  let moveCount = 0; // Declare move counter variable, 0
  $('[data-cell]').on('click', function () { //Define on('click') method callback function
    moveCount += 1;
    $(this).text(currentPlayer); // When div is clicked current player is inserted into the div
    if (currentPlayer === "X") { // Current player is toggled
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
    if ($(this).text() === 'X') { // If the div contains "X" the div number is pushed to x, otherwise o
      x.push($(this).attr('data-cell'));
    } else {
      o.push($(this).attr('data-cell'));
    }
    let xWinFlag = false; // Check for and console.log win, by comparing x and o to numeric sequences representing rows, columns and diagonals.
    let oWinFlag = false;
    if (moveCount > 4) {
      const wins = [['0','1','2'], ['3','4','5'], ['6','7','8'], ['0','3','6'], ['1','4','7'], ['2','5','8'], ['0','4','8'], ['2','4','6']];
      for (let j = 0; j < wins.length; j++) { // Loop through winning cell combinations
        let xMatchCount = 0; // Zero out matches for each new winning combination
        let oMatchCount = 0;
        for (let i = 0; i < x.length; i++) { // Loop through x and o arrays
          if (wins[j].includes(x[i])) {
            xMatchCount++;
          }
          if (wins[j].includes(o[i])) {
            oMatchCount++;
          }
          if (xMatchCount === 3) { // Check if x has all three in a combination
            xWinFlag = true;
            break;
          } else if (oMatchCount === 3) { // Check if x has all three in a combination
            oWinFlag = true;
            break;
          }
        }
      }
      if (xWinFlag === true) {
        $('#announce-winner').text("X wins!");
      }
      if (oWinFlag === true) {
        $('#announce-winner').text("O wins!");
      }
      if (moveCount > 8 && oWinFlag === false && xWinFlag === false){ // Check for draw, if no win after 8 moves
        $('#announce-winner').text("It's a draw.");
      }
    }
    $('#clear').on('click', function () {
      $('[data-cell], #announce-winner').html('');
      x = []; // Declare arrays x and o;
      o = [];
      currentPlayer = "X";
      moveCount = 0;
      xMatchCount = 0;
      oMatchCount = 0;
      xWinFlag = false;
      oWinFlag = false;
    })
  });
});
