'use Strict';

$(document).ready(function() {
  var points = 95;
  var clicker1 = 100;
  var clicker2 = 300;
  var clicker3 = 600;
  $('#meatwad').click(function() {
    points += 1;
    $('#total').text("Total Clacks: " + points)
    if (points >= 100) {
      $('.clicker1').removeAttr('disabled');
    }
    else  {
      (points >= 300)
      $('.clicker2').removeAttr('disabled');
    }
    if (points >= 600) {
      $('.clicker3').removeAttr('disabled');
    }
  });

  $('.clicker-100').click(function () {
    points = points - clicker1;
    $('#total').text("Total Clacks: " + points);
    auto();
  });
  $('clicker-300').click(function(){
    points = points - clicker2;
    $('#total').text("Total Clacks: " + points);
    auto2()
  });
  function auto() {
    var $button = $('#meatwad');
    setInterval(function() {
      $button.click()
    }, 1000);
  };
  function auto2() {
    var $clicker2 = $('#meatwad');
    setInterval(function() {
      $clicker2.click()
    }, 750);
  }

  function auto3() {
    var $clicker3 = $('#meatwad');
    setInterval(function() {
      $clicker3.click()
    }, 450);
  }

});
