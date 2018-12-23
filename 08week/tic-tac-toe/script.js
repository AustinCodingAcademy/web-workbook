'use strict';

$(document).ready(function() {
  // Put app logic in here

  // Listen for a click and put an 'X' in an empty space

  // flip the turn to 'O'
  // check to make sure it's a good click and if not ignore it
  // check for an endgame
  // wire up the reset button

  let turn = "X";
  const winState = [
    // horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal
    [0, 4, 8],
    [2, 4, 6]
    ];


  $(".row div").click(function() {

    
    if($(this).text()==="") {
      $(this).text(turn);
      console.log($(this).data("cell"));

// Declares the turn
      if(turn=="X"){
        turn = "O";
      } else {
        turn = "X"
      }
    };
  })

//Checks for winner 
  function winner(){
    for(let i = 0; i < winState.length; i++){
      let xMoves = 0;
      let oMovws = 0;
      for(let y = 0; y < winState[i].length; y++){
        let position = winState[i][y];
        if($('#' + position).text() == 'X'){
          x++;
          if(xMoves == 3){
            $('#announce-winner').text('X wins!');
          } 
        }           
        else if($('#' + position).text() == 'O'){
          o++;
          if(oMoves== 3){
            $('#announce-winner').text('O wins!');
          }
        }
      }
    }
  }

  // Checks for tie
  function endgame(){

    console.log("Did" + " " + turn + " " + "win?");

    let emptySpaces = 0;
    for(let a=0;a<=8;a++){
      if($('div[data-cell="'+a+'"]').text()== ""){
         emptySpaces ++;
       };
       if (emptySpaces >= 1 ) {
        
        console.log("it is NOT a tie");
      } else {
    console.log("it is a tie.");
      } 
    }
  }

  //Checks for Winner
  
  
  
  $(`#clear`).click(function(){
    $(`.row div`).empty();
    $(`#annouce-winner`).empty();
    turn = "X";
  })

  endgame();
  winner();

 

});

/* 
$('.row div).on('click', function() {
  var currentPlayer = "player-x";
  if (!$(this).text("player-x")
    && !$(this).text("player-o") {
    $(this).text(currentPlayer);
    if (currentPlayer == "player-x")
      currentPlayer = "player-o";
    else
      currentPlayer = "player-x";
  }
} 
*/

/*
for var(var winIndex = 1; winIndex < 9; winIndex++){
  var selector = ".win-" + winIndex.toString();
  var x = $(select + ".player-x");
  var y = $(select + ".player-o");
  if (x.length == 3)
    // player x won
  if (y.length == 3)
    // player o won

  $('.board').addClass('winner-' + winIndex.toString());
}
*/




/* Loop each check 
inside the loop we need another loop that checks each individual square */