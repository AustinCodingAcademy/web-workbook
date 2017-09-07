'use strict';

$(document).ready(function() {

  let cell = $('[data-cell]');
  let player = 1;
  let win = false;
  let totalMoves = 0


  $('[data-cell]').on('click', function(){
    clickEvent($(this));
    gameLogic();
  });

  function clickEvent(el){
    if(!$(el).text()){
      if(player === 1){
        $(el).text('X');
        player = 2;
      } else {
        $(el).text('O');
        player = 1;
      }
    }
    totalMoves++;
  }

  function gameLogic(){
    if($(cell[0]).text() === 'X' && $(cell[1]).text() === 'X' && $(cell[2]).text() === 'X'){
      $('#announce-winner').text('Player 1 Wins');
      win = true;
    } else if($(cell[0]).text() === 'O' && $(cell[1]).text() === 'O' && $(cell[2]).text() === 'O'){
      $('#announce-winner').text('Player 2 Wins');
      win = true;
    }

    if($(cell[3]).text() === 'X' && $(cell[4]).text() === 'X' && $(cell[5]).text() === 'X'){
      $('#announce-winner').text('Player 1 Wins');
      win = true;
    } else if($(cell[3]).text() === 'O' && $(cell[4]).text() === 'O' && $(cell[5]).text() === 'O'){
      $('#announce-winner').text('Player 2 Wins');
      win = true;
    }

    if($(cell[6]).text() === 'X' && $(cell[7]).text() === 'X' && $(cell[8]).text() === 'X'){
      $('#announce-winner').text('Player 1 Wins');
      win = true;
    } else if($(cell[6]).text() === 'O' && $(cell[7]).text() === 'O' && $(cell[8]).text() === 'O'){
      $('#announce-winner').text('Player 2 Wins');
      win = true;
    }

    if($(cell[0]).text() === 'X' && $(cell[3]).text() === 'X' && $(cell[6]).text() === 'X'){
      $('#announce-winner').text('Player 1 Wins');
      win = true;
    } else if($(cell[0]).text() === 'O' && $(cell[3]).text() === 'O' && $(cell[6]).text() === 'O'){
      $('#announce-winner').text('Player 2 Wins');
      win = true;
    }

    if($(cell[1]).text() === 'X' && $(cell[4]).text() === 'X' && $(cell[7]).text() === 'X'){
      $('#announce-winner').text('Player 1 Wins');
      win = true;
    } if($(cell[1]).text() === 'O' && $(cell[4]).text() === 'O' && $(cell[7]).text() === 'O'){
      $('#announce-winner').text('Player 2 Wins');
      win = true;
    }

    if($(cell[2]).text() === 'X' && $(cell[5]).text() === 'X' && $(cell[8]).text() === 'X'){
      $('#announce-winner').text('Player 1 Wins');
      win = true;
    } else if($(cell[2]).text() === 'O' && $(cell[5]).text() === 'O' && $(cell[8]).text() === 'O'){
      $('#announce-winner').text('Player 2 Wins');
      win = true;
    }

    if($(cell[0]).text() === 'X' && $(cell[4]).text() === 'X' && $(cell[8]).text() === 'X'){
      $('#announce-winner').text('Player 1 Wins');
      win = true;
    } else if($(cell[0]).text() === 'O' && $(cell[4]).text() === 'O' && $(cell[8]).text() === 'O'){
      $('#announce-winner').text('Player 2 Wins');
      win = true;
    }

    if($(cell[2]).text() === 'X' && $(cell[4]).text() === 'X' && $(cell[6]).text() === 'X'){
      $('#announce-winner').text('Player 1 Wins');
      win = true;
    } else if($(cell[2]).text() === 'O' && $(cell[4]).text() === 'O' && $(cell[6]).text() === 'O'){
      $('#announce-winner').text('Player 2 Wins');
      win = true;
    }

    if(win){
      $('[data-cell]').off('click', clickEvent());
    }

    if(!win && totalMoves > 8){
      $('#announce-winner').text('TIE!');
      $('[data-cell]').off('click', clickEvent());
    }
  }

  $('#clear').click(function(){
    player = 1;
    totalMoves = 0;
    win = false;
    $('[data-cell]').on('click', function(){
      clickEvent($(this));
      gameLogic();
    });
    $('[data-cell]').each(function(){
      $(this).text('');
    });
    $('#announce-winner').text('');
  });
});





/*

    FUTURE LOGIC

*/

//pushIntoArray($(this).data('cell'), playerOneMoves);

// let playerOneMoves = [[],[],[],[],[],[],[],[]];
// let playerTwoMoves = [[],[],[],[],[],[],[],[]];

// let gameOutcomes = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ];

// for(let i = 0; i <= 8; i++){
//   if(_.isEqual(playerOneMoves[i], gameOutcomes[i])){
//      alert("WIN");
//   }
//
//   console.log(_.isEqual(playerOneMoves[i], gameOutcomes[i]));
// }

/*
function pushIntoArray(a, player){
  switch(a){
    case(0):
      player[0].push(a);
      player[3].push(a);
      player[6].push(a);
      break;
    case(1):
      player[0].push(a);
      player[4].push(a);
      break;
    case(2):
      player[0].push(a);
      player[5].push(a);
      player[7].push(a);
      break;
    case(3):
      player[1].push(a);
      player[3].push(a);
      break;
    case(4):
      player[1].push(a);
      player[4].push(a);
      player[6].push(a);
      break;
    case(5):
      player[1].push(a);
      player[5].push(a);
      break;
    case(6):
      player[2].push(a);
      player[3].push(a);
      player[7].push(a);
      break;
    case(7):
      player[2].push(a);
      player[4].push(a);
      break;
    case(8):
      player[2].push(a);
      player[5].push(a);
      player[6].push(a);
      break;
    default:
      console.log('NOThING');
  }
}
*/
