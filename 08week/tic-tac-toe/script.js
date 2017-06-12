'use strict';

$(document).ready(function() {

  var player = 1
  $('row').click(function(){
     if ($(this).hasClass('cell-zero')) {
           alert('this works');
         }
         else {
           alert('nope');
         }
   })

});
