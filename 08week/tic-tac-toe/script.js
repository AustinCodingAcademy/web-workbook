//'use strict';

$(document).ready(function() {
  // Put app logic in here
  // let turn = true;
  // let x = '<i class="fa fa-circle-o fa-4x" aria-hidden="true"></i>';
  // let o = '<i class="fa fa-times fa-4x" aria-hidden="true"></i>';
  
  // check for endgame
  // wire up the reset button
  const winState = [
    //horizontal
    [0,1,2],
    [3,4,5],
    [6,7,8],
    //vertical
    [0,3,6],
    [1,4,7],
    [2,5,8],
    //diagonal
    [0,4,8],
    [2,4,6]
  ];
  let turn = "X";
  let clicks = 0;
  // listen for a click and put x in empty space
  $('.row div').click(function(){
    clicks++;
    // check if it's a good click and if not ignore it
    if($(this).text() == 0) {
      $(this).text(turn);
    //  console.log($(this).data('cell'));
    //  checkTie();
      checkWin();
      if(turn=="X"){
        // flip the turn to o
        turn="O";
      } else {
        turn="X";
      }
    }
  });

  // function checkTie(){
  //   if(checkWin() == false && clicks == 9){
  //     console.log('tie');
  //   }
  // }
  function checkWin(){
    for(let i = 0; i < winState.length; i++){
      let x = 0;
      let o = 0;
      for(let j = 0; j < winState[i].length; j++){
        let dataPoint = winState[i][j];
        if($('#' + dataPoint).text() == 'X'){
          x++;
          if(x == 3){
            $('#announce-winner').text('X wins!');
          } 
        }           
        else if($('#' + dataPoint).text() == 'O'){
          o++;
          if(o == 3){
            $('#announce-winner').text('O wins!');
          }
        }
      }
    }
  }

  // function tieGame(){
  //   let emptySpaces = 0;
  //   for(let a=0; a<=8; a++) {
  //     if($('div[data-cell="'+a+'"]').text() == 0){
  //       emptySpaces++;
  //     };
  //   }
  //   if(emptySpaces == 0){
  //     $('#announce-winner').text() == "It's a tie!";
  //   } else {
  //     console.log("The game is not over!");
  //   }
  // }

  // clear board and reset turn
  $('#clear').click(function(){
    $('.row div').empty();
    $('#announce-winner').empty();
    turn="X";
    clicks = 0;
  });

});
