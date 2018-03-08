'use strict';

$(document).ready(function() {

  var playerTurn = 'X';

  $('[data-cell]').on('click', function() {
    $(this).text(playerTurn);

    if (playerTurn === 'X'){
      playerTurn = '0';
    } else {
      playerTurn = 'X';
    }
  })




});
