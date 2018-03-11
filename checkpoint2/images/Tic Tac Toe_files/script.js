'use strict';

$(document).ready(function() {
  var playerTurn = 'X';
  $('[data-cell]').on('click', function(){
    $(this).text(playerTurn);

  if (playerTurn === 'O')
} else {
  playerturn = 'X';
}
});
