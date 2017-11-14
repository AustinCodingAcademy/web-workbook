var dieChar = [
  "", "&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"
];

function roll() {
  document.getElementById("dice").innerHTML = "";
  for (a = 0; a < 5; a++) {
    var roll = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice").innerHTML +=
      "<span  class='die' data-roll='" +
      roll +
      "'>" +
      dieChar[roll] +
      "</span>";
  }
  report();
}

roll();

function report() {
  var pairs = 0;
  var singlePair = 0;
  var threes = 0;
  var singleThree = 0;
  var one = 0;
  var two = 0;
  var three = 0;
  var four = 0;
  var five = 0;
  var six = 0;



  document.getElementById("report").innerHTML = "";
  let diceHtml = document.getElementsByClassName("die");
  for (
    var dieVal = 1; dieVal < 7; dieVal++
  ) {
    let howManyDice = 0;
    for (var die = 0; die < 5; die++) {
      if (dieVal == diceHtml[die].dataset.roll) {
        howManyDice++;
      }
    }

    if (howManyDice === 1) { // must set this so we don't iterate each on every dieVal
      if (dieVal === 1) {
        one = 1;
      }
      if (dieVal === 2) {
        two = 1;
      }
      if (dieVal === 3) {
        three = 1;
      }
      if (dieVal === 4) {
        four = 1;
      }
      if (dieVal === 5) {
        five = 1;
      }
      if (dieVal === 6) {
        six = 1;
      }
    }

    if (howManyDice === 2) { //iterate the number of pairs
      pairs++;
    }

    if (howManyDice === 3) {// iterate the number of threes (can this be better???)
      threes++;
    }

    // ******************** Make it so that if we get two-pair or full house, we don't also list pairs and threes
    if (pairs === 1 && singlePair === 0) { //only make singlePair=dieVal if it's still 0
      singlePair = dieVal;
    }

    if (threes === 1 && singleThree === 0) { //only make singleThree=dieVal if it's still 0
      singleThree = dieVal;
    }
    // *********************


    //************** OLD CODE
    // if (howManyDice === 2) {
    //   document.getElementById("report").innerHTML +=
    //     "There are a pair of " + dieVal + "s<br>";
    // }

    // else if (howManyDice === 3) {
    //   document.getElementById("report").innerHTML +=
    //     "There are three " + dieVal + "s<br>";
    // }
    //**************************


    else if (howManyDice === 4) {
      document.getElementById("report").innerHTML +=
        "There are 4 " + dieVal + "s<br>";
    } else if (howManyDice === 5) {
      document.getElementById("report").innerHTML +=
        "Yacht!<br>";
    }
  }


  // ********************Part of NOT reporting single pairs and threes if 2-pair or full house
  if (pairs < 2 && singlePair > 0 && threes === 0) {
    document.getElementById("report").innerHTML +=
      "There are a pair of " + singlePair + "s<br>";
  } else if (threes < 2 && singleThree > 0 && pairs === 0) {
    document.getElementById("report").innerHTML +=
      "There are a three " + singleThree + "s<br>";
  }
  // **********************************


  if (one === 1 && two === 1 && three === 1 && four === 1 && five === 1) {
    document.getElementById("report").innerHTML += "Small-Straight!<br>";
  } else if (two === 1 && three === 1 && four === 1 && five === 1 && six === 1) {
    document.getElementById("report").innerHTML += "Big-Straight!<br>";
  } else if (pairs === 1 && threes === 1) {
    document.getElementById("report").innerHTML += "Full House! <br>";
  } else if (pairs === 2) {
    document.getElementById("report").innerHTML += "Two Pair!<br>";
  }
}

report();
