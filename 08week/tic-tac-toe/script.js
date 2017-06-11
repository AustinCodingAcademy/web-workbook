
$(document).ready (function runGame () {
  'use strict';


var player = 1;
// this variable counts clicks on the board, once 9 are reached without a winner, a tie is delcared
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
  $('#box2').hasClass('X-taken') && $('#box4').hasClass('X-taken') && $('#box6').hasClass('X-taken') ||
  $('#box2').hasClass('X-taken') && $('#box5').hasClass('X-taken') && $('#box8').hasClass('X-taken')) {
    xWinner();
    // the code below enables a win by player O
  } else if  ($('#box0').hasClass('O-taken') && $('#box1').hasClass('O-taken') && $('#box2').hasClass('O-taken') || $('#box3').hasClass('O-taken') && $('#box4').hasClass('O-taken') && $('#box5').hasClass('O-taken') || $('#box6').hasClass('O-taken') && $('#box7').hasClass('O-taken') && $('#box8').hasClass('O-taken') || $('#box0').hasClass('O-taken') && $('#box3').hasClass('O-taken') && $('#box6').hasClass('O-taken') || $('#box0').hasClass('O-taken') && $('#box4').hasClass('O-taken') && $('#box8').hasClass('O-taken') ||
  $('#box1').hasClass('O-taken') && $('#box4').hasClass('O-taken') && $('#box7').hasClass('O-taken') ||
  $('#box2').hasClass('O-taken') && $('#box4').hasClass('O-taken') && $('#box6').hasClass('O-taken') ||
  $('#box2').hasClass('O-taken') && $('#box5').hasClass('O-taken') && $('#box8').hasClass('O-taken')) {
    oWinner();
    // the code below allows a tie message if no winner
  } else if (count === 9) {
    noWinner();
    console.log('no winners');
  }
});
}

// the code below resets the game
function resetGame() {
  $('button').click(function () {
      var reset = $('.X-taken, .O-taken');
      reset.removeClass();
      var announce = $('#announce-winner');
      announce.text('');
      player = 1;
      count = 0;
  });
}

// the code below announces a winner by addig text to the div with id "announce winner"
function xWinner() {
  var announce = $('#announce-winner');
  return announce.text('Lawrence did a win!');
}

function oWinner() {
  var announce = $('#announce-winner');
  return announce.text('Sheena prevailed upon Lawrence!');
}

function noWinner() {
  var announce = $('#announce-winner');
  return announce.text('No winner...PRESS RESET NOW!');
}

// function calls are down here
resetGame();
playerClick();

// closing parenthesis of main function  hj
});
