'use strict';
$(document).ready(function() {
  var playerOne = 'X';
  var playerTwo = 'O';
  var turn = 1;
  $('[data-cell]').click(function() {
    if (turn % 2 === 1) {
      $(this).text(playerOne);
      checkPlayerWin(playerOne);
    } else {
      $(this).text(playerTwo);
      checkPlayerWin(playerTwo);
    }
    turn++;
  });

  function checkPlayerWin(player) {
    if (($('[data-cell="0"]').text() === playerOne) && ($('[data-cell="1"]').text() === playerOne) && ($('[data-cell="2"]').text() === playerOne) ||
      ($('[data-cell="3"]').text() === playerOne) && ($('[data-cell="4"]').text() === playerOne) && ($('[data-cell="5"]').text() === playerOne) ||
      ($('[data-cell="6"]').text() === playerOne) && ($('[data-cell="7"]').text() === playerOne) && ($('[data-cell="8"]').text() === playerOne) ||
      ($('[data-cell="6"]').text() === playerOne) && ($('[data-cell="4"]').text() === playerOne) && ($('[data-cell="2"]').text() === playerOne) ||
      ($('[data-cell="8"]').text() === playerOne) && ($('[data-cell="4"]').text() === playerOne) && ($('[data-cell="0"]').text() === playerOne) ||
      ($('[data-cell="0"]').text() === playerOne) && ($('[data-cell="3"]').text() === playerOne) && ($('[data-cell="6"]').text() === playerOne) ||
      ($('[data-cell="1"]').text() === playerOne) && ($('[data-cell="4"]').text() === playerOne) && ($('[data-cell="7"]').text() === playerOne) ||
      ($('[data-cell="2"]').text() === playerOne) && ($('[data-cell="5"]').text() === playerOne) && ($('[data-cell="8"]').text() === playerOne)) {

      // YOU WIN!;
      console.log("Player \ " + player + "\ Wins!");
      $('#announce-winner').text("Player \ " + player + "\ Wins!");
    } else if (($('[data-cell="0"]').text() === playerTwo) && ($('[data-cell="1"]').text() === playerTwo) && ($('[data-cell="2"]').text() === playerTwo) ||
      ($('[data-cell="3"]').text() === playerTwo) && ($('[data-cell="4"]').text() === playerTwo) && ($('[data-cell="5"]').text() === playerTwo) ||
      ($('[data-cell="6"]').text() === playerTwo) && ($('[data-cell="7"]').text() === playerTwo) && ($('[data-cell="8"]').text() === playerTwo) ||
      ($('[data-cell="6"]').text() === playerTwo) && ($('[data-cell="4"]').text() === playerTwo) && ($('[data-cell="2"]').text() === playerTwo) ||
      ($('[data-cell="8"]').text() === playerTwo) && ($('[data-cell="4"]').text() === playerTwo) && ($('[data-cell="0"]').text() === playerTwo) ||
      ($('[data-cell="0"]').text() === playerTwo) && ($('[data-cell="3"]').text() === playerTwo) && ($('[data-cell="6"]').text() === playerTwo) ||
      ($('[data-cell="1"]').text() === playerTwo) && ($('[data-cell="4"]').text() === playerTwo) && ($('[data-cell="7"]').text() === playerTwo) ||
      ($('[data-cell="2"]').text() === playerTwo) && ($('[data-cell="5"]').text() === playerTwo) && ($('[data-cell="8"]').text() === playerTwo)) {
      // YOU WIN;
      console.log("Player \ " + player + "\ Wins!");
      $('#announce-winner').text("Player \ " + player + "\ Wins!");
    }
  }
  $('#clear').click(function(){
    $('[data-cell]').text('');
    $('[data-cell]').removeClass('disable');
    $('[data-cell]').removeClass('X');
    $('[data-cell]').removeClass('O');
    turn = 1;


  });

});
