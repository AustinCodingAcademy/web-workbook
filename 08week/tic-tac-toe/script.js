'use strict';

$(document).ready(function() {
  var turnCount = 0;
  var win = 0; //wanted to keep track of win, but didn't work
  //  checkVictory('X');
  $('.row').find('div').on('click', function() {
    if ($(this).text() === '') {
      if (turnCount % 2 === 0) {
        //player 1's turn (X)
        $(this).text('X');
        checkVictory('X'); //check player X for victory
      } else {
        //player 2's turn (O)
        $(this).text('O');
        checkVictory('O'); //check player O for victory
      }
      turnCount++;
    }
  });
  // Button for clearing the whole board
  $('#clear').on('click', function() {
    $('[data-cell]').empty('');
  });


});


function checkVictory(player) {
  //top row check for victory
  if ($('.row').find('[data-cell="0"]').text() !== '') {
    if ($('.row').find('[data-cell="0"]').text() == $('.row').find('[data-cell="1"]').text()) {
      if ($('.row').find('[data-cell="0"]').text() == $('.row').find('[data-cell="2"]').text()) {
        alert('Game over! ' + player + ' is the winner!');
        win = 1;
      }
    }
  }

  //left column check for victory
  if ($('.row').find('[data-cell="0"]').text() !== '') {
    if ($('.row').find('[data-cell="0"]').text() == $('.row').find('[data-cell="3"]').text()) {
      if ($('.row').find('[data-cell="0"]').text() == $('.row').find('[data-cell="6"]').text()) {
        alert('Game over! ' + player + ' is the winner!');
        win = 1;
      }
    }
  }
  //left diagonal check for victory
  if ($('.row').find('[data-cell="0"]').text() !== '') {
    if ($('.row').find('[data-cell="0"]').text() == $('.row').find('[data-cell="4"]').text()) {
      if ($('.row').find('[data-cell="0"]').text() == $('.row').find('[data-cell="8"]').text()) {
        alert('Game over! ' + player + ' is the winner!');
        win = 1;
      }
    }
  }

  //middle column check for victory
  if ($('.row').find('[data-cell="1"]').text() !== '') {
    if ($('.row').find('[data-cell="1"]').text() == $('.row').find('[data-cell="4"]').text()) {
      if ($('.row').find('[data-cell="1"]').text() == $('.row').find('[data-cell="7"]').text()) {
        alert('Game over! ' + player + ' is the winner!');
        win = 1;
      }
    }
  }

  //right column check for victory
  if ($('.row').find('[data-cell="2"]').text() !== '') {
    if ($('.row').find('[data-cell="2"]').text() == $('.row').find('[data-cell="5"]').text()) {
      if ($('.row').find('[data-cell="2"]').text() == $('.row').find('[data-cell="8"]').text()) {
        alert('Game over! ' + player + ' is the winner!');
        win = 1;
      }
    }
  }
  //right diag check for victory
  if ($('.row').find('[data-cell="2"]').text() !== '') {
    if ($('.row').find('[data-cell="2"]').text() == $('.row').find('[data-cell="4"]').text()) {
      if ($('.row').find('[data-cell="2"]').text() == $('.row').find('[data-cell="6"]').text()) {
        alert('Game over! ' + player + ' is the winner!');
        win = 1;
      }
    }
  }
  //middle row check for victory

  if ($('.row').find('[data-cell="3"]').text() !== '') {
    if ($('.row').find('[data-cell="3"]').text() == $('.row').find('[data-cell="4"]').text()) {
      if ($('.row').find('[data-cell="3"]').text() == $('.row').find('[data-cell="5"]').text()) {
        alert('Game over! ' + player + ' is the winner!');
        win = 1;
      }
    }
  }

  //bottom row check for victory
  if ($('.row').find('[data-cell="6"]').text() !== '') {
    if ($('.row').find('[data-cell="6"]').text() == $('.row').find('[data-cell="7"]').text()) {
      if ($('.row').find('[data-cell="6"]').text() == $('.row').find('[data-cell="8"]').text()) {
        alert('Game over! ' + player + ' is the winner!');
        win = 1;
      }
    }
  }



}
