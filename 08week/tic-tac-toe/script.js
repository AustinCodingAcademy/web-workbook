'use strict';

$(document).ready(function() {
  // Put app logic in here
  var playerTurn = 'O';

  $('[data-cell]').on('click', function() {
    $(this).text(playerTurn);

    //Check for win
    verticalWin();
    horizontalWin();
    diagonalWin();

    // if playerTurn is X, then make playerTurn 0. If playerTurn is not X, make it X.

    if (playerTurn === 'X'){
      playerTurn = 'O';
    } else {
      playerTurn = 'X';
    }

  });

  // Data Cell Layout
  // 0 1 2
  // 3 4 5
  // 6 7 8

  function verticalWin() {
    if ($('[data-cell="2"]').text() === 'X' && $('[data-cell="5"]').text() === 'X' && $('[data-cell="8"]').text() === 'X'){
      alert('X wins!');
    } else if ($('[data-cell="1"]').text() === 'X' && $('[data-cell="4"]').text() === 'X' && $('[data-cell="7"]').text() === 'X'){
      alert('X wins');
    } else if ($('[data-cell="0"]').text() === 'X' && $('[data-cell="3"]').text() === 'X' && $('[data-cell="6"]').text() === 'X'){
      alert('X wins');
    } else if ($('[data-cell="2"]').text() === 'O' && $('[data-cell="5"]').text() === 'O' && $('[data-cell="8"]').text() === 'O'){
      alert('O wins');
    } else if ($('[data-cell="1"]').text() === 'O' && $('[data-cell="4"]').text() === 'O' && $('[data-cell="7"]').text() === 'O'){
      alert('O wins');
    } else if ($('[data-cell="0"]').text() === 'O' && $('[data-cell="3"]').text() === 'O' && $('[data-cell="6"]').text() === 'O'){
      alert('0 wins');
    }
  }

  function horizontalWin() {
    if ($('[data-cell="0"]').text() === 'X' && $('[data-cell="1"]').text() === 'X' && $('[data-cell="2"]').text() === 'X'){
      alert('X wins!');
    } else if ($('[data-cell="3"]').text() === 'X' && $('[data-cell="4"]').text() === 'X' && $('[data-cell="5"]').text() === 'X'){
      alert('X wins!');
    } else if ($('[data-cell="6"]').text() === 'X' && $('[data-cell="7"]').text() === 'X' && $('[data-cell="8"]').text() === 'X'){
      alert('X wins!');
    } else if ($('[data-cell="0"]').text() === 'O' && $('[data-cell="1"]').text() === 'O' && $('[data-cell="2"]').text() === 'O'){
      alert('O wins!');
    } else if ($('[data-cell="3"]').text() === 'O' && $('[data-cell="4"]').text() === 'O' && $('[data-cell="5"]').text() === 'O'){
      alert('O wins!');
    } else if ($('[data-cell="6"]').text() === 'O' && $('[data-cell="7"]').text() === 'O' && $('[data-cell="8"]').text() === 'O'){
      alert('0 wins!');
    }
  }

  function diagonalWin() {
    if ($('[data-cell="2"]').text() === 'X' && $('[data-cell="4"]').text() === 'X' && $('[data-cell="6"]').text() === 'X'){
      alert('X wins!');
    } else if ($('[data-cell="0"]').text() === 'X' && $('[data-cell="4"]').text() === 'X' && $('[data-cell="8"]').text() === 'X'){
      alert('X wins!');
    } else if ($('[data-cell="2"]').text() === 'O' && $('[data-cell="4"]').text() === 'O' && $('[data-cell="6"]').text() === 'O'){
      alert('O wins!');
    } else if ($('[data-cell="0"]').text() === 'O' && $('[data-cell="4"]').text() === 'O' && $('[data-cell="8"]').text() === 'O'){
      alert('O wins!');
    }
  }

  $('#clear').on('click', function() {
    location.reload();
  });

});
