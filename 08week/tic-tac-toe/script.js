'use strict';

$(document).ready(function() {
  // var playerTurn = 'X';
  var last = 'X';
  var moves = 0;
  var foundaWin = false;
  var playerTurn;

  $('[data-cell]').click(function(){

    // if (playerTurn ? playerTurn = 'O' : playerTurn = 'X');
    // console.log(playerTurn);

    // allow clicks if there is no win
    if (foundaWin === false) {
        var isEmpty = $(this).text() === '';
        // check if square is empty
        if(isEmpty){
          $(this).text('X');
          // alternate between X and O
          if(last === 'O') {
            $(this).text('X');
            last = 'X';
            playerTurn = 'O';
            moves++;
            console.log(moves);
          } else if (last === 'X'){
            $(this).text('O');
            last = 'O';
            playerTurn = 'X';
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
          var winPatterns = [
            //columns
            (value0 && (value0 === value1) && (value0 === value2)),
            (value3 && (value3 === value4) && (value3 === value5)),
            (value6 && (value6 === value7) && (value6 === value8)),
            //rows
            (value0 && (value0 === value3) && (value0 === value6)),
            (value1 && (value1 === value4) && (value1 === value7)),
            (value2 && (value2 === value5) && (value2 === value8)),
            //diagonals
            (value0 && (value0 === value4) && (value0 === value8)),
            (value6 && (value6 === value4) && (value6 === value2))
          ]
          for (i = 0; i < winPatterns.length; i++) {
            if (winPatterns[i] === true) {
              $('#message').text('Player '+last+' Wins!');
              foundaWin = true;
              break;
            } else if ((winPatterns[i] === false) && (moves === 9)) {
                $('#message').text('Tie!');
                console.log('tie');
            } else {
                $('#message').text("Player "+playerTurn+"'s turn!");
            }
          }
        } else {
          alert('This square is already filled!');
        }
      } else {
        return;
      }
    });




  // clear function
  $('#clear').click(function(){
      $('[data-cell]').empty();
      $('#message').empty();
      moves = 0;
      foundaWin = false;
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
