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
  document.querySelector("#report").innerHTML = ""; // clear out the report box
  let diceHtml = document.querySelectorAll('.die'); // this puts all the individual die HTML elements in diceHtml
  
  let pair = 0;
  let triple = 0;
  let four = 0;
  let yacht = 0;
  let d1 = 0;
  let d2 = 0;
  let d3 = 0;
  let d4 = 0;
  let d5 = 0;
  let d6 = 0;
  
  for (let dieVal = 1; dieVal < 7; dieVal++) {  // we set up a nested loop, first we check for all the 1s, then 2s, etc
    let howManyDice = 0; // we zero out our counter
    for (let i = 0; i < 5; i++) {  // we create the inner loop that cycles through the rolled dice
      if (dieVal === Number(diceHtml[i].getAttribute('data-roll'))) {  // we check if the rolled die is equal to the one's we're counting
        howManyDice++; // if so, we add one to the count
      }
    }
    
    if (howManyDice === 1) {
      if (dieVal === 1) {
        d1++;
      } else if (dieVal === 2) {
        d2++;
      } else if (dieVal === 3) {
        d3++;
      } else if (dieVal === 4) {
        d4++;
      } else if (dieVal === 5) {
        d5++;
      } else if (dieVal === 6) {
        d6++;
      }
    }
    
    if (howManyDice === 2) { // we check after the counting is done if it is equal to '2'
      document.querySelector("#report").innerHTML += `There are a pair of ${dieVal}s<br>`;
      pair++;
      // if yes, we report a pair
    }
    if (howManyDice === 3) { // we check after the counting is done if it is equal to '3'
      document.querySelector("#report").innerHTML += `There are three ${dieVal}s<br>`;
      triple++;
      // if yes, we report a three of a kind
    }
    if (howManyDice === 4) { // we check after the counting is done if it is equal to '4'
      document.querySelector("#report").innerHTML += `There are four ${dieVal}s<br>`;
      four++;
      // if yes, we report four of a kind
    }
    if (howManyDice === 5) { // we check after the counting is done if it is equal to '5'
      document.querySelector("#report").innerHTML += `There are 5 ${dieVal}s YACHT!<br>`;
      yacht++;
      // if yes, we report a YACHT!
    }
  } 

  if (pair === 2) {
    document.querySelector("#report").innerHTML += 'Two-Pairs!';
  } 
  else if ((pair === 1) && (triple === 1)) {
    document.querySelector("#report").innerHTML += 'Full-House!';
  }
  if (d1 === 1 && d2 === 1 && d3 === 1 && d4 === 1 && d5 === 1) {
    document.querySelector("#report").innerHTML += 'Small-Straight!';
  } 
  else if (d2 === 1 && d3 === 1 && d4 === 1 && d5 === 1 && d6 === 1) {
    document.querySelector("#report").innerHTML += 'Big-Straight!';
  }

  
// two of dice have the same points, like 3 6 5 6 1 - called pair: example solved for you. Complete the other cases below:

// * three of dice have the same points, like 2 4 5 4 4 - called three;
// * four of dice have the same points, like 1 4 1 1 1 - called four;
// all five dice have the same points, like 2 2 2 2 2 - called yacht;
// two pairs at once, like 3 6 5 3 5 - called two-pairs;
// pair and three at once, like 1 6 6 1 6 - called full-house;
// sequence from 1 to 5, like 2 4 3 5 1 - called small-straight;
// sequence from 2 to 6, like 6 3 4 2 5 - called big-straight.
}

//
// report the results in the div with the ID 'report'.
// * HOW DO I REMOVE DUPLICATES?????
report();