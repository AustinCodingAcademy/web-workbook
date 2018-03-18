'use strict';
/*start after page load */
$(document).ready(function() {
  $('#loader').addClass('loader');
  $('#buttons').hide();
  back();

  function back() {
    /*counts down from 3*/
    let backstart = 3;
    let intervalstart;
    intervalstart = setInterval(function() {
      backstart--;
      $('#backstart').text(backstart);
      if (backstart == 0) {
        clearInterval(intervalstart);
        $('#backstart').text('start').hide(1500);
        run();
      }
    }, 1000);
  }
  /*counts down from 3*/
  let backstart2 = 3;
  let intervalstart2;
  /*restarts game*/
  /*still having issues with computer number not going back to zero, also shows double display numbers*/
  $("#res").click(function() {
    $('#backstart').text('3').show().css("display", "inline")
    $('#halcount').text('0');
    $('#mycount').text('0');
    $('#timecount').text('10');
    $('#winner').text('');
    $("#clicker").show();
    $("#clicker").click(function() {
      $('#mycount').text('0');
    });
    $('#buttons').hide();
    back();
  });

  function run() {
    let mycount = 0;
    let timecount = 10;
    let interval;
    let compcount = 0;
    /*displays user's number of clicks*/
    $("#clicker").click(function() {
      mycount++;
      $('#mycount').text(mycount);
    });
    $('#statistic').addClass('hide');
    interval = setInterval(function() {

      timecount--;
      $('#timecount').text(timecount);
      if (timecount == 0) {
        clearInterval(interval);
        $('#clicker').hide();
        $('#buttons').show(100);
        if (mycount > compcount) {
          $('#winner').text("You Win");
        } else {
          $('#winner').text("You Lose");
        }
      }
    }, 1000);
    intervalcomp = setInterval(function() {
      compcount++;
      $('#halcount').text(compcount);
      if (timecount == 0) {
        clearInterval(intervalcomp);
      }
      /*fine-tune computer clicks, lower number means faster computer clicks*/
    }, 200);
  }
});
