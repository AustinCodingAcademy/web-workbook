var dieChar = [
  "",
  "&#9856;",
  "&#9857;",
  "&#9858;",
  "&#9859;",
  "&#9860;",
  "&#9861;"
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
  document.getElementById("report").innerHTML = "";
  let diceHtml = document.getElementsByClassName("die");
  for (
    var dieVal = 1; dieVal < 7; dieVal++ // we set up a nested loop, first we check for all the 1s, then 2s, etc
   ) {
    let howManyDice = 0;
    for (var die = 0; die < 5; die++) {
      if (dieVal == diceHtml[die].dataset.roll) {
        howManyDice++;
      }
    }

    {
      if (howManyDice === 2) {
        pairs++;
      }
      if (howManyDice === 3) {
        threes++;
      }
    }
    if (pairs === 1 && threes === 1) {
      document.getElementById("report").innerHTML += "Full House! <br>";
    }

    if (pairs === 2) {
      document.getElementById("report").innerHTML += "Two Pair!<br>";
    } else if (howManyDice === 2) {
      document.getElementById("report").innerHTML +=
        "There are a pair of " + dieVal + "s<br>";
    }
  }
}

report();
