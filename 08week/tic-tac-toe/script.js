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
    //Assigned hasClass method because var box(#) has 2 classes "o" & "x". Want element to match "x" class.
    //Need "if" statement to list and checks 8 possible ways for 'x' to win.
    if (box1.hasClass('x') && box2.hasClass('x') && box3.hasClass('x')||
    box4.hasClass('x') && box5.hasClass('x') && box6.hasClass('x')||
    box7.hasClass('x') && box8.hasClass('x') && box9.hasClass('x')||
    box1.hasClass('x') && box4.hasClass('x') && box7.hasClass('x')||
    box2.hasClass('x') && box5.hasClass('x') && box8.hasClass('x')||
    box3.hasClass('x') && box6.hasClass('x') && box9.hasClass('x')||
    box1.hasClass('x') && box5.hasClass('x') && box9.hasClass('x')||
    box3.hasClass('x') && box5.hasClass('x') && box7.hasClass('x')
  ){

    //This alert checks to see if above statement is true and stops the ability to continue clicking after player "X" is declared winner by using the removeClass method which removes the 'o' and 'x' classes.
      alert('X is the Winner!')
      $('.box').removeClass('x');
      $('.box').removeClass('o');
      turns = 0;
      //Assigned hasClass method because var box(#) has 2 classes "o" & "x". Want element to match "o" class.
      //else if statement list and checks 8 possible ways for 'o' to win.
    } else if (box1.hasClass('o') && box2.hasClass('o') && box3.hasClass('o')||
    box4.hasClass('o') && box5.hasClass('o') && box6.hasClass('o')||
    box7.hasClass('o') && box8.hasClass('o') && box9.hasClass('o')||
    box1.hasClass('o') && box4.hasClass('o') && box7.hasClass('o')||
    box2.hasClass('o') && box5.hasClass('o') && box8.hasClass('o')||
    box3.hasClass('o') && box6.hasClass('o') && box9.hasClass('o')||
    box1.hasClass('o') && box5.hasClass('o') && box9.hasClass('o')||
    box3.hasClass('o') && box5.hasClass('o') && box7.hasClass('o')
){
  //This alert checks uses the "removeClass" method to see if above statement is true and stops the ability to continue clicking after winner "O" is declared.
      alert('Player "O" is the Winner')
      $('.box').removeClass('x');
      $('.box').removeClass('o');
      turns = 0;
  //This statement declares a tie if game takes 9 turns.
} else if (turns == 9) {
      function tvictory() {
      alert('Tie Game');
      }
      setTimeout(tvictory, 900);
      $('.box').removeClass('x');
      $('.box').removeClass('o');
      turns = 0;


  //Add .hasClass(disable) because turn has been taken.
    } else if ($(this).hasClass('disable')) {
      alert('This spot is occupied, try another.');
  //Checks to see who's turn it is, done by checking to see if turn is even number or not.
    } else if (turns%2 === 0) {
      turns++;
      $(this).text(x);
  //Add "disable x"  class because turn has been taken by player "X". Allows player "O" to make next move.
      $(this).addClass('disable x');

  //Repeat check process for player"X: After an "else if" statement have to run a check again to see if player "X" has a win.
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
        function xvictory() {
        alert('Player "X" is the Winner!');
        }
        setTimeout(xvictory, 500);
        turns = 0;
      }
    // If player "X" does not met checks "else" statement is needed to allow player "O" to continue play.
    } else {
      turns++;
      $(this).text(o);
      $(this).addClass('disable o');
      //Repeat check process for player "O": After the "else" statement have to run a check again to see if player "O" has met any one of 8 checks for a win following "else" staement.
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
        function ovictory() {
        alert('Player "O" is the Winner');
        turns = 0;
      }
      setTimeout(ovictory, 600);
      }
    }
  });
  //Reset Game
  $('#clear').click(function(){
    $('.box').text('');
    $('.box').removeClass('disable');
    $('.box').removeClass('x');
    $('.box').removeClass('o');
    turns = 0;
  });
});
