'use strict';

// $(document).ready(function() {
//   var $sign = 'X'
//   $('[data-cell]').click(function() {
//     $(this).text($sign);
//     if ($sign === 'X') {
//       $sign = 'O'
//     } else {
//       $sign = 'X';
//     }
//   })
// });


// 0 1 2
// 3 4 5
// 6 7 8 grid set up

// winning combinations are :
// 0 1 2
// 3 4 5
// 6 7 8
// 0 3 6
// 1 4 7
// 2 5 8
// 0 4 8
// 6 4 2


$(document).ready(function() {
  var $sign = 'X'
  $('[data-cell]').on('click',function() {
    $(this).text($sign);
      checkForWin()
    if ($sign === 'O') {
      $sign = 'X'
    } else {
      $sign = 'O';
    }

  })
  $('#clear').on('click', function () {
    location.reload();
  })

  var winningArray = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [6,4,2]
  ];


  function checkForWin() {
    for (let i=0;i<winningArray.length;i++) {
      if ($(`[data-cell="${winningArray[i][2]}"]`).text() !== '') {
        if ($(`[data-cell="${winningArray[i][0]}"]`).text() === $(`[data-cell="${winningArray[i][1]}"]`).text() &&
          $(`[data-cell="${winningArray[i][1]}"]`).text() === $(`[data-cell="${winningArray[i][2]}"]`).text() ) {
          $('#announce-winner').text(`${$sign} has won!`);
        }}
    }
  }

    // function checkForWin() {
    //     for (let i=0;i<winningArray.length;i++) {
    //         for (let j=0; j<winningArray[i].length;j++) {
    //             if ($(`[data-cell="${winningArray[i][j]}"]`).text() === $sign && $(`[data-cell="${winningArray[i][j]}"]`).text() !== ''  ) {
    //                 $('#announce-winner').text(`${$sign} has won!`);
    //             }
    //         }
    //     }
    // }


});
