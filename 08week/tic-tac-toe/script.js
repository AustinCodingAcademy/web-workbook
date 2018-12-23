'use strict';

$(document).ready(function() {
  // Put app logic in here

  // listen for a click and put aj 'X' in an empty space

  // flip the turn to 'O'
  // check if it's a good click, if not ignore it
  // check for an end statement(is it a win or a tie.)
  // wire up reset button

  let turn = "X";
  let winState = [
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
      if(turn=="X"){
        turn = "O";
      } else {
        turn = "X";
      }
    };
  })
  function endgame() {
    console.log("Did " +turn+" win?");
    let emptySpaces = 0;
    for(let a=0;a<=8;a++){
      if($('div[data-cell="'+a+'"]').text() == ""){
        emptySpaces ++;
      };
    }
  }

});