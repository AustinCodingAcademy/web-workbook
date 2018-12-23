'use strict';

$(document).ready(function() {
  // Put app logic in here


  let turn = "X"; // Creates turn variable that writes "X" when used

  const winState = [ // lists use square brackets. This is a list that includes many lists
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


  //  Listens for a click and put "X" in empty space

  $(".row div").click(function() {
    // use "this" to ask about a spot that was clicked
    if($(this).text()==""){ // checks to make sure data cell is empty of content
      $(this).text(turn); // in jQuery the variable is put inside parentheses
    
      // use function to check if turn ended game in win or tie
      endgame();  
    
      // Flip the turn to "O"
      if(turn=="X") { // if the last click gave us "X"
        turn = "O";   // then following click should give us "O"
      } else {
        turn = "X";   // otherwise the next click should be "X"
      }
    };
  }) //end of click function

  function endgame() {   // checks for winner
    console.log("Did "+turn+" win?"); // checks how function runs in console. specifies which turn just happened
    let emptySpaces = 0; // variable that data cell are empty
    // loop through 9 possible data cells
    for(let a=0;a<=8;a++){ // starts with cell 0, adds 1 until ends with cell 8
      if($("div[data-cell='"+a+"']").text() == ""){ // html div called data-cell=" " so
        emptySpaces ++;
        // `div[data-cell="${a}"]`
      }; 
    }
    

    if ( emptySpaces == 0 ) {
      console.log("it's a tie");
    } else {
      console.log("the game is not over");
    }

    if (


    /* for winner need to create nested loop 
    one for each row/column/diagonal 
    then nested loop to check within the row/column/diagonal 
    for each individual data cell */

  }

  // Make reset button functional
});
