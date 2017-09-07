'use strict';
$(document).ready(function(){
  var turnCount = 0;

  var oneWins = "Player One Wins";
  var twoWins = "Player Two Wins";
  var player = "You win";

  $(`[data-cell]`).on('click', function(){
    if($(this).text() === ''){
      if (turnCount % 2 === 0){
      //player 1's turn(X)
        $(this).text('X');
        checkVictory('X');
      } else {
      //player 2's turn (O)
        $(this).text('O');
        checkVictory('O');
      }
        turnCount++;
    }
  })


  var checkVictory = function(player){
        //  top row check
  if ($('#0').text() === player) {
    if ($('#1').text() === player) {
      if ($('#2').text() === player) {
        alert(player + " wins, good job!");
        }
      }
    };

        //  middle row check
  if ($('#3').text() === player) {
    if ($('#4').text() === player) {
      if ($('#5').text() === player) {
        alert(player + " wins, good job!");
        }
      }
    };
        //  bottom row check
  if ($('#6').text() === player) {
    if ($('#7').text() === player) {
      if ($('#8').text() === player) {
        alert(player + " wins, good job!");
        }
      }
    };

    //  diagnal check
  if ($('#0').text() === player) {
    if ($('#4').text() === player) {
      if ($('#8').text() === player) {
        alert(player + " wins, good job!");
        }
      }
    };
    //  diagnal check
  if ($('#2').text() === player) {
    if ($('#4').text() === player) {
      if ($('#6').text() === player) {
        alert(player + " wins, good job!");
        }
      }
    };

    if ($('#0').text() === player) {
      if ($('#3').text() === player) {
        if ($('#6').text() === player) {
          alert(player + " wins, good job!");
          }
        }
      };

          //  middle row check
    if ($('#1').text() === player) {
      if ($('#4').text() === player) {
        if ($('#7').text() === player) {
          alert(player + " wins, good job!");
          }
        }
      };
          //  bottom row check
    if ($('#2').text() === player) {
      if ($('#5').text() === player) {
        if ($('#8').text() === player) {
          alert(player + " wins, good job!");
        }
      }
    };
  };

  $("button").click(function(){
        $(`[data-cell]`).empty();
    });
});

// if ($('#3').text() === 'X') {
//   if ($('#4').text() === 'X') {
//     if ($('#5').text() === 'X') {
//       alert(oneWins);
//     }
//   }
// }
// };
// var checkVictory = function() {
//   //  top row check
//   if ($('#3').text() === 'O') {
//     if ($('#4').text() === 'O') {
//       if ($('#5').text() === 'O') {
//         alert(twoWins);
//       }
//     }
//   }
// };
  // //middle row check
  // var checkVictory = function() {};
  // top row check
  // if ($('#6').text() === 'X') {
  //   if ($('#7').text() === 'X') {
  //     if ($('#8').text() === 'X') {
  //       alert(oneWins);
  //     }
  //   }
  // }
  // };
  //
  // //bottom row check
  // var checkVictory = function() {};
  // top row check
  // if ($('#6').text() === 'O') {
  //   if ($('#7').text() === 'O') {
  //     if ($('#8').text() === 'O') {
  //       alert(oneWins);
  //     }
  //   }
  // }
  // };
