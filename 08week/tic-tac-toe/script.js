'use strict';

$(document).ready(function() {

  // var isEmpty = $('[data-cell]').length < 1;
var last = 'X';

  $('[data-cell]').click(function(){
    var isEmpty = $(this).text() === '';
    if(isEmpty){
      $(this).text('X');
      if(last === 'O') {
        $(this).text('X');
        last = 'X';
      } else if (last === 'X'){
        $(this).text('O');
        last = 'O';
      }
      //check if there is a win
    } else {
      alert('this square is already filled!');
    }
  })

});

//variables

// let winPatterns = [],
//     msg = document.getElementById('message'),
//     square = $('[data-cell]');

// 1. check if it is empty ?
// 2. check if last mark was an 'x'
// 3. if so, draw an 'O'
// 4. update last variable with 'o'
// 5. check if it is empty?
// 6. if not, check last mark, it's an 'o'!
// 7. if 'o' update to an 'x'



// function that checks if box is empty or full

// if(isEmpty){
//   ...do some stuff
// } else {
//
// }

//function that checks last marking on board

//function that checks if someone won (extra challenging, do last! 2 for loops within each other)

//function for alert that tells user they already placed a mark in this square

//function that tells you who's turn it is and whether it is X or O
