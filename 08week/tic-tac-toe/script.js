'use strict';

  // Put app logic in here
  $(document).ready(function() {
    let sym = 'X';
    $('div[data-cell]').click(function() {
      if ($(this).text()=== ''){
        $(this).text(sym);
        // checkForWin();
        if (sym === 'X') {
          sym = 'O'
        } else {
          sym = 'X'
          checkForWin();
        }

      }

    });

    function checkForWin(){

      var r1cl1 = $('div[data-cell="0"]');
      var r1cl2 = $('div[data-cell="1"]');
      var r1cl3 = $('div[data-cell="2"]');

      var r2cl1 = $('div[data-cell="3"]');
      var r2cl2 = $('div[data-cell="4"]');
      var r2cl3 = $('div[data-cell="5"]');

      var r3cl1 = $('div[data-cell="6"]');
      var r3cl2 = $('div[data-cell="7"]');
      var r3cl3 = $('div[data-cell="8"]');

      /* Row Winners */

      if(r1cl1.text() === r1cl2.text() && r1cl2.text() === r1cl3.text()){
        $('#announce-winner').text(sym +' is the Winner');
      };
      if(r2cl1.text() === r2cl2.text() && r2cl2.text() === r2cl3.text()){
          $('#announce-winner').text(sym +' is the Winner');
      };
      if(r3cl1.text() === r3cl2.text() && r3cl2.text() === r3cl3.text()){
          $('#announce-winner').text(sym +' is the Winner');
      };
        /* Column Winners */

      if(r1cl1.text() === r2cl1.text() && r2cl1.text() === r3cl1.text()){
        $('#announce-winner').text(sym +' is the Winner');
      };

      if(r1cl2.text() === r2cl2.text() && r2cl2.text() === r3cl3.text()){
        $('#announce-winner').text(sym +' is the Winner');
      };
      if(r1cl3.text() === r2cl3.text() && r2cl3.text() === r3cl3.text()){
        $('#announce-winner').text(sym +' is the Winner');
      };
      /* Diagonal Winners */
      if(r1cl1.text() === r2cl2.text() && r2cl2.text() === r3cl3.text()){
        $('#announce-winner').text(sym +' is the Winner');
      };
      if(r1cl3.text() === r2cl2.text() && r2cl2.text() === r3cl1.text()){
        $('#announce-winner').text(sym +' is the Winner');
      };
}
        $('#clear').remove('div[data-cell]');

  });
