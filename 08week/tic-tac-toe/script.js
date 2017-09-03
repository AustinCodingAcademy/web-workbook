'use strict';

$(document).ready(function() {
  // Put app logic in here
  var turnCount = 0;
  var xwin = "Player 1 Wins";
  var owin = "Player 2 Wins";
  var checkVictory = function(player) {
    //  top row win
    if ($('#0').text() === player) {
      if ($('#1').text() === player) {
        if ($('#2').text() === player) {
          alert(player + " is the winner");
        }
      }

    }

    //mid row win
    if ($('#3').text() === player) {
      if ($('#4').text() === player) {
        if ($('#5').text() === player) {
          alert(player + " is the winner");
        }
      }
    }
    //bottom row win
    if ($('#6').text() === player) {
      if ($('#7').text() === player) {
        if ($('#8').text() === player) {
          alert(player + " is the winner");
        }
      }
    }
    //first column win
    if ($('#0').text() === player) {
      if ($('#3').text() === player) {
        if ($('#6').text() === player) {
          alert(player + " is the winner!");
        }
      }
    }
    //  2nd column win
    if ($('#1').text() === player) {
      if ($('#4').text() === player) {
        if ($('#7').text() === player) {
          alert(player + " is the winner!");
        }
      }
    }
    // 3rd column win
    if ($('#2').text() === player) {
      if ($('#5').text() === player) {
        if ($('#8').text() === player) {
          alert(player + "is the winner!");
        }
      }
    }
    // diagonal win
    if ($('#0').text() === player) {
      if ($('#4').text() === player) {
        if ($('#8').text() === player) {
          alert(player + " is the winner!");
        }
      }
    }
    if ($('#2').text() === player) {
      if ($('#4').text() === player) {
        if ($('#6').text() === player) {
          alert(player + " is the winner!");
        }
      }
    }
  };

  $('.row').find('div').on('click', function() {
    if ($(this).text() === "") {
      if (turnCount % 2 === 0) {
        $(this).text('X');
        checkVictory('X');
      } else {
        $(this).text('O');
        checkVictory('O');
      }
      turnCount++;
      console.log(turnCount);
    }
  });

  $('body').find('#clear').on('click', function() {
    $('[data-cell]').text("");
    turnCount = 0;
  });

});
