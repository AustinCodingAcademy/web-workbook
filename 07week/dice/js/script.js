let dieChar = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"]

function roll() {
  document.querySelector("#dice").innerHTML = "";
  for (let i = 0; i < 5; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    document.querySelector("#dice").innerHTML += `<span class="die" data-roll="${roll}">${dieChar[roll - 1]}</span>`;
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

  let pair = 0;
  let house = 0;
  let straight = [];
  let score = 0;
  for (var dieVal = 1; dieVal < 7; dieVal++) { // we set up a nested loop, first we check for all the 1s, then 2s, etc
    let howManyDice = 0; // we zero out our counter


    for (var die = 0; die < 5; die++) { // we create the inner loop that cycles through the rolled dice

      if (dieVal == diceHtml[die].dataset.roll) { // we check if the rolled die is equal to the one's we're counting
        howManyDice++; // if so, we add one to the count
        straight.push(diceHtml[die].getAttribute('data-roll'));
      }
    }
    if (howManyDice === 2) { // we check after the counting is done if it is equal to '2'
      document.getElementById("report").innerHTML += "There are a pair of " + dieVal + "s.  2 points.<br>";
      pair++;
      score = score + 2;
    } else if (howManyDice === 3) {
      document.getElementById("report").innerHTML += "There are three " + dieVal + "s. 5 points for a triple.<br>";
      house++;
      score = score + 5;
    } else if (howManyDice === 4) {
      document.getElementById("report").innerHTML += "There are four " + dieVal + "s.  8 points.<br>";
      score = score + 8;
    } else if (howManyDice === 5) {
      document.getElementById("report").innerHTML += "Wow!  You rolled a yacht of " + dieVal + "s.  10 points.<br>";
      score = score + 10;
    }
  }
  if (pair === 2) {
    document.getElementById("report").innerHTML += "This is two-pairs. Very lucky - 2 point bonus!<br>";
    score = score + 2;
  }
  if ((pair === 1) && (house === 1)) {
    document.getElementById("report").innerHTML += "This is full-house. Impressive - 3 point bonus!<br>";
    score = score + 3;
  }
  straight.sort();
  straight.toString();
  if (straight == "1,2,3,4,5") {
    document.getElementById("report").innerHTML += "This is a rare small-straight. 15 points.<br>";
    score = score + 15;
  }
  if (straight == "2,3,4,5,6") {
    document.getElementById("report").innerHTML += "This is a rare big-straight. 16 points.<br>";
    score = score + 16;
  }

  if (score > 9) {
    document.getElementById("report").style.border = "5px solid red";
  } else if (score > 4) {
    document.getElementById("report").style.border = "5px solid orange";
  } else {
    document.getElementById("report").style.border = "1px solid black";
  }

  if (score === 0) {
    document.getElementById("report").innerHTML += "<p><br>You have " + straight + ".<br> Your final score is " + score + ".  Better luck next time!</p>";
  } else {
    document.getElementById("report").innerHTML += "<p><br>You have " + straight + ".<br> Your final score is " + score + ".</p>";
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
