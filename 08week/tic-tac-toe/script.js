'use strict';

$(document).ready(function() {
  // Put app logic in here
  var playerTurn = 'O';



  $('[data-cell]').on('click', function() {
    $(this).text(playerTurn);

    //Check for win

    verticalWin();
    horizontalWin();
    diagWin();



    // if playerTurn is X, then make
    //playerTurn 0. If playerTurn is
    //not X, make it X.

    if (playerTurn === 'X'){
      playerTurn = 'O';
    } else {
      playerTurn = 'X';
    }

  });


  function verticalWin() {
    if ($('[data-cell="2"]').text() === $('[data-cell="5"]').text() && $('[data-cell="5"]').text()  === $('[data-cell="8"]').text() && $('[data-cell="8"]').text() != ''){
      console.log(playerTurn + " wins!");
    }
    else if ($('[data-cell="1"]').text() === $('[data-cell="4"]').text() && $('[data-cell="4"]').text()  === $('[data-cell="7"]').text() && $('[data-cell="7"]').text() != ''){
      console.log(playerTurn + " wins!");
    }
    else if ($('[data-cell="0"]').text() === $('[data-cell="3"]').text() && $('[data-cell="3"]').text()  === $('[data-cell="6"]').text() && $('[data-cell="6"]').text() != ''){
      console.log(playerTurn + " wins!");
    }
  }
  function horizontalWin() {
    if ($('[data-cell="0"]').text() === $('[data-cell="1"]').text() && $('[data-cell="1"]').text()  === $('[data-cell="2"]').text() && $('[data-cell="2"]').text() != ''){
      console.log(playerTurn + " wins!");
    }
    else if ($('[data-cell="3"]').text() === $('[data-cell="4"]').text() && $('[data-cell="4"]').text()  === $('[data-cell="5"]').text() && $('[data-cell="5"]').text() != ''){
      console.log(playerTurn + " wins!");
    }
    else if ($('[data-cell="6"]').text() === $('[data-cell="7"]').text() && $('[data-cell="7"]').text()  === $('[data-cell="8"]').text() && $('[data-cell="8"]').text() != ''){
      console.log(playerTurn + " wins!");
    }
  }
  function diagWin() {
    if ($('[data-cell="0"]').text() === $('[data-cell="4"]').text() && $('[data-cell="4"]').text()  === $('[data-cell="8"]').text() && $('[data-cell="8"]').text() != ''){
      console.log(playerTurn + " wins!");
    }
    else if ($('[data-cell="2"]').text() === $('[data-cell="4"]').text() && $('[data-cell="4"]').text()  === $('[data-cell="6"]').text() && $('[data-cell="6"]').text() != ''){
      console.log(playerTurn + " wins!");
    }
  }

  $('#clear').on('click', function() {
    location.reload();
  });



});
