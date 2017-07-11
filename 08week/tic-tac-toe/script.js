'use strict';

$(document).on('ready', function() {
  // Put app logic in here

  var go = 0;
  $('div[data-cell]').click(function() {
    go += 1;
    if (go <= 9) {
      if (go % 2 !== 0) {
        $(this).text('X');
      }
      else {
        $(this).text('O');
      }

  });
});
