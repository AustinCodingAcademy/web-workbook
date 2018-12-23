'use strict';

//All possible winning combinations
const winState = [
  //horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //veritcle
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //diagonal
  [0, 4, 8],
  [2, 4, 6]
]

//On start 
$(document).ready(function () {
  let click = 0;
  $('.square').click(function () {
    //If the square is already filled in or a winner has been announced this will prevent additional clicks
    if ($(this).text() == "" && $('#announce-winner').text() == '') {
      //Every other click is an X or O based on even or odd number of clicks
      if (click % 2 == 0) {
        $(this).text('x');
      } else {
        $(this).text('o');
      }
      //Counts click to determine even or odd click 
      click = click + 1;
      //After every click it checks for a winner
      testWinner();
    }
    //If every square has been clicked on but no winner declared it will through a draw
    if (click == 9) {
      draw();
    }
  });

  //Determines if anyone has won the game
  function testWinner() {
    //Loops 8 times times to check each individual array
    for (let i = 0; i < winState.length; i++) {
      //Variables counts the number of times X or O is present in each indivial array if the number = 3 then a winner is chosen
      let xCount = 0;
      let oCount = 0;
      //Loops 3 times to review values of each individual array
      for (let x = 0; x < winState[i].length; x++) {
        //Variable is used to concatonate id name in order to check potential winning cells
        let posisition = winState[i][x];

        //Check if xCount is equal to three if so then throws winner alert
        if ($('#_' + posisition).text() == 'x') {
          xCount = xCount + 1;
          if (xCount == 3) {
            $('#announce-winner').text('X IS THE WINNER');
            click = 0;
          }

          //Check if oCount is equal to three if so then throws winner alert
        } else if ($('#_' + posisition).text() == 'o') {
          oCount = oCount + 1;
          if (oCount == 3) {
            $('#announce-winner').text('O IS THE WINNER');
            click = 0;
          }
        }
      }
    }
  }

  //Announce draw if necassary
  function draw() {
    $('#announce-winner').text('DRAW');
  };

  //Clear everything from board
  $('#clear').click(function () {
    $('.square').each(function () {
      $(this).text('');
    });
    $('#announce-winner').text('');
    click = 0;
  });
});