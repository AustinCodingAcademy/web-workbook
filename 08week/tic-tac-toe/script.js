'use strict';

$(document).ready(function() {
  // Put app logic in here
  var start = true;
  var play = function(){
    if (!this.innerHTML) {
      if(start) {
        $(this).text("X");
      } else {
        $(this).text("O");
      }
      start = !start;
    } else {
      alert("Oops! It looks like that box is played...try another!");
    }
    win();
  };

  var win = function(){
    if($('#0')[0].innerHTML === $('#1')[0].innerHTML &&
        $('#1')[0].innerHTML === $('#2')[0].innerHTML){
      }else if (
          $('#0')[0].innerHTML === $('#3')[0].innerHTML &&
           $('#3')[0].innerHTML === $('#6')[0].innerHTML){
      }else if (
          $('#0')[0].innerHTML === $('#4')[0].innerHTML &&
           $('#4')[0].innerHTML === $('#8')[0].innerHTML){
      }else if (
          $('#3')[0].innerHTML === $('#4')[0].innerHTML &&
           $('#4')[0].innerHTML === $('#5')[0].innerHTML){
      }else if (
          $('#6')[0].innerHTML === $('#7')[0].innerHTML &&
           $('#7')[0].innerHTML === $('#8')[0].innerHTML){
      }else if (
          $('#1')[0].innerHTML === $('#4')[0].innerHTML &&
           $('#4')[0].innerHTML === $('#7')[0].innerHTML){
        }else if(
          $('#2')[0].innerHTML === $('#5')[0].innerHTML &&
           $('#5')[0].innerHTML === $('#8')[0].innerHTML){
        }else if(
          $('#6')[0].innerHTML === $('#4')[0].innerHTML &&
           $('#4')[0].innerHTML === $('#2')[0].innerHTML){
        };
    alert("You WON!");
  };

  $('[data-cell]').click(play);



  $('#clear').click(function(){
    $('[data-cell]').empty();
  })
});
