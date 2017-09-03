'use strict';

$(document).ready(function() {
  // Put app logic in here

  var x = "x";
  var o = "o";
  var turns = 0;

  // Box vars
  var box1 = $('#box1');
  var box2 = $('#box2');
  var box3 = $('#box3');
  var box4 = $('#box4');
  var box5 = $('#box5');
  var box6 = $('#box6');
  var box7 = $('#box7');
  var box8 = $('#box8');
  var box9 = $('#box9');

  $('#board').click(function() {
    if(box1.hasClass('o') && box2.hasClass('o') && box3.hasClass('o')||
    box4.hasClass('o') && box5.hasClass('o') && box6.hasClass('o')||
    box7.hasClass('o') && box8.hasClass('o') && box9.hasClass('o')||
    box1.hasClass('o') && box4.hasClass('o') && box7.hasClass('o')||
    box2.hasClass('o') && box5.hasClass('o') && box8.hasClass('o')||
    box3.hasClass('o') && box6.hasClass('o') && box9.hasClass('o')||
    box1.hasClass('o') && box5.hasClass('o') && box9.hasClass('o')||
    box3.hasClass('o') && box5.hasClass('o') && box7.hasClass('o')

  ){
    alert('Winner: O')
    $('#board li').removeClass('disable');
    $('#board li').removeClass('o');
    $('#board li').removeClass('x');

  } else if (box1.hasClass('x') && box2.hasClass('x') && box3.hasClass('x')||
  box4.hasClass('x') && box5.hasClass('x') && box6.hasClass('x')||
  box7.hasClass('x') && box8.hasClass('x') && box9.hasClass('x')||
  box1.hasClass('x') && box4.hasClass('x') && box7.hasClass('x')||
  box2.hasClass('x') && box5.hasClass('x') && box8.hasClass('x')||
  box3.hasClass('x') && box6.hasClass('x') && box9.hasClass('x')||
  box1.hasClass('x') && box5.hasClass('x') && box9.hasClass('x')||
  box3.hasClass('x') && box5.hasClass('x') && box7.hasClass('x')

){
  alert('Winner: X')
  $('#board li').removeClass('disable');
  $('#board li').removeClass('o');
  $('#board li').removeClass('x');

  //If game takes 9 turns call it a tie
} else if (turns == 9) {
  alert('Tie Game');
  $('#board li').removeClass('disable');
  $('#board li').removeClass('o');
  $('#board li').removeClass('x');

  //Add .addClass(disable) because turn has been taken
  turns = 0;
} else if ($(this).hasClass('disable')) {
  alert('This spot is occupied.');
} else if (turns%2 === 0) {
  turns++;
  $(this).text(o);
  $(this).addClass('disable o');
  if(box1.hasClass('o') && box2.hasClass('o') && box3.hasClass('o')||
  box4.hasClass('o') && box5.hasClass('o') && box6.hasClass('o')||
  box7.hasClass('o') && box8.hasClass('o') && box9.hasClass('o')||
  box1.hasClass('o') && box4.hasClass('o') && box7.hasClass('o')||
  box2.hasClass('o') && box5.hasClass('o') && box8.hasClass('o')||
  box3.hasClass('o') && box6.hasClass('o') && box9.hasClass('o')||
  box1.hasClass('o') && box5.hasClass('o') && box9.hasClass('o')||
  box3.hasClass('o') && box5.hasClass('o') && box7.hasClass('o')

){
    // alert ('Winner O');
    alert('Winner:O');
    turns = 0;
  }
} else {
  turns++;
  $(this).text(x);
  $(this).addClass('disable x');
  if(box1.hasClass('x') && box2.hasClass('x') && box3.hasClass('x')||
  box4.hasClass('x') && box5.hasClass('x') && box6.hasClass('x')||
  box7.hasClass('x') && box8.hasClass('x') && box9.hasClass('x')||
  box1.hasClass('x') && box4.hasClass('x') && box7.hasClass('x')||
  box2.hasClass('x') && box5.hasClass('x') && box8.hasClass('x')||
  box3.hasClass('x') && box6.hasClass('x') && box9.hasClass('x')||
  box1.hasClass('x') && box5.hasClass('x') && box9.hasClass('x')||
  box3.hasClass('x') && box5.hasClass('x') && box7.hasClass('x')

){
  alert('Winner:X');
  turns = 0;
}
}
});
//Reset Game
  $('#reset').click(function(){
    $('#board li').text('open');
    $('#board li').removeClass('disable');
    $('#board li').removeClass('o');
    $('#board li').removeClass('x');
    turns = 0;


});
});
