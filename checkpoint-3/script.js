'use strict';
$(document).ready(function(){

  var num1 = 0;  
  // var num2 = 0;
  // var num3 = 0; 
  $('#screen').click(function() {
    num1++;
    $('#points').text(num1);
  });

  var obj = document.createElement("audio");
  obj.src="https://github.com/konarie1990/web-workbook/blob/gh-pages/checkpoint-3/bleep3.mp3";
  obj.volume=0.70;
  obj.autoPlay=false;
  obj.preLoad=true;       

  $(".playSound").click(function() {
    obj.play();
  });


});