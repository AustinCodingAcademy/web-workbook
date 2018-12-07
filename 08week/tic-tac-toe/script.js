'use strict';

const winState = [
  //horizontal
  [0,1,2],
  [3,4,5],
  [6,7,8],
  //veritcle
  [0,3,6],
  [1,4,7],
  [2,5,8],
  //diagonal
  [0,4,8],
  [2,4,6]
]

$(document).ready(function () {

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
      winnerCheck();
    }
    if (click == 9) {
      
      conclusion();
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