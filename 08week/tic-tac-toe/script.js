'use strict';

$(document).ready(function() {
  let playerTurn = 'X';
  alert('Welcome to Daggers and Shields\nPrepare for Battle')
// =================================================
// Player Turn. X goes first and strikes quick.
// =================================================
  $('[data-cell]').on('click', function() {
    $(this).text(playerTurn);

    win();

    if (playerTurn === 'X') {
      playerTurn = 'O';
    } else {
      playerTurn = 'X';
    }

  });
// =================================================
//  Win Code. Decides the victor of the spoils.
// =================================================
  function win() {
    if ($('[data-cell="0"]').text() === $('[data-cell="3"]').text() && $('[data-cell="3"]').text()  === $('[data-cell="6"]').text() && $('[data-cell="6"]').text() != ''){
      $('#announce-winner').html(playerTurn + " IS VICTOIOUS!!!")
      console.log(playerTurn + " WINS!");
    } else if ($('[data-cell="1"]').text() === $('[data-cell="4"]').text() && $('[data-cell="4"]').text()  === $('[data-cell="7"]').text() && $('[data-cell="7"]').text() != ''){
      $('#announce-winner').html(playerTurn + " IS VICTOIOUS!!!")
      console.log(playerTurn + " WINS!");
    } else if ($('[data-cell="2"]').text() === $('[data-cell="5"]').text() && $('[data-cell="5"]').text()  === $('[data-cell="8"]').text() && $('[data-cell="8"]').text() != ''){
      $('#announce-winner').html(playerTurn + " IS VICTOIOUS!!!")
      console.log(playerTurn + " WINS!");
    } else if ($('[data-cell="0"]').text() === $('[data-cell="1"]').text() && $('[data-cell="1"]').text()  === $('[data-cell="2"]').text() && $('[data-cell="2"]').text() != ''){
      $('#announce-winner').html(playerTurn + " IS VICTOIOUS!!!")
      console.log(playerTurn + " WINS!");
    } else if ($('[data-cell="3"]').text() === $('[data-cell="4"]').text() && $('[data-cell="4"]').text()  === $('[data-cell="5"]').text() && $('[data-cell="5"]').text() != ''){
      $('#announce-winner').html(playerTurn + " IS VICTOIOUS!!!")
      console.log(playerTurn + " WINS!");
    } else if ($('[data-cell="6"]').text() === $('[data-cell="7"]').text() && $('[data-cell="7"]').text()  === $('[data-cell="8"]').text() && $('[data-cell="8"]').text() != ''){
      $('#announce-winner').html(playerTurn + " IS VICTOIOUS!!!")
      console.log(playerTurn + " WINS!");
    } else if ($('[data-cell="0"]').text() === $('[data-cell="4"]').text() && $('[data-cell="4"]').text()  === $('[data-cell="8"]').text() && $('[data-cell="8"]').text() != ''){
      $('#announce-winner').html(playerTurn + " IS VICTOIOUS!!!")
      console.log(playerTurn + " WINS!");
    } else if ($('[data-cell="2"]').text() === $('[data-cell="4"]').text() && $('[data-cell="4"]').text()  === $('[data-cell="6"]').text() && $('[data-cell="6"]').text() != ''){
      $('#announce-winner').html(playerTurn + " IS VICTOIOUS!!!")
      console.log(playerTurn + " WINS!");
    }
  }
// =================================================
// Clear the Board. Reset the battlefield.
// =================================================
  $('button').on('click', function() {
    $('[data-cell]').html('') && $('#announce-winner').html('');
    console.log("Prepare for Battle")
  });

});
