
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
// a player wins when he connects three squares in a row
//

// there can only be one click per square
//
// when a player wins, an alert box congratulates him
//
// if there is a draw, an alert box says so
//
// there is a reset button to clear the board




 // this is the function that places an x or o on the board
 // each time a box (div with 'data-cell' attr) is clicked, the player changes
function playerClick() {

$('div').click(function () {
  var cell = $(this);

  if (cell.attr('data-cell') && (!$(this).hasClass('taken')) ) {
    if (player === 1) {
      cell.addClass('X');
      cell.addClass('taken');
      player = 2;
    } else {
      cell.addClass('O');
      cell.addClass('taken');
      player = 1;
    }
  }

});
}

// there are nine possible wins
//
function possibleWins() {


  var wins = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
  ];

  $.each( wins, function(i) {
    console.log(wins[i]);
  });

  







  // for (var i = 0; i < wins.length; i++ ) {
  //   var win = wins[i];
  //   if (win.hasClass('taken')) {
  //     alert('someone won');
  //   }
  //
  // }

}

// function calls are down here
possibleWins();

playerClick();
// closing parenthesis of main function  hj
});
