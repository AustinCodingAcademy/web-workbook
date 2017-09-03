'use strict';

$(document).ready(function() {
  // Put app logic in here


  let playerTurn = 0;
  $('[data-cell]').click(function() {
    if (playerTurn %2 === 0){
      $(this).text('X');
    } else {
      $(this).text('O');
    }
    playerTurn++;
  })
});

//   if($('[data-cell="0"]').text() === "X" && $('[data-cell="1"]').text() === "X" && $('[data-cell="2"]').text() === "X") ||
//
// } else {
//
// }($('[data-cell="3"]').text() === "X" && $('[data-cell="4"]').text() === "X" && $('[data-cell="5"]').text() === "X") ||
//
// });
