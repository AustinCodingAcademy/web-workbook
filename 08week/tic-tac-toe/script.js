'use strict';

$(document).ready(function() {
  var playerTurn = 'X';
  var last = 'X';
  var moves = 0;

  $('[data-cell]').click(function(){
    // check if square is empty

    // if (playerTurn ? playerTurn = 'O' : playerTurn = 'X');
    // console.log(playerTurn);

    var isEmpty = $(this).text() === '';
    if(isEmpty){
      $(this).text('X');
      // alternate between X and O
      if(last === 'O') {
        $(this).text('X');
        last = 'X';
        moves++;
        console.log(moves);
      } else if (last === 'X'){
        $(this).text('O');
        last = 'O';
        moves++;
        console.log(moves);
      }
      //check if there is a win
      var i;
      var value0 = $('[data-cell="0"]').text();
      var value1 = $('[data-cell="1"]').text();
      var value2 = $('[data-cell="2"]').text();
      var value3 = $('[data-cell="3"]').text();
      var value4 = $('[data-cell="4"]').text();
      var value5 = $('[data-cell="5"]').text();
      var value6 = $('[data-cell="6"]').text();
      var value7 = $('[data-cell="7"]').text();
      var value8 = $('[data-cell="8"]').text();
      var winPatternsX = [
        //rows
        (value0 === 'X') && (value1 === 'X') && (value2 === 'X'),
        (value3 === 'X') && (value4 === 'X') && (value5 === 'X'),
        (value6 === 'X') && (value7 === 'X') && (value8 === 'X'),
        //columns
        (value0 === 'X') && (value3 === 'X') && (value6 === 'X'),
        (value1 === 'X') && (value4 === 'X') && (value7 === 'X'),
        (value2 === 'X') && (value5 === 'X') && (value8 === 'X'),
        //diagonals
        (value0 === 'X') && (value4 === 'X') && (value8 === 'X'),
        (value6 === 'X') && (value4 === 'X') && (value2 === 'X')
      ];
      var winPatternsO = [
        //rows
        (value0 === 'O') && (value1 === 'O') && (value2 === 'O'),
        (value3 === 'O') && (value4 === 'O') && (value5 === 'O'),
        (value6 === 'O') && (value7 === 'O') && (value8 === 'O'),
        //columns
        (value0 === 'O') && (value3 === 'O') && (value6 === 'O'),
        (value1 === 'O') && (value4 === 'O') && (value7 === 'O'),
        (value2 === 'O') && (value5 === 'O') && (value8 === 'O'),
        //diagonals
        (value0 === 'O') && (value4 === 'O') && (value8 === 'O'),
        (value6 === 'O') && (value4 === 'O') && (value2 === 'O')
      ];
      var foundaWin = false;
      for (i = 0; i < winPatternsX.length; i++) {
        if (winPatternsX[i] === true) {
          $('#message').text('X wins!');
          foundaWin = true;
          break;
        } else if (winPatternsO[i] === true) {
            $('#message').text('O wins!');
            foundaWin = true;
            break;
        } else if ((winPatternsX[i] === false) && (winPatternsO[i] === false) && (moves === 9)) {
            $('#message').text('Tie!');
        } else {
              $('#message').text("Next person's turn!");
        }
      }
    } else {
      alert('This square is already filled!');
    }
  });
  // clear function
  $('#clear').click(function(){
      $('[data-cell]').empty();
      $('#message').empty();
      moves = 0;
  })
});



// make variable isGaveOver and put all(?) code above in an if statement saying if isGaveOver is false then allow all this

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
