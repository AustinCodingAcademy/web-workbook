'use strict';
$(document).ready(function() {
      // alert('Let\'s Play Tic-Tac-Toe!')
      var playerTurn = 0;
      var xWin = 'Player One Wins!';
      var yWin = 'Player Two Wins!';

      var winCondition = function(player) {
        if (($('#0') === player && $('#1') === player && $('#2') === player) ||
          ($('#3') === player && $('#4') === player && $('#5') === player) ||
          ($('#6') === player && $('#7') === player && $('#8') === player) ||
          ($('#0') === player && $('#3') === player && $('#6') === player) ||
          ($('#1') === player && $('#4') === player && $('#7') === player) ||
          ($('#2') === player && $('#5') === player && $('#8') === player) ||
          ($('#0') === player && $('#4') === player && $('#8') === player) ||
          ($('#2') === player && $('#4') === player && $('#6') === player));
        alert('Winner, Winner, Chicken Dinner!');
        else {
          alert('Draw.  Everyone\'s a winner and/or loser!');
        }

        $('[id]').on('click', function() {
          if ($(this).text() === '') {
            if (playerTurn % 2 === 0) {
              $(this).text('X');
              winCondition('X');
            } else {
              $(this).text('O');
              winCondition('O');
            }
            playerTurn++;

          }
        });
        $(winCondition() {
          location.reload();
        });
      };
      });
