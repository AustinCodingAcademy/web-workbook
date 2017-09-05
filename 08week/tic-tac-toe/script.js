'use strict';
$(document).ready(function() {
  alert('Let\'s Play Tic-Tac-Toe!')
  var playerTurn = 0;
  var xWin = 'Player One Wins!';
  var yWin = 'Player Two Wins!';

  var winCondition = function(player) {
    if (($('#0').text() === player && $('#1').text() === player && $('#2').text() === player) ||
      ($('#3').text() === player && $('#4').text() === player && $('#5').text() === player) ||
      ($('#6').text() === player && $('#7').text() === player && $('#8').text() === player) ||
      ($('#0').text() === player && $('#3').text() === player && $('#6').text() === player) ||
      ($('#1').text() === player && $('#4').text() === player && $('#7').text() === player) ||
      ($('#2').text() === player && $('#5').text() === player && $('#8').text() === player) ||
      ($('#0').text() === player && $('#4').text() === player && $('#8').text() === player) ||
      ($('#2').text() === player && $('#4').text() === player && $('#6').text() === player)) {
      alert('Winner, Winner, Chicken Dinner!');
    }
  };
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
  $('#clear').click (function() {
    $('[data-cell]').text('');
  });
});
