"use strict";

let dieChar = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"]

function roll() {
  document.querySelector("#dice").innerHTML = "";
  var one = 0;
  var two = 0;
  var three = 0;
  var four = 0;
  var five = 0;
  var six = 0;
  for (let i = 0; i < 5; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;

    if (roll == 1) {
      one += 1;
      console.log("ONE");
    }
    if (roll == 2) {
      two += 1;
      console.log("TWO");
    }
    if (roll == 3) {
      three += 1;
      console.log("THREE");
    }
    if (roll == 4) {
      four += 1;
      console.log("FOUR");
    }
    if (roll == 5) {
      five += 1;
      console.log("FIVE");
    }
    if (roll == 6) {
      six += 1;
      console.log("SIX");
    }
    document.querySelector("#dice").innerHTML += `<span class="die" data-roll="${roll}">${dieChar[roll - 1]}</span>`;

  }
  report();
  checkForStraight();

  function checkForStraight() {
    console.log('checkForStraight ran');
    if ((one == 1) && (two == 1) && (three == 1) && (four == 1) && (five == 1)) {
      document.querySelector("#report").innerHTML += `BOI YOU GOT A SMALL SKRATE!`;
      console.log('small str');
    }


    if ((two == 1) && (three == 1) && (four == 1) && (five == 1) && (six == 1)) {
      document.querySelector("#report").innerHTML += `BOI YOU GOT A BIGG SKRATE!`;
      console.log('big str');
    }
    console.log('checkForStraight ended');
  }
}

roll();

function report() {
  document.querySelector("#report").innerHTML = ""; // clear out the report box
  let diceHtml = document.querySelectorAll('.die'); // this puts all the individual die HTML elements in diceHtml
  var pairs = 0
  var threes = 0
  var fours = 0
  for (let dieVal = 1; dieVal < 7; dieVal++) {  // we set up a nested loop, first we check for all the 1s, then 2s, etc
    let howManyDice = 0; // we zero out our counter
    for (let i = 0; i < 5; i++) {  // we create the inner loop that cycles through the rolled dice

      if (dieVal === Number(diceHtml[i].getAttribute('data-roll'))) {  // we check if the rolled die is equal to the one's we're counting
        howManyDice++; // if so, we add one to the count
      }

    }

    if (howManyDice === 2) { // we check after the counting is done if it is equal to '2'
      document.querySelector("#report").innerHTML += `There are a pair of ${dieVal}s<br>`;  // if yes, we report a pair
      pairs += 1;

    }
    if (howManyDice === 3) { // we check after the counting is done if it is equal to '3'
      document.querySelector("#report").innerHTML += `There are three ${dieVal}s<br>`;  // if yes, we report a pair
      threes += 1;
    }
    if (howManyDice === 4) { // we check after the counting is done if it is equal to '4'
      document.querySelector("#report").innerHTML += `There are four ${dieVal}s<br>`;  // if yes, we report a pair
    }
    if (howManyDice === 5) { // we check after the counting is done if it is equal to '5'
      document.querySelector("#report").innerHTML += `There are five ${dieVal}s<br>. You got a yacht boi`;  // if yes, we report a pair
    }
    if ((pairs == 1) && (threes == 1)) { // we check after the counting is done if it is equal to '6'
      document.querySelector("#report").innerHTML += `You got a pair and a triple. You a plare. Thats a full-house plare.`;  // if yes, we report a pair
      pairs = 0;
      threes = 0;
    }
    if (pairs == 2) { // we check after the counting is done if it is equal to '2'
      document.querySelector("#report").innerHTML += `You got two pairs. That's called a two-pair, plare.`;
      pairs = 0; // if yes, we report a pair
    }




}

// DONE two of dice have the same points, like 3 6 5 6 1 - called pair: example solved for you. Complete the other cases below:
// DONE three of dice have the same points, like 2 4 5 4 4 - called three;
// DONE four of dice have the same points, like 1 4 1 1 1 - called four;
// DONE all five dice have the same points, like 2 2 2 2 2 - called yacht;
// DONE two pairs at once, like 3 6 5 3 5 - called two-pairs;
// DONE pair and three at once, like 1 6 6 1 6 - called full-house;
// sequence from 1 to 5, like 2 4 3 5 1 - called small-straight;
// sequence from 2 to 6, like 6 3 4 2 5 - called big-straight.
}

//
// report the results in the div with the ID 'report'.
report();
