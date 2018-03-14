'use strict';

$(document).ready(function() {
  let gamePiece = 'X';
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

  $('div[data-cell]').click(function() {
    $(this).text(`${gamePiece}`);
    checkForWin();
    if (gamePiece === 'O') {
      gamePiece = 'X';
    } else {
      gamePiece = 'O';
    };
  });

  $('#clear').click(function () {
    location.reload();
  });

  function checkForWin() {
  for (let i = 0; i < winningCombs.length; i++) {
    let won = true;
    for (let j = 0; j < winningCombs[i].length; j++) {
      won = ( ($(`[data-cell="${winningCombs[i][j]}"]`).text() === gamePiece) && won);
    }
    if (won) {
      document.querySelector('#clear').insertAdjacentHTML('afterend',`<h3 class="red-text blinking">${gamePiece} wins!</h3>`);
      return true;
    }
  }
};
});
