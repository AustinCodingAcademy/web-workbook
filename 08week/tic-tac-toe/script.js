'use strict';

$(document).ready(function() {
  let shape = 'X';
  $('div[data-cell]').click(function() {
    $(this).prepend(shape);
    if (shape === 'O') {
      shape = 'X';
    } else {
      shape = 'O';
    }
    $('#clear').click(function() {
      $('div[data-cell]').empty();
    })
  })
});
