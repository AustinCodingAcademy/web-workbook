'use strict';

  $(document).ready(function() {

  var play = true;
  var announcement = $('#announce-winner')

  // var for win conditions
  var dataCell0 = $('[data-cell = "0"]');
  var dataCell1 = $('[data-cell = "1"]');
  var dataCell2 = $('[data-cell = "2"]');
  var dataCell3 = $('[data-cell = "3"]');
  var dataCell4 = $('[data-cell = "4"]');
  var dataCell5 = $('[data-cell = "5"]');
  var dataCell6 = $('[data-cell = "6"]');
  var dataCell7 = $('[data-cell = "7"]');
  var dataCell8 = $('[data-cell = "8"]');

  var toggle = function() {
      if($(this).text() == '') {

      if(play) {
        $(this).text('x');
      }
      else {
        $(this).text('o');
      }

  // win contition
    if(checkWinner() && play) {
      announcement.text('Player x won!');
    } else if (checkWinner() && !play) {
      announcement.text('Player o won!');
    }

  // switch to make play flip & click function
      play = !play;
    }
    }
    $('[data-cell]').click(toggle);
    $('#clear').click(function(){
    $('[data-cell]').text('');
    announcement.text('');
  });

// function to check for a win
  function checkWinner() {
      if((dataCell0.text() != '') && (dataCell0.text () == dataCell1.text())
       && (dataCell1.text() == dataCell2.text())){
        return true;
      } else if((dataCell3.text() != '') && (dataCell3.text () == dataCell4.text())
         && (dataCell4.text() == dataCell5.text())){
          return true;
        } else if((dataCell6.text() != '') && (dataCell6.text () == dataCell7.text())
         && (dataCell7.text() == dataCell8.text())){
          return true;
        } else if((dataCell0.text() != '') && (dataCell0.text () == dataCell3.text())
         && (dataCell3.text() == dataCell6.text())){
          return true;
        } else if((dataCell1.text() != '') && (dataCell1.text () == dataCell4.text())
         && (dataCell4.text() == dataCell7.text())){
          return true;
       } else if((dataCell2.text() != '') && (dataCell2.text () == dataCell5.text())
         && (dataCell5.text() == dataCell8.text())){
          return true;
        } else if((dataCell0.text() != '') && (dataCell0.text () == dataCell4.text())
         && (dataCell4.text() == dataCell8.text())){
          return true;
        } else if((dataCell2.text() != '') && (dataCell2.text () == dataCell4.text())
         && (dataCell4.text() == dataCell6.text())){
          return true;
        } else {
          return false;
        }
      }

});
