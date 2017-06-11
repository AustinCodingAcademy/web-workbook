'use strict';

// wait until all html is loaded then execute function contents
var player = false; // boolean value - integer: 0 / 1
var cssClasses = ['cross', 'circle']; // array holds possible css classes for the two players
// array holding all possible success paths
var successResults = [];
successResults[0] = [0,1,2]; // horz paths
successResults[1] = [3,4,5];
successResults[2] = [6,7,8];
successResults[3] = [0,4,6]; // verts
successResults[4] = [1,4,7];
successResults[5] = [2,5,8];
successResults[6] = [0,4,8]; // dia
successResults[7] = [2,4,6];
// when the html has fully loaded ...
$(document).ready(function() {
  showPlayer(); // display current player
  // register on click function to button to clear the field and update player display
   $('#clear').on('click', function() {
     $('.row > div').attr('class', 'empty');
     showPlayer();
   });
   // selector: search for elements with class 'row' and find all
   // div elements that are direct children
   $('.row > div').each(function() {
      var elem = $(this); // save the current cell in local variable
      elem.on('click', function() { // register onclick-handler on the cell
        if (!elem.hasClass('empty')) { // if it doesn't have - already selected
          // already selected
          alert('please select an empty cell');
          return; // leave the function
        } else { // cell still available ... not  clicked so far
          // set element's class attribute to player class(cross or circle)
          elem.attr('class', cssClasses[!player ? 0 : 1]);
          checkGameOver(); // game already over?
        }
      });
   });
});
// display the current player
function showPlayer() {
  $('#announce-player').html('Player: ' + (!player ? 1 : 2));
}

function checkGameOver() {
  // determine the current player's class (cross / circle)
  var playerCss = cssClasses[!player ? 0 : 1]; // use playerto determine css class index
  var won = false; // default to false - not won

  // loop over all possible success paths
  for (var i=0; i<successResults.length; i++) {
     var part = successResults[i]; // single path row/col/dia
     var checkSum = 0; // counts how many of the 3 cells have the player's class
     for (var k=0; k<part.length; k++) { // go through single result set i.e. [0,1,2]
       if ($('#d'+part[k]).hasClass(playerCss)) { // does the cell have the player's class?
         checkSum++; // yes -> increment variable
       }
     }
     if (checkSum===3) { // if all the path elements have the same player class - player won
       won = true; // set to true
       break; // leave loop as we only need one correct path
     }
  }
  if (won===true) { // if won display player who won
     displayWinner();
  } else { // otherwise switch the player
    player = !player;
    showPlayer(); // display the player
  }
}
// put some text into the #announce-winner element
function displayWinner() {
  $('#announce-winner').html('player: ' + cssClasses[!player ? 0 : 1] + ' won!');
}
  // Set up the game initially
  //     Create a game board
  //     Create a players (one "X" one "O")
  // Start the game loop (one turn per player)
  //     Render the board
  //     Ask for and validate the current player's coordinates
  //     If the game should end
  //         Display the proper victory or draw message
  //         Stop looping
  //     Else
  //         Switch to the next player and keep looping
