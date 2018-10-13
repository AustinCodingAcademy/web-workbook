/* 'use strict';

$(document).ready(function() {
  // Put app logic in here - Tic Tac Toe
  // alternate between players
let currentPlayer = 'Player One';

  $('.box').click (function () {
    console.clear();
    if (currentPlayer === 'Player One') {
      $(this).text('X');
      currentPlayer = 'Player Two';
    } else {
      $(this).text('O');
      currentPlayer = 'Player One';
    }
    
// Write function: clear board


$('#clear').click (function () {
let clearBoard = $('.box');
let i = 0;
console.log(clearBoard);
for (i = 0; i < clearBoard.length; i++) {
  $(clearBoard[i]).text('');
  console.log(i);
}
})

});


// Write function: put X's and O's in the boxes when you click (only allow one selection)





// Write function: check for win    

// Write function: winner text

// Write function: check for draw

// Write function: draw text





}); */

const PLAYER_TOKEN = 'X'
const COMPUTER_TOKEN = 'Y'

$(document).ready(function() {
  const grid = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];

  $('.col').click(function() {
    $(this).html(PLAYER_TOKEN);
    $(this).css('color', 'red');
  })

})

