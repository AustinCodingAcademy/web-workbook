'use strict';

$(document).ready(function() {
  // Put app logic in here
  var start = true;
  var toggle = function () {
    if (!this.innerHTML) {
      if(start){
        $(this).text("X");
      }else{
        $(this).text("O");
      }
      start = !start;
    }else {
      setTimeout(function(){
        alert("That space is already played!")
      }, 300);
      //add time out to prevent alert from appearing before mark in box
    }
    //winner();
  };

  var clear = function(){
    $('[data-cell]').empty();
  };



  $("[data-cell]").click(toggle);

  $('#clear').click(clear);




});

/*var winner = function(){
  if (
  $("#0")[0].innerHTML === $("#1")[0].innerHTML && $("#1")[0].innerHTML === $("#2")[0].innerHTML){
    alert("Winner");
  }
  if (
  $("#6")[0].innerHTML === $("#7")[0].innerHTML && $("#7")[0].innerHTML === $("#8")[0].innerHTML){
    alert("Winner");




};*/
