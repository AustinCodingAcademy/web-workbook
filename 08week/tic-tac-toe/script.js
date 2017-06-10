
$(document).ready (function runGame () {
  'use strict';


  // Put app logic in here
//
// code plan:
//
// create a basic tic tac toe game
//
// there are two players
// player 1 = 'x', player 2 = '0'
var player = 1;
var count = 0;

 // this is the function that places an x or o on the board
 // each time a box (div with 'data-cell' attr) is clicked, the player changes
function playerClick() {

$('div').click(function () {
  var cell = $(this);

  if (cell.attr('data-cell') && (!$(this).hasClass('X-taken')) && cell.attr('data-cell') && (!$(this).hasClass('O-taken')) ) {
    if (player === 1) {
      cell.addClass('X-taken');
      player = 2;
      count++;
    } else {
      cell.addClass('O-taken');
      cell.removeClass('X-taken');
      player = 1;
      count++;
    }
    // the code below enables a win by player X
  } else if ($('#box0').hasClass('X-taken') && $('#box1').hasClass('X-taken') && $('#box2').hasClass('X-taken') || $('#box3').hasClass('X-taken') && $('#box4').hasClass('X-taken') && $('#box5').hasClass('X-taken') || $('#box6').hasClass('X-taken') && $('#box7').hasClass('X-taken') && $('#box8').hasClass('X-taken') || $('#box0').hasClass('X-taken') && $('#box3').hasClass('X-taken') && $('#box6').hasClass('X-taken') || $('#box0').hasClass('X-taken') && $('#box4').hasClass('X-taken') && $('#box8').hasClass('X-taken') ||
  $('#box1').hasClass('X-taken') && $('#box4').hasClass('X-taken') && $('#box7').hasClass('X-taken') ||
  $('#box2').hasClass('X-taken') && $('#box2').hasClass('X-taken') && $('#box6').hasClass('X-taken') ||
  $('#box2').hasClass('X-taken') && $('#box5').hasClass('X-taken') && $('#box8').hasClass('X-taken')) {
    console.log('X is the winner');
    // the code below enables a win by player O
  } else if  ($('#box0').hasClass('O-taken') && $('#box1').hasClass('O-taken') && $('#box2').hasClass('O-taken') || $('#box3').hasClass('O-taken') && $('#box4').hasClass('O-taken') && $('#box5').hasClass('O-taken') || $('#box6').hasClass('O-taken') && $('#box7').hasClass('O-taken') && $('#box8').hasClass('O-taken') || $('#box0').hasClass('O-taken') && $('#box3').hasClass('O-taken') && $('#box6').hasClass('O-taken') || $('#box0').hasClass('O-taken') && $('#box4').hasClass('O-taken') && $('#box8').hasClass('O-taken') ||
  $('#box1').hasClass('O-taken') && $('#box4').hasClass('O-taken') && $('#box7').hasClass('O-taken') ||
  $('#box2').hasClass('O-taken') && $('#box4').hasClass('O-taken') && $('#box6').hasClass('O-taken') ||
  $('#box2').hasClass('O-taken') && $('#box5').hasClass('O-taken') && $('#box8').hasClass('O-taken')) {
    console.log('O is the winner');
    // the code below allows a tie message if no winner
  } else if (count === 9) {
    console.log('No winner');
  }
});

}

// the code below resets the game
function resetGame() {
  $('button').click(function () {
    var blank = $('div').attr('data-cell');
    blank.removeClass('X-taken');
  });
}
// function calls are down here
playerClick();
resetGame();

// closing parenthesis of main function  hj
});
