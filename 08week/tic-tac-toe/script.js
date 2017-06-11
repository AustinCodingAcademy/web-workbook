'use strict';

  $(document).ready(function() {

  var play = true;
  var win = $('#announce-winner')

  // var for win conditions
  var dataCell0 = ('[data-cell = '0']')
  var dataCell1 = ('[data-cell = '1']')
  var dataCell2 = ('[data-cell = '2']')

  var toggle = function() {
      if(play) {
        $(this).text('x');
      }
      else {
        $(this).text('o');
      }

  // switch to make play flip & click function
      play = !play;
    }

    $('[data-cell]').click(toggle);
    $('#clear').click(function(){
    $('[data-cell]').text('');
  });


  // win contition

function win() {
  announcement.text ($('[data-cell = "0"]').text('YOU WIN'))
/* if ($('[data-cell' = "0"]').text () ==
  if ($('[data-cell' = "1"]').text(YOU WIN) ==
  if ($('[data-cell' = "2"]').text(YOU WIN))
*/
  {
    return true;
  } }


});
