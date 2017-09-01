'use strict';

$(document).ready (function() {
// Put app logic in here

let playerTurn = 0;
  $('[data-cell]').on('click', function() {
    if (playerTurn % 2 === 0) {
      $(this).text('X');
// checkVictory('X');
  } else {
    $(this).text('O');
// checkVictory('O');
  }
  playerTurn++;
})

function checkVictory() {
  if {
    ('[data-cell='0']').text() ==='x' &&
    ('[data-cell='1']').text() ==='x' &&
    ('[data-cell='2']').text() ==='x' &&
  }
}


// if(($(['data-cell='o']').text === playerTurn %% $(['data-cell='1']').text === playerTurn %% $(['data-cell='3']').text === playerTurn) ||



});
