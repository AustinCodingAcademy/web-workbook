'use strict';

$(document).ready(function() {
  let last = 'X';
  let moves = 0;
  let foundaWin = false;
  let playerTurn;

  $('[data-cell]').click(function(){

    // if (playerTurn ? playerTurn = 'O' : playerTurn = 'X');
    // console.log(playerTurn);

    // allow clicks if there is no win
    if (foundaWin === false) {
        const isEmpty = $(this).text() === '';
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
          // check if there is a win
          let i;
          const value0 = $('[data-cell="0"]').text();
          const value1 = $('[data-cell="1"]').text();
          const value2 = $('[data-cell="2"]').text();
          const value3 = $('[data-cell="3"]').text();
          const value4 = $('[data-cell="4"]').text();
          const value5 = $('[data-cell="5"]').text();
          const value6 = $('[data-cell="6"]').text();
          const value7 = $('[data-cell="7"]').text();
          const value8 = $('[data-cell="8"]').text();
          const winPatterns = [
            // columns
            (value0 && (value0 === value1) && (value0 === value2)),
            (value3 && (value3 === value4) && (value3 === value5)),
            (value6 && (value6 === value7) && (value6 === value8)),
            // rows
            (value0 && (value0 === value3) && (value0 === value6)),
            (value1 && (value1 === value4) && (value1 === value7)),
            (value2 && (value2 === value5) && (value2 === value8)),
            // diagonals
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
