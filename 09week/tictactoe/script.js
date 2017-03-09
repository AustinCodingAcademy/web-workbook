$(function() {
  var playerTurn = 'x'
  $('[data-cell]').click(function() {
    $(this).text(playerTurn);
    if (checkWin()) {
      $('#announce-winner').text(playerTurn + "wins!");
    } else {
    if (playerTurn === 'x') {
      playerTurn = 'o';
    } else {
      playerTurn = 'x'
    }
  }
})

    function checkWin() {
      if (
          $('[data-cell="0"]').text() === playerTurn &&
          $('[data-cell="3"]').text() === playerTurn &&
          $('[data-cell="6"]').text() === playerTurn
    ) {
      return true;
    } else {
      return false;
    }
  }
})

// $(function() {
//   let color = 'rgb(0,128,0)'
//   $('[data-cell]').click(function() {
//     $(this).css('background-color', color);
//     if (color === 'rgb(0,128,0)') {
//       color = '0,0,255';
//     } else {
//       color = 'rgb(0,128,0)'
//     }
//   })
//
//     function checkWin() {
//       if (
//           $('[data-cell="0"]').css('background-color') === color &&
//           $('[data-cell="3"]').css('background-color') === color &&
//           $('[data-cell="6"]').css('background-color') === color
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// })
// $(function() {
//   let color = 'rgb(0,128,0)'
//   $('[data-cell]').click(function() {
//     $(this).css('background-color', color);
//     if (color === 'rgb(0,128,0)') {
//       color = '0,0,255';
//     } else {
//       color = 'rgb(0,128,0)'
//     }
//   })
//
//     function checkWin() {
//       if (
//           $('[data-cell="0"]').css('background-color') === color &&
//           $('[data-cell="3"]').css('background-color') === color &&
//           $('[data-cell="6"]').css('background-color') === color
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// })

// green = rgb(0,128,0)
// blue = rgb (0,0,255)
