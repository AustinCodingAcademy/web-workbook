'use strict';

//  $(document).ready(function() {

//    $(function() {  
//      $('div').click(function(){
//      $(this).css('background', 'black');
    
//      });
//    });
//  });
var i = 0;
var boxFull = false;
$(document).ready(function(){
  $('div[data-cell]').click(function(){
    if(i % 2 == 1 && boxFull == false) {
      $(this).css("background", "black");
      i++;
      console.log("i is " + i + " and boxFull is " + boxFull);
    } else if(i % 2 && 0 || boxFull == false) {
      $(this).css("background", "red");
      i++
      console.log("i is " + i + " and boxFull is " + boxFull);
    }
    
    // } else {
    //   i++;
    // }
  });
});
