'use strict';

//  $(document).ready(function() {

//    $(function() {  
//      $('div').click(function(){
//      $(this).css('background', 'black');
    
//      });
//    });
//  });

console.log(10 % 3, 10 % 5, 10 % 7);
$(document).ready(function(){
  $('div').click(function(){
    var i = 0;
    if(i < 3) {
      $(this).css("background", "black");
      i++;
      console.log(i);
    } else if(i > 3) {
      $(this).css("background", "red");
      i++;
      console.log(i);
    }
    // } else {
    //   i++;
    // }
  });
});
