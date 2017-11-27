var dieChar = [
  "",
  "&#9856;",
  "&#9857;",
  "&#9858;",
  "&#9859;",
  "&#9860;",
  "&#9861;"
]

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

  var twos = 0;
  var threes = 0;
  var straight = [];
  let one = 0
  let two = 0
  let three = 0
  let four = 0
  let five = 0
  let six = 0

  for (var dieVal = 1; dieVal < 7; dieVal++) { // we set up a nested loop, first we check for all the 1s, then 2s, etc
    let howManyDice = 0; // we zero out our counter
    for (var die = 0; die < 5; die++) { // we create the inner loop that cycles through the rolled dice
      if (dieVal == diceHtml[die].dataset.roll) { // we check if the rolled die is equal to the one's we're counting
        howManyDice++; // if so, we add one to the count
      }

    }

    if (howManyDice === 1) {
      straight.push(dieVal);
    } else if (howManyDice === 2) { // two of dice have the same points
      twos++;
      document.getElementById("report").innerHTML += "There are a pair of " + dieVal + "s<br>"; // if yes, we report a pair
    } else if (howManyDice === 3) { // three of dice have the same points
      threes++;
      document.getElementById("report").innerHTML += "There are three " + dieVal + "s<br>";
    } else if (howManyDice === 4) { // four of dice have the same points
      document.getElementById("report").innerHTML += "There are four " + dieVal + "s<br>";
    } else if (howManyDice === 5) { // all five dice have the same points
      document.getElementById("report").innerHTML += "i'm on a yacht!!!";
    }
  }

  if (twos === 1 && threes === 1) { //pair and threes at once, full house
    document.getElementById("report").innerHTML += "full house";
  }

  if (twos === 2) { //two pairs at once
    document.getElementById("report").innerHTML += "two pairs";
  }

  if (straight.length === 5) {
    if (straight[4] !== 6) { //small straight
      document.getElementById("report").innerHTML += "small-straight";
    } else if (straight[0] === 2) { //large straight
      document.getElementById("report").innerHTML += "big-straight";
    }
  }
}

//
// report the results in the div with the ID 'report'.
report();
