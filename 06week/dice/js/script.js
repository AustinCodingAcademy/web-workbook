var dieChar = ["", "&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"]

function roll() {
  document.getElementById("dice").innerHTML = "";
  for (a = 0; a < 5; a++) {
    var roll = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice").innerHTML += "<span  class='die' data-roll='" + roll + "'>" + dieChar[roll] + "</span>";
  }
  report();
}

roll();

function report() {
  document.getElementById("report").innerHTML = ""; // clear out the report box
  let diceHtml = document.getElementsByClassName('die'); // this puts all the individual die HTML elements in diceHtml
  let pairCounter = 0; // we're counting how many pairs occur
  let houseCounter = 0; // this will determine whether a three-of-a-kind occurs, as one is necessary for a full house

  for (var dieVal = 1; dieVal < 7; dieVal++) { // we set up a nested loop, first we check for all the 1s, then 2s, etc
    let howManyDice = 0; // we zero out our counter
    for (var die = 0; die < 5; die++) { // we create the inner loop that cycles through the rolled dice
      if (dieVal == diceHtml[die].dataset.roll) { // we check if the rolled die is equal to the one's we're counting
        howManyDice++; // if so, we add one to the count
      }
    }
    if (howManyDice === 2) { // we check after the counting is done if it is equal to '2'
      document.getElementById("report").innerHTML += "There are a pair of " + dieVal + "s<br>"; // if yes, we report a pair
      pairCounter++; // we're tracking how many pairs there are as they occur
    }
    if (howManyDice === 3) {
      document.getElementById("report").innerHTML += "There are three " + dieVal + "s<br>";
      houseCounter++;
    }
    if (howManyDice === 4) {
      document.getElementById("report").innerHTML += "There are four " + dieVal + "s<br>";
    }
    if (howManyDice === 5) {
      document.getElementById("report").innerHTML += "There are five " + dieVal + "s!<br>";
    }
  }
  if (pairCounter === 2) {
    document.getElementById("report").innerHTML += "There are two pairs<br>";
  }
  if (pairCounter === 1 && houseCounter === 1) {
    document.getElementById("report").innerHTML += "There is a full house!<br>";
  }

  let differentCounter = 0; // we'll check here to see whether or not all the dice have different values
  if (diceHtml[0].dataset.roll != diceHtml[1].dataset.roll && diceHtml[0].dataset.roll != diceHtml[2].dataset.roll && diceHtml[0].dataset.roll != diceHtml[3].dataset.roll && diceHtml[0].dataset.roll != diceHtml[4].dataset.roll && diceHtml[1].dataset.roll != diceHtml[2].dataset.roll && diceHtml[1].dataset.roll != diceHtml[3].dataset.roll && diceHtml[1].dataset.roll != diceHtml[4].dataset.roll && diceHtml[2].dataset.roll != diceHtml[3].dataset.roll && diceHtml[2].dataset.roll != diceHtml[4].dataset.roll && diceHtml[4].dataset.roll != diceHtml[3].dataset.roll) {
    differentCounter++;
  }

  // now if the dice have different values, this will check to see if they're consecutive
  if (differentCounter === 1 && diceHtml[0].dataset.roll != 6 && diceHtml[1].dataset.roll != 6 && diceHtml[2].dataset.roll != 6 && diceHtml[3].dataset.roll != 6 && diceHtml[4].dataset.roll != 6) {
    document.getElementById("report").innerHTML += "Small straight!<br>"
  } else if (differentCounter === 1 && diceHtml[0].dataset.roll != 1 && diceHtml[1].dataset.roll != 1 && diceHtml[2].dataset.roll != 1 && diceHtml[3].dataset.roll != 1 && diceHtml[4].dataset.roll != 1) {
    document.getElementById("report").innerHTML += "Big straight!<br>"
  } else if (differentCounter === 1) {
    document.getElementById("report").innerHTML += "That's unlucky<br>"
  }

}

// two of dice have the same points, like 3 6 5 6 1 - called pair: example solved for you. Complete the other cases below:
// three of dice have the same points, like 2 4 5 4 4 - called three;
// four of dice have the same points, like 1 4 1 1 1 - called four;
// all five dice have the same points, like 2 2 2 2 2 - called yacht;
// two pairs at once, like 3 6 5 3 5 - called two-pairs;
// pair and three at once, like 1 6 6 1 6 - called full-house;
// sequence from 1 to 5, like 2 4 3 5 1 - called small-straight;
// sequence from 2 to 6, like 6 3 4 2 5 - called big-straight.


//
// report the results in the div with the ID 'report'.
report();
