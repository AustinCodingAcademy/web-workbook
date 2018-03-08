'use strict';

$(document).ready(function() {
  let playerTurn = 'X';
  $('[data-cell]').on('click', function(){
    $(this).text(playerTurn);
  });
});
