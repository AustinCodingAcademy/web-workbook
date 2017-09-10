'use strict';

$(document).ready(function() {
  // Put app logic in here

  $('[data-cell]').on('click', function(){
    if (playerTurn % 2 === 0){
      $(this).text('X');
      //checkVictory('X');
    } else {
    //player 2's turn (O)
      $(this).text('O');
      //checkVictory('O');
    }
    playerTurn++;
  });
});
