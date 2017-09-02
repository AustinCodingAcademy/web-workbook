'use strict';

$(document).ready(function() {
  // Put app logic in here
  var turnCount = 0;
 var checkVictory = function(){};

  $('.row').find('div').on('click',function(){
    if(turnCount % 2 === 0){
      $(this).text('X');
      checkVictory('X');
    } else{
      $(this).text('O');
      checkVictory('O');
    }
    turnCount ++;
    console.log(turnCount);
  });


});
