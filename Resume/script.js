'use Strict';

$(document).ready(function() {
var points = 0;
  $('#meatwad').click(function() {
    points += 1;
    $('#total').text("Total Clacks: " + points)
  });

});
