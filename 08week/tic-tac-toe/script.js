'use strict';

$(document).ready(function() {
  // Put app logic in here
  var playerTurn = 'X';

  $('[data-cell]').on('click', function() {
    $(this).text(playerTurn);

    //Check for win
    verticalWin();
    horizontalWin();
    diagonalWin();


    // if playerTurn is X, then make
    //playerTurn 0. If playerTurn is
    //not X, make it X.

    if (playerTurn === 'X') {
      playerTurn = 'O';
    } else {
      playerTurn = 'X';
    }

  });


  function verticalWin() {
    if ($('[data-cell="2"]').text() === $('[data-cell="5"]').text() && $('[data-cell="5"]').text() === $('[data-cell="8"]').text() && $('[data-cell="8"]').text() != '') {
      console.log(playerTurn + " wins!");
      document.getElementById("p-ann").innerHTML = (playerTurn + " wins!");
    } else if ($('[data-cell="1"]').text() === $('[data-cell="4"]').text() && $('[data-cell="4"]').text() === $('[data-cell="7"]').text() && $('[data-cell="7"]').text() != '') {
      console.log(playerTurn + " wins!");
      document.getElementById("p-ann").innerHTML = (playerTurn + " wins!");
    } else if ($('[data-cell="0"]').text() === $('[data-cell="3"]').text() && $('[data-cell="3"]').text() === $('[data-cell="6"]').text() && $('[data-cell="6"]').text() != '') {
      console.log(playerTurn + " wins!");
      document.getElementById("p-ann").innerHTML = (playerTurn + " wins!");
    }

  }

  function horizontalWin() {
    if ($('[data-cell="6"]').text() === $('[data-cell="7"]').text() && $('[data-cell="7"]').text() === $('[data-cell="8"]').text() && $('[data-cell="8"]').text() != '') {
      console.log(playerTurn + " wins!");
      document.getElementById("p-ann").innerHTML = (playerTurn + " wins!");
    } else if ($('[data-cell="3"]').text() === $('[data-cell="4"]').text() && $('[data-cell="4"]').text() === $('[data-cell="5"]').text() && $('[data-cell="5"]').text() != '') {
      console.log(playerTurn + " wins!");
      document.getElementById("p-ann").innerHTML = (playerTurn + " wins!");
    } else if ($('[data-cell="0"]').text() === $('[data-cell="1"]').text() && $('[data-cell="1"]').text() === $('[data-cell="2"]').text() && $('[data-cell="2"]').text() != '') {
      console.log(playerTurn + " wins!");
      document.getElementById("p-ann").innerHTML = (playerTurn + " wins!");
    }
  }


  function diagonalWin() {
    if ($('[data-cell="0"]').text() === $('[data-cell="4"]').text() && $('[data-cell="4"]').text() === $('[data-cell="8"]').text() && $('[data-cell="8"]').text() != '') {
      console.log(playerTurn + " wins!");
      document.getElementById("p-ann").innerHTML = (playerTurn + " wins!");
    } else if ($('[data-cell="2"]').text() === $('[data-cell="4"]').text() && $('[data-cell="4"]').text() === $('[data-cell="6"]').text() && $('[data-cell="6"]').text() != '') {
      console.log(playerTurn + " wins!");
      document.getElementById("p-ann").innerHTML = (playerTurn + " wins!");
    }
  }

$("button").click(function(){
        $(".dc").empty();
        $("#p-ann").empty();
        playerTurn = 'X';
    });




});
