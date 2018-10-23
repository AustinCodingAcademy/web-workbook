'use strict';
$(document).ready(function(){

  // counter goes up every time you click on the bad guy
  var num1 = 0;  
  $('#screen-1').click(function() {
    num1++;
    $('#points').text(num1);
  });

  // bleep sound on-click
  var obj = document.createElement("audio");
  obj.src="https://github.com/konarie1990/web-workbook/blob/gh-pages/checkpoint-3/bleep3.mp3?raw=true";
  obj.volume=0.70;
  obj.autoPlay=false;
  obj.preLoad=true;       

  $("#screen-1").click(function() {
    obj.play();
  });

});