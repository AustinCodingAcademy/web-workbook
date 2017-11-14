var dieChar = [
  "", "&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;",  "&#9861;"
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
  var threes = 0;
  var one = 0;
  var two = 0;
  var three = 0;
  var four = 0;
  var five = 0;
  var six = 0;



  document.getElementById("report").innerHTML = "";
  let diceHtml = document.getElementsByClassName("die");
  for (
    var dieVal = 1;
    dieVal < 7;
    dieVal++ // we set up a nested loop, first we check for all the 1s, then 2s, etc
  )
  {
    let howManyDice = 0;
    for (var die = 0; die < 5; die++)
    {
      if (dieVal == diceHtml[die].dataset.roll) {
        howManyDice++;
      }
  }

  if (howManyDice === 1) {
      if (dieVal === 1) {
        one = 1;
      }  if (dieVal === 2) {
        two = 1;
      }  if (dieVal === 3) {
        three = 1;
      }  if (dieVal === 4) {
        four = 1;
      }  if (dieVal === 5) {
        five = 1;
      }  if (dieVal === 6) {
        six = 1;
      }
    }
      if (howManyDice === 2) {
        pairs++;
      }
      if (howManyDice === 3) {
        threes++;
      }

      if (howManyDice === 2) {
      document.getElementById("report").innerHTML +=
        "There are a pair of " + dieVal + "s<br>";
    }

    else if (howManyDice === 3) {
      document.getElementById("report").innerHTML +=
        "There are three " + dieVal + "s<br>";
    }
     else if (howManyDice === 4) {
      document.getElementById("report").innerHTML +=
        "There are 4 " + dieVal + "s<br>";
    }
     else if (howManyDice === 5) {
      document.getElementById("report").innerHTML +=
        "Yacht!<br>";
    }
  }

  if (one === 1 && two === 1 && three === 1 && four === 1 && five === 1) {
    document.getElementById("report").innerHTML += "Small-Straight!<br>";
  }

   else if (two === 1 && three === 1 && four === 1 && five === 1 && six === 1) {
    document.getElementById("report").innerHTML += "Big-Straight!<br>";
  }

   else if (pairs === 1 && threes === 1) {
      document.getElementById("report").innerHTML += "Full House! <br>";
    }

   else if (pairs === 2) {
      document.getElementById("report").innerHTML += "Two Pair!<br>";
    }
}

report();
