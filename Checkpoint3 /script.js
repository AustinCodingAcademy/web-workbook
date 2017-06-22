'use strict';
// execute when DOM is loaded
var playerClass = '';
var computerClass = '';
var turn = 0; // user

var classX = 'square-x';
var classO = 'square-o';

var winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

$(document).ready(function() {
  // show thee modal
  $('#myModal').modal('show');

  $('.x-marker, .o-marker').on('click', function() {
    var cls = $(this).attr('class');
    // short version for if else ... if (true) ? dothis : otherwise
    playerClass = (cls==='x-marker') ? 'square-x' : 'square-o';
    computerClass = (playerClass==='x-marker') ? 'square-o' : 'square-x';
    console.log(playerClass);
    $('#myModal').modal('hide');
  });

  $('.square').on('mouseover', function() {
    if (turn===0 && !$(this).hasClass('set')) {
      $(this).addClass(playerClass);
    }
  });

  $('.square').on('mouseout', function() {
    if (turn===0 && !$(this).hasClass('set')) {
      $(this).removeClass(playerClass);
      turn = 1; // AI
    }
  });

  $('.square').on('mousedown', function() {
    if (turn===0 && !$(this).hasClass('set')) {
      $(this).addClass(playerClass);
      $(this).addClass('set');
    }
  });

});

function nextAIMove() {

  var y = -1;
  var x = -1;

  // go through all rows in the array
  for (var i=0; i<winningLines.length; i++) {
    var path = winningLines[i]; // current row
    var counter = 0; // counter to monior how many field already belong to the computer
    for (var p=0; p<path.length; p++) { // go through the row
      if ($('#id'+p).hasClass(computerClass)) { // if belongs to the computer
        counter++; // how many squares in this path belong to the computer
      }
    }
    if (counter===2 && !$('#id'+(p+1)).hasClass(computerClass) && !$('#id'+(p+1)).hasClass(playerClass)) {
      x = path[i+1];
      y = i;
      return [y, x];
    }

  }

}

// Set up the game initially
//     Create a game board
//     Create a players (one "X" one "O")
// Start the game loop (one turn per player)
//     Render the board
//     Ask for and validate the current player's coordinates
//     If the game should end
//         Display the proper victory or draw message
//         Stop looping
//     Else
//         Switch to the next player and keep looping
