'use strict';

$(document).ready(function() {

// You may adjust the number of rings used by changing ringCount & adding more divs to each peg.
var ringCount = 4;

var ringsPlus1 = ringCount + 1;
var oldPeg = null;
var solved = false;
var moveCount = 0;
// The [0] element of each peg represents the value of its highest ring.
// It is used to compare the sizes of the tallest rings to determine legal moves.
// If a peg has no rings, then [0] is set to ringCount + 1, so that any ring may be added to it.
var status = [
  [1],
  [ringsPlus1],
  [ringsPlus1]
]
for (var i=1; i<=ringCount; i++) {
  status[0][i] = ringsPlus1 - i;
}
changeMessage("Good Luck. A perfect game is "+(Math.pow(2,ringCount)-1)+" moves.");

function changeMessage(message) {
  document.getElementById('winner').innerHTML = message;
}

// Function not defined error without using window
window.move = function move(newPeg) {
  switch (true) {
    // Was an empty peg clicked first?
    case ((status[newPeg][0] == ringsPlus1) && (oldPeg == null)):
      // Do nothing
      break;
    // is this the first click?
    case (oldPeg == null):
      oldPeg = newPeg;
      // Is player starting a new game?
      if (solved) {
        moveCount = 0;
        solved = false;
        changeMessage("Good Luck. A perfect game is "+(Math.pow(2,ringCount)-1)+" moves.");
      }
      console.log("1st move: " + status);
      break;
    // was the same peg clicked twice?
    case (oldPeg == newPeg):
      changeMessage("You clicked the same peg twice.");
      oldPeg = null;
      break;
    // is it an illegal move?
    case (status[oldPeg][0] > status[newPeg][0]):
      changeMessage("That is an illegal move.");
      oldPeg = null;
      break;
    // legal move
    default:
      // Flip the rings in the HTML
      moveCount++;
      changeMessage("Move Count: "+moveCount);
      var oldDiv = status[oldPeg].length - 1;
      var newDiv = status[newPeg].length;
      document.getElementById("peg"+oldPeg+"-Ring"+oldDiv).setAttribute("data-weight", 0);
      document.getElementById("peg"+newPeg+"-Ring"+newDiv).setAttribute("data-weight", status[oldPeg][0]);
      // Flip the rings in the array
      var ring = status[oldPeg].pop();
      status[newPeg].push(ring);
      // Reset the [0] values
      status[newPeg][0] = status[newPeg][status[newPeg].length-1];
      if (status[oldPeg].length > 1) {
        status[oldPeg][0] = status[oldPeg][status[oldPeg].length-1];
      }
      else {
        status[oldPeg][0] = ringsPlus1;
      };
      // Check for win
      if ((status[1].length == ringsPlus1) || (status[2].length == ringsPlus1)) {
        solved = true;
        changeMessage("CONGRATULATIONS! You won in "+moveCount+" moves.");
      };
      oldPeg = null;
  }
}
});
