'use strict';

$(document).ready(function() {
  let tic = 'X';
  $('div[data-cell]').click(function() {
   $(this).prepend(tic);
   if (tic === 'O') {
     tic = 'X';
    } else {
      tic = 'O';
     $( "#clear" ).click(function() {
  $( 'div[data-cell]' ).empty();
});
    }
  });
});
