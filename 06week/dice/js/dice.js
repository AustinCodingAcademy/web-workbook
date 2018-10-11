let dieChar = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"]

function roll() {
  document.querySelector("#dice").innerHTML = "";
  for (let i = 0; i < 5; i++) {
    let roll = Math.floor(Math.random() * 2) + 1;
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
  var oneCount = 0
  var twoCount = 0
  var threeCount = 0
  var fourCount = 0
  var fiveCount = 0
  var sixCount = 0
  var pairCount = 0
  var tripletCount = 0

  document.querySelector("#report").innerHTML = ""; // clear out the report box
  let diceHtml = document.querySelectorAll('.die'); // this puts all the individual die HTML elements in diceHtml

  for (let dieVal = 1; dieVal < 7; dieVal++) { // we set up a nested loop, first we check for all the 1s, then 2s, etc
    
    let howManyDice = 0; // we zero out our counter
    for (let i = 0; i < 5; i++) { // we create the inner loop that cycles through the rolled dice
      if (dieVal === Number(diceHtml[i].getAttribute('data-roll'))) { // we check if the rolled die is equal to the one's we're counting
        howManyDice++;
        switch (dieVal) {
          case 1:
            oneCount++;
            break;
          case 2:
            twoCount++;
            break;
          case 3:
            threeCount++;
            break;
          case 4:
            fourCount++;
            break;
          case 5:
            fiveCount++;
            break;
          case 6:
            sixCount++;
            break;

        } // if so, we add one to the count
      }

    }

    // PAIR
    if (howManyDice === 2) { // we check after the counting is done if it is equal to '2'
      document.querySelector("#report").innerHTML += `There are a pair of ${dieVal}s<br>`; // if yes, we report a pair"
      pairCount++;
      if (pairCount === 2) {
        document.querySelector("#report").innerHTML += `Two Pair<br>`;
      }
      // FULL HOUSE
      if (tripletCount === 1) {
        document.querySelector("#report").innerHTML += `Full House<br>`;

      }
    }

    // THREE OF A KIND
    if (howManyDice === 3) { // we check after the counting is done if it is equal to '3'
      document.querySelector("#report").innerHTML += `There are three of ${dieVal}s<br>`;
      tripletCount++; // if yes, we report three of a kind
      if (pairCount === 1) {
        document.querySelector("#report").innerHTML += `Two Pair<br>`;
      }
    }

    // FOUR OF A KIND
    if (howManyDice === 4) { // we check after the counting is done if it is equal to '4'
      document.querySelector("#report").innerHTML += `There are four of ${dieVal}s<br>`; // if yes, we report four of a kind
    }

    // YACHTZEE
    if (howManyDice === 5) { // we check after the counting is done if it is equal to '5'
      document.querySelector("#report").innerHTML += `There are five of ${dieVal}s<br>`; // if yes, we report five of a kind
    }

    
  }
  
  // SMALL STRAIGHT
  if (oneCount === 1 &&
    twoCount === 1 &&
    threeCount === 1 &&
    fourCount === 1 &&
    fiveCount === 1 ) {
    document.querySelector("#report").innerHTML += `Small Straight`;
    
  }

  // BIG STRAIGHT
  if (twoCount === 1 &&
    threeCount === 1 &&
    fourCount === 1 &&
    fiveCount === 1 && 
    sixCount === 1) {
      document.querySelector("#report").innerHTML += `Big Straight`;
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