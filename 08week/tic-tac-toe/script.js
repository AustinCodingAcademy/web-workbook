'use strict';

$(document).ready(function() {
  // Put app logic in here

  var turnCount = 0;

        $('[data-cell]').on('click', function(){
              if (turnCount % 2 === 0){
                $(this).text('X');
                //checkVictory('X');
              } else {
             //player 2's turn (O)
                $(this).text('O');
                //checkVictory('O');
              }
            turnCount++;

        });
});
