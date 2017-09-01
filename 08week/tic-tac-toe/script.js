'use strict';

$(document).ready(function() {
  // Put app logic in here
  let turn = 0;
  $('[data-cell]').click(function() {
    if (turn % 2 === 0) {
      $(this).text('X');
      // checkVictory('X');
    } else {
      //player 2's turn (O)
      $(this).text('O');
      // checkVictory('O');
    }
  turn++;
  })
  
});

  // let playerTurn = 'playerOne';
  //   $('.box').click(function() {
  //     $(this).text();
  //     if (playerTurn === 'playerTwo') {
  //       playerTurn = 'playerOne';
  //     } else {
  //       playerTurn = 'playerTwo';
  //     }
  //   });

  // if($('[data-cell="0"]').text() === "X" && $('[data-cell="1"]').text() === "X" && $('[data-cell="2"]').text() === "X") ||
  //   ($('[data-cell="0"]').text() === "X" && $('[data-cell="1"]').text() === "X" && $('[data-cell="2"]').text() === "X")
