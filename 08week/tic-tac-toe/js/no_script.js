'use strict';

$(document).ready(function() {
  let gamePiece = 'X';
  $('div[data-cell]').click(function() {
    $(this).text(`${gamePiece}`);
    if (gamePiece === 'O') {
      gamePiece = 'X';
    } else {
      gamePiece = 'O';
    };
    let containsX = $("div[data-cell]:contains('X')");
    console.log(containsX);
  })


});
