'use Strict';

$(document).ready(function() {

  $('img').click(function() {
    var points = 0;
    points = points + 1;
    $('img').html("total" + points);
  });

});
