'use strict';

document.addEventListener('DOMContentLoaded', function(event) {
  let player = 'X';
  
  document.querySelector('#clear').addEventListener('click', function(event) {
    document.querySelectorAll('[data-cell]').forEach(cell => {
      cell.innerText = '';
    })
  })
  
  document.querySelector('#board').addEventListener('click', function(event) {
    event.target.innerText = player;
  
    if (checkForWin()) {
      document.querySelector('#announce-winner').innerText = `Player ${player} Wins!`;
    } else {
      player = (player === 'X') ? 'O': 'X';
    };
  });

  function checkForWin() {
    return [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ].some(play => {
      const play0 = document.querySelector(`[data-cell="${play[0]}"]`).innerText;
      const play1 = document.querySelector(`[data-cell="${play[1]}"]`).innerText;
      const play2 = document.querySelector(`[data-cell="${play[2]}"]`).innerText;
      return play0 && play0 === play1 && play0 === play2;
    });
  }
  
});
