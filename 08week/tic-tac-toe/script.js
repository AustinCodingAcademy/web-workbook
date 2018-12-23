'use strict';

$(document).ready(function() {
  // Put app logic in here

  //listen for a click and put an 'X' in and empty space.
  //flip the  turn to "0"
  //check if it is a good click and if not ignore it
  //check for endgame
  //wire up the reset button

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
    if($(this).text()==""){
      $(this).text(turn);
      console.log($(this).data("cell"))
      endgame();
      if(turn=="X")
        {turn = "O";
      } else {
          turn = "X";
        }
    };
  })
  function endgame() {

    console.log("Did "+turn+" win?");
    let emptySpaces = 0;
    for(a=0;a<=8;a++){
      if($('div [data-cell="'+a+'"]').text()=="") {
        emptySpaces ++;
    };
    }

    if (emptySpaces == 0 ) {
      console.log("it's a tie");
    } else {
        console.log("the game is not over");
      }
  }
});

