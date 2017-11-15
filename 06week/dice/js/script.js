var dieChar = ["", "&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"]

function roll() {
  document.getElementById("dice").innerHTML = "";
  for (a=0; a<5; a++) {
    var roll = Math.floor(Math.random()*6)+1;
    document.getElementById("dice").innerHTML += "<span  class='die' data-roll='"+roll+"'>"+dieChar[roll]+"</span>";
  }
  report();
}

roll();

//////////////////////////////////////////////////////
// Add code here that uses loops and conditional statements
// to determine if any of the following cases are true:
//
function report() {
  document.getElementById("report").innerHTML = ""; // clear out the report box
  let diceHtml = document.getElementsByClassName('die'); // this puts all the individual die HTML elements in diceHtml
  var ones = 0;
  var twos = 0;
  var threes = 0;
  var fours = 0;
  var fives = 0;
  var sixes = 0;
  var pairs = 0;
  var triples = 0;
  for (var dieVal = 1; dieVal < 7; dieVal++) {  // we set up a nested loop, first we check for all the 1s, then 2s, etc
    let howManyDice = 0; // we zero out our counter
    for (var die = 0; die < 5; die++) {  // we create the inner loop that cycles through the rolled dice
      if (dieVal == diceHtml[die].dataset.roll) {  // we check if the rolled die is equal to the one's we're counting
        howManyDice++; // if so, we add one to the count
      }
    }

    if (howManyDice===1) {
      if (dieVal===1) {
        ones++;
      } else if (dieVal===2) {
        twos++;
      } else if (dieVal===3) {
        threes++;
      } else if (dieVal===4) {
        fours++;
      } else if (dieVal===5) {
        fives++;
      } else if (dieVal===6) {
        sixes++;
      }
    }
    if (howManyDice===2) { // we check after the counting is done if it is equal to '2'
      pairs++;
      document.getElementById("report").innerHTML += "There are a pair of "+dieVal+"'s<br>";// if yes, we report a pair
    } else if (howManyDice===3) {
      triples++;
      document.getElementById("report").innerHTML += "There are three "+dieVal+"'s<br>";
    } else if (howManyDice===4) {
      document.getElementById("report").innerHTML += "There are four "+dieVal+"'s<br>";
    } else if (howManyDice===5) {
      document.getElementById("report").innerHTML += "Yachtzee! You got all die to "+dieVal+"<br>";
    }
  }
  console.log(ones, twos, threes, fours, fives, sixes);
  if (pairs===2) {
      document.getElementById("report").innerHTML += "You got two pair!<br>";
    }
  if (pairs && triples) {
    document.getElementById("report").innerHTML += "You got a full house!<br>";
  }
  if (ones && twos && threes && fours && fives) {
    document.getElementById("report").innerHTML += "You got a small straight!<br>";
  }
  if (twos && threes && fours && fives && sixes) {
    document.getElementById("report").innerHTML += "You got a large straight!<br>";
  }


// two of dice have the same points, like 3 6 5 6 1 - called pair: example solved for you. Complete the other cases below:

// three of dice have the same points, like 2 4 5 4 4 - called three;
// four of dice have the same points, like 1 4 1 1 1 - called four;
// all five dice have the same points, like 2 2 2 2 2 - called yacht;
// two pairs at once, like 3 6 5 3 5 - called two-pairs;
// pair and three at once, like 1 6 6 1 6 - called full-house;
// sequence from 1 to 5, like 2 4 3 5 1 - called small-straight;
// sequence from 2 to 6, like 6 3 4 2 5 - called big-straight.
}

//
// report the results in the div with the ID 'report'.
report();
