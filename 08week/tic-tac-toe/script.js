'use strict';

$(document).ready(function (){
  var happy=true;
  var toggle=function(){
    if (happy) {
      $(this).text('x');
    }
    else {
      $(this).text('o');
    }
    happy=!happy;
  }
  $('[data-cell]').click(toggle);
  $('#clear').click(function(){
    $('[data-cell]').empty();
  var test=$('[data-cell="0"]')[0].innerHTML;
  });
});

//var win=function(){
  //if ($('[data-cell="0"]')[0].innerHTML === $('[data-cell="1"]')[0].innerHTML){
//$("#announce-winner").text('You win!');
//}



//);
