'use strict';

$(document).ready(function() {
  let tic = 'x';
  $('[data-cell]').click(function() {
    $(this).text(tic);
    if (tic === 'o') {
      tic = 'x';
    } else {
      tic = 'o';
    }
  });

  $('#clear').click(function() {
    $('[data-cell]').empty()
  })






});
