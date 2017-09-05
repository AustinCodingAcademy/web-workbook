'use strict';
$(document).ready(function() {

  // Assign main vars
  var x = "x";
  var o = "o";
  var turns = 0;

  //Assign var's to replace "id's" in code. The var's is now a jQuery object with the assigned "$" symbol.
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
    //Assigned hasClass method because var box(#) has 2 classes "o" & "x". Want element to match "o" class.
    //Need "if" statement to list and checks 8 possible ways for 'o' to win.
    if(box1.hasClass('o') && box2.hasClass('o') && box3.hasClass('o')||
    box4.hasClass('o') && box5.hasClass('o') && box6.hasClass('o')||
    box7.hasClass('o') && box8.hasClass('o') && box9.hasClass('o')||
    box1.hasClass('o') && box4.hasClass('o') && box7.hasClass('o')||
    box2.hasClass('o') && box5.hasClass('o') && box8.hasClass('o')||
    box3.hasClass('o') && box6.hasClass('o') && box9.hasClass('o')||
    box1.hasClass('o') && box5.hasClass('o') && box9.hasClass('o')||
    box3.hasClass('o') && box5.hasClass('o') && box7.hasClass('o')

  ){

    //This alert checks to see if above statement is true and stops the ability to continue clicking after player "O" is declared winner by using the removeClass method which removes the 'o' and 'x' classes.
      alert('O is the Winner!')
      $('.box').removeClass('o');
      $('.box').removeClass('x');
      turns = 0;
      //Assigned hasClass method because var box(#) has 2 classes "o" & "x". Want element to match "x" class.
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
  //This alert checks uses the "removeClass" method to see if above statement is true and stops the ability to continue clicking after winner "X" is declared.
      alert('Player "X" is the Winner')
      $('.box').removeClass('o');
      $('.box').removeClass('x');
      turns = 0;
  //This statement declares a tie if game takes 9 turns.
    } else if (turns === 9) {
      alert('Tie Game');
      $('.box').removeClass('o');
      $('.box').removeClass('x');
      turns = 0;

  //Add .hasClass(disable) because turn has been taken.
    } else if ($(this).hasClass('disable')) {
      alert('This spot is occupied, try another.');
  //Checks to see who's turn it is, done by checking to see if turn is even number or not.
    } else if (turns%2 === 0) {
      turns++;
      $(this).text(o);
  //Add "disable o"  class because turn has been taken by player "O". Allows player "X" to make next move.
      $(this).addClass('disable o');

  //Have to run a check again to see if player "O" has a win.
      if(box1.hasClass('o') && box2.hasClass('o') && box3.hasClass('o')||
  box4.hasClass('o') && box5.hasClass('o') && box6.hasClass('o')||
  box7.hasClass('o') && box8.hasClass('o') && box9.hasClass('o')||
  box1.hasClass('o') && box4.hasClass('o') && box7.hasClass('o')||
  box2.hasClass('o') && box5.hasClass('o') && box8.hasClass('o')||
  box3.hasClass('o') && box6.hasClass('o') && box9.hasClass('o')||
  box1.hasClass('o') && box5.hasClass('o') && box9.hasClass('o')||
  box3.hasClass('o') && box5.hasClass('o') && box7.hasClass('o')

){
    // If any one of the 8 checks are met "alert" declares player "O" is winner.
        alert('Player "O" is the Winner!');
        turns = 0;
      }

    // If player "O" does not met checks "else" statement is needed to allow player "X" to continue play.
    } else {
      turns++;
      $(this).text(x);
      $(this).addClass('disable x');
      //Have to run a check again to see if player "X" has met any one of 8 checks for a win following "else" staement.
      if(box1.hasClass('x') && box2.hasClass('x') && box3.hasClass('x')||
  box4.hasClass('x') && box5.hasClass('x') && box6.hasClass('x')||
  box7.hasClass('x') && box8.hasClass('x') && box9.hasClass('x')||
  box1.hasClass('x') && box4.hasClass('x') && box7.hasClass('x')||
  box2.hasClass('x') && box5.hasClass('x') && box8.hasClass('x')||
  box3.hasClass('x') && box6.hasClass('x') && box9.hasClass('x')||
  box1.hasClass('x') && box5.hasClass('x') && box9.hasClass('x')||
  box3.hasClass('x') && box5.hasClass('x') && box7.hasClass('x')

){
    // If any one of the 8 checks are met "alert" declares player "X" is winner.
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
