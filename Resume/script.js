'use Strict';

$(document).ready(function() {
var points = 0;
var clicker1 = 100;
  $('#meatwad').click(function() {
    points += 1;
    $('#total').text("Total Clacks: " + points)
  });
  $('.clicker-100').click(function () {
    var f = $('#total') - 100;
    $('#total').text("Total Clacks: " + f);
    auto();
  }); if ($('#total') < 100); {
    $('#total').text("Total Clacks: 0");
  }
  function auto() {
    var button = $('#meatwad');
    setInterval(function()
    {button.click()$('#meatwad');},100)
  });


});
