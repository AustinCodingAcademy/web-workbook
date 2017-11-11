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
  var pair = 0;
  var three = 0;
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
    //
    if (howManyDice===1) {
      if(dieVal===1) {
        one=true;
      }
      else if(dieVal===2) {
        two=true;
      }
      else if(dieVal===3) {
        three=true;
      }
      else if(dieVal===4) {
        four=true;
      }
      else if(dieVal===5) {
        five=true;
      }
      else if(dieVal===6) {
        six=true;
      }
    }
    //
    if (howManyDice===2) { // we check after the counting is done if it is equal to '2'
      pair++;
      document.getElementById("report").innerHTML += "There are a pair of "+dieVal+"s<br>";  // if yes, we report a pair
    }
// two of dice have the same points, like 3 6 5 6 1 - called pair: example solved for you. Complete the other cases below:
//
    if (howManyDice===3) {
       three++;
       document.getElementById('report').innerHTML += 'There are three '+dieVal+'s<br>';
     }
// three of dice have the same points, like 2 4 5 4 4 - called three;
       if (howManyDice===4) {
       document.getElementById('report').innerHTML += 'There are four '+dieVal+'s<br>';
     }
// four of dice have the same points, like 1 4 1 1 1 - called four;
//
    if (howManyDice===5) {
      document.getElementById('report').innerHTML += 'YACHT!!';
    }
  }
// all five dice have the same points, like 2 2 2 2 2 - called yacht;
//
    if (pair===2) {
      document.getElementById('report').innerHTML += 'There are two pairs<br>';
    }
// two pairs at once, like 3 6 5 3 5 - called two-pairs;
    if (pair===1 && three===1) {
      document.getElementById('report').innerHTML += 'FULL HOUSE<br>';
    }
// pair and three at once, like 1 6 6 1 6 - called full-house;
    if(one===true && two===true && three===true && four===true && five===true) {
      document.getElementById('report').innerHTML += 'Small Straight<br>';
    }
// sequence from 1 to 5, like 2 4 3 5 1 - called small-straight;
    if(two===true && three===true && four===true && five===true && six===true) {
      document.getElementById('report').innerHTML += 'Big Straight<br>';
    }
// sequence from 2 to 6, like 6 3 4 2 5 - called big-straight.
}

//
// report the results in the div with the ID 'report'.
report();
