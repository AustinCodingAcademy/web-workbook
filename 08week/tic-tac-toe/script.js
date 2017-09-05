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


  $('.box').click(function() {
    //List and checks 8 possible ways for 'o' to win.
    if(box1.hasClass('o') && box2.hasClass('o') && box3.hasClass('o')||
    box4.hasClass('o') && box5.hasClass('o') && box6.hasClass('o')||
    box7.hasClass('o') && box8.hasClass('o') && box9.hasClass('o')||
    box1.hasClass('o') && box4.hasClass('o') && box7.hasClass('o')||
    box2.hasClass('o') && box5.hasClass('o') && box8.hasClass('o')||
    box3.hasClass('o') && box6.hasClass('o') && box9.hasClass('o')||
    box1.hasClass('o') && box5.hasClass('o') && box9.hasClass('o')||
    box3.hasClass('o') && box5.hasClass('o') && box7.hasClass('o')

  ){

    //This alert checks to see if above statement is true and stops the ability to continue clicking after winner is declared.
      alert('O is the Winner!')
      $('.box').removeClass('disable');
      $('.box').removeClass('o');
      $('.box').removeClass('x');
      turns = 0;
      //else if statement list and checks 8 possible ways for 'x' to win.
    } else if (box1.hasClass('x') && box2.hasClass('x') && box3.hasClass('x')||
    box4.hasClass('x') && box5.hasClass('x') && box6.hasClass('x')||
    box7.hasClass('x') && box8.hasClass('x') && box9.hasClass('x')||
    box1.hasClass('x') && box4.hasClass('x') && box7.hasClass('x')||
    box2.hasClass('x') && box5.hasClass('x') && box8.hasClass('x')||
    box3.hasClass('x') && box6.hasClass('x') && box9.hasClass('x')||
    box1.hasClass('x') && box5.hasClass('x') && box9.hasClass('x')||
    box3.hasClass('x') && box5.hasClass('x') && box7.hasClass('x')

){
  //This alert checks to see if above statement is true and stops the ability to continue clicking after winner is declared.
      alert('Winner: X')
      $('.box').removeClass('disable');
      $('.box').removeClass('o');
      $('.box').removeClass('x');
      turns = 0;
  //This statement declares a tie if game takes 9 turns.
    }   else if (turns === 9) {
      alert('Tie Game');
      $('.box').removeClass('disable');
      $('.box').removeClass('o');
      $('.box').removeClass('x');
      turns = 0;

  //Add .hasClass(disable) because spot has been taken

    } else if ($(this).hasClass('disable')) {
      alert('This spot is occupied, try another.');
  //Checks to see who's turn it is, done by checking if turn is even number or not.
    } else if (turns%2 === 0) {
      turns++;
      $(this).text(o);
  //Add disable because turn has been taken.
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
        alert('Player "O" is the Winner!');
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
        alert('Player "X" is the Winner');
        turns = 0;
      }
    }
  });
//Reset Game
  $('#clear').click(function(){
    $('.box').text('');
    $('.box').removeClass('disable');
    $('.box').removeClass('o');
    $('.box').removeClass('x');
    turns = 0;

  });
});
