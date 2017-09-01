'use strict';

$(document).ready(function() {
  // Put app logic in here


  let playerTurn = 0;
  $('[data-cell]').click(function() {
    if (playerTurn %2 === 0){
      $(this).text('X');
    } else {
      $(this).text('O');
    }
    playerTurn++;
  })

});
