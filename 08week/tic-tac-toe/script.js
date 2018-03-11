'use strict';

$(document).ready(function() {
  let playerTurn = 'X';

  $('[data-cell]').on('click', function() {
    $(this).text(playerTurn);

    verticalWin();
    horizontalWin();
    diagonalWin();



    if (playerTurn === 'X') {
      playerTurn = 'O';
    } else {
      playerTurn = 'X';
    }


    $('#clear').on('click', function() {
      $('[data-cell]').empty();
    });
    $('#clear').on('click', function() {
      $('#announce-winner').empty();
    });
  });


  // verticalWin();

  function verticalWin() {
    if ($('[data-cell="2"]').text() === 'X' && $('[data-cell="5"]').text() === 'X' && $('[data-cell="8"]').text() === 'X') {
      console.log('X WINS');
      $('#announce-winner').text('X WINS');
    } else if ($('[data-cell="1"]').text() === 'X' && $('[data-cell="4"]').text() === 'X' && $('[data-cell="7"]').text() === 'X') {
      console.log('X WINS');
      $('#announce-winner').text('X WINS');
    } else if ($('[data-cell="0"]').text() === 'X' && $('[data-cell="3"]').text() === 'X' && $('[data-cell="6"]').text() === 'X') {
      console.log('X WINS');
      $('#announce-winner').text('X WINS');
    } else if ($('[data-cell="2"]').text() === 'O' && $('[data-cell="5"]').text() === 'O' && $('[data-cell="8"]').text() === 'O') {
      console.log('O WINS');
      $('#announce-winner').text('O WINS');
    } else if ($('[data-cell="1"]').text() === 'O' && $('[data-cell="4"]').text() === 'O' && $('[data-cell="7"]').text() === 'O') {
      console.log('O WINS');
      $('#announce-winner').text('O WINS');
    } else if ($('[data-cell="0"]').text() === 'O' && $('[data-cell="3"]').text() === 'O' && $('[data-cell="6"]').text() === 'O') {
      console.log('O WINS');
      $('#announce-winner').text('O WINS');
    }

  }
  function horizontalWin() {
    if ($('[data-cell="0"]').text() === 'X' && $('[data-cell="1"]').text() === 'X' && $('[data-cell="2"]').text() === 'X') {
      console.log('X WINS');
      $('#announce-winner').text('X WINS');
    } else if ($('[data-cell="3"]').text() === 'X' && $('[data-cell="4"]').text() === 'X' && $('[data-cell="5"]').text() === 'X') {
      console.log('X WINS');
      $('#announce-winner').text('X WINS');
    } else if ($('[data-cell="6"]').text() === 'X' && $('[data-cell="7"]').text() === 'X' && $('[data-cell="8"]').text() === 'X') {
      console.log('X WINS');
      $('#announce-winner').text('X WINS');
    } else if ($('[data-cell="0"]').text() === 'O' && $('[data-cell="1"]').text() === 'O' && $('[data-cell="2"]').text() === 'O') {
      console.log('O WINS');
      $('#announce-winner').text('O WINS');
    } else if ($('[data-cell="3"]').text() === 'O' && $('[data-cell="4"]').text() === 'O' && $('[data-cell="5"]').text() === 'O') {
      console.log('O WINS');
      $('#announce-winner').text('O WINS');
    } else if ($('[data-cell="6"]').text() === 'O' && $('[data-cell="7"]').text() === 'O' && $('[data-cell="8"]').text() === 'O') {
      console.log('O WINS');
      $('#announce-winner').text('O WINS');
      $('#announce-winner').text('WINNER');
    }

  }

  function diagonalWin() {
    if ($('[data-cell="0"]').text() === 'X' && $('[data-cell="4"]').text() === 'X' && $('[data-cell="8"]').text() === 'X') {
      console.log('X WINS');
      $('#announce-winner').text('X WINS');
    } else if ($('[data-cell="2"]').text() === 'X' && $('[data-cell="4"]').text() === 'X' && $('[data-cell="6"]').text() === 'X') {
      console.log('X WINS');
      $('#announce-winner').text('X WINS');
    } else if ($('[data-cell="0"]').text() === 'O' && $('[data-cell="4"]').text() === 'O' && $('[data-cell="8"]').text() === 'O') {
      console.log('O WINS');
      $('#announce-winner').text('O WINS');
    } else if ($('[data-cell="2"]').text() === 'O' && $('[data-cell="4"]').text() === 'O' && $('[data-cell="6"]').text() === 'O') {
      console.log('O WINS');
      $('#announce-winner').text('O WINS');
      $('#announce-winner').text('WINNER');
    }

  }



});
