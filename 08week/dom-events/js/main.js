'use strict';
// when the document is done loading, run the script inside
$(document).ready(function() {
  var num = 0;
  $('.box').click(function() {
    num++;
    $(this).text(num);
  })
});