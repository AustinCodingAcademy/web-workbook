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
  let twopair = 0;
  let threepair = 0;
  var one = 0;
  var two = 0;
  var three = 0;
  var four = 0;
  var five = 0;
  var six = 0;
  for (var dieVal = 1; dieVal < 7; dieVal++) {  // we set up a nested loop, first we check for all the 1s, then 2s, etc
    let howManyDice = 0; // we zero out our counter
    for (var die = 0; die < 5; die++) {  // we create the inner loop that cycles through the rolled dice
      if (dieVal == diceHtml[die].dataset.roll) {  // we check if the rolled die is equal to the one's we're counting
        howManyDice++; // if so, we add one to the count
      }
    }

    if (howManyDice===1){
    if (dieVal===1) {
      one++;
    }
    else if (dieVal===2) {
      two++;
    }
    else if (dieVal===3) {
      three++;
    }
    else if (dieVal===4) {
      four++;
    }
    else if (dieVal===5) {
      five++;
    }
    else if (dieVal===6) {
      six++;
    }
    }




    if (howManyDice===2) {
       document.getElementById("report").innerHTML += "There is a pair of "+dieVal+"s<br>";
      twopair++;
    }

      if (howManyDice===3) {
       document.getElementById("report").innerHTML += "There is a three of "+dieVal+"s<br>";
        threepair++;
    }
     if (howManyDice===4) {
       document.getElementById("report").innerHTML += "There is a four of "+dieVal+"s<br>";
    }
      if (howManyDice===5) {
       document.getElementById("report").innerHTML += "There is a yacht of "+dieVal+"s<br>";
    }

  }
    if (twopair===2){
      document.getElementById("report").innerHTML += "There is a two pair<br>"
    }
     if (twopair===1 && threepair===1){
        document.getElementById("report").innerHTML += "There is a full house<br>"
      }
    if (one && two && three && four && five){
      document.getElementById("report").innerHTML += "There is a small straight<br>"
    }
  if (two && three && four && five && six){
      document.getElementById("report").innerHTML += "There is a big straight<br>"
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
