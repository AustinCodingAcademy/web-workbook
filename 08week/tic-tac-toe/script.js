'use strict';

  $(document).ready(function() {
  // Put app logic in here

  var play = true;
  var toggle = function() {
      if(play) {
        $(this).text('x');

      }
      else {
        $(this).text('o');
      }

      // switch to make play flip
      play = !play;
    }


    $('[data-cell]').click(toggle);


    $('#clear').click(function(){
    $('[data-cell]').text('');
  });




    var winner = true;
    var announce = (function() {
      if('[data-cell]' == ["0"] && '[data-cell]') ||
      ('[data-cell]' == ["1"] && '[data-cell] ')
      {
        $('[data-cell = "o"').text("#announce-winner");
      }
        else {
        $('[data-cell = "x"]').text("#announce-winner")
    }


}
/* $('div[attr1="value1"][attr2="value2"]')
    });

    if (('row' == '[data-cell]' && '[data-cell]' &&  '[data-cell]' == o) || ('row' == '[data-cell]' && '[data-cell]' &&  '[data-cell]' == o)) {
            winner= document.getElementById('#announce-winner').text(' You WON!');
*/

});
