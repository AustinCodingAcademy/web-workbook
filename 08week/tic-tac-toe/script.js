'use strict';

$(document).ready(function() {
  let playerTurn = 'X';
  $('.column').click(function() {
    $(this).text(playerTurn);
    if (playerTurn === 'O') {
      playerTurn = 'X';
    } else {
      playerTurn = 'O';
    }
  });
});




// 'use strict';
//
// $(document).ready(function() {
//   let color = 'black';
//   $('.column').click(function() {
//     $(this).prepend(`<div class="disc ${color}"></div>`);
//     if (color === 'red') {
//       color = 'black';
//     } else {
//       color = 'red';
//     }
//   });
// });
