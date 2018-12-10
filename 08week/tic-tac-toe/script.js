'use strict';

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

function testWinner() {
  for (let i = 0; i < winState.length; i++) {
    let idNumber = '_' + i;
    let final = document.getElementById(idNumber).innerHTML;
    for (let x = 0; x < winState[i].length; x++) {
      // if (winState[i][x] = )
      if (final == 'x') {
        let text =+ 1;
        console.log(text);
      }

      //if (document.querySelectorAll('square')[i]= winState[i]){

    }
  }
  
}


$(document).ready(function () {
  testWinner();
  //Every other click (either X or O)
  let click = 0;
  $('.square').click(function () {
    if ($(this).text() == "") {
      if (click % 2 == 0) {
        $(this).text('x');
      } else {
        $(this).text('o');
      }
      click = click + 1;
      //winnerCheck();
      testWinner();
    }
    if (click == 9) {

      conclusion();
      testWinner();
    }
  });

  //Check for winner
  function winnerCheck() {
    for (let i; i > 3; i++)
      $('.win' + i).each(function () {
        let currentValue = $(this).text();
        console.log("true")
        if (currentValue == previousValue) {

        }
      });
    let previousValue = $(this).text();
  };

  //Announce winner or draw
  function conclusion() {
    $('#announce-winner').text('DRAW');
  };

  //Clear everything from board
  $('#clear').click(function () {
    $('.square').each(function () {
      $(this).text('');
    });
    $('#announce-winner').text('');
  });

});