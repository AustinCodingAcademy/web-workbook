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
  let pairs = [];
  let toak = null;
  let foak = null;
  let yacht = null;
  let diceArray = [0,0,0,0,0];
  document.querySelector("#report").innerHTML = ""; // clear out the report box
  let diceHtml = document.querySelectorAll('.die'); // this puts all the individual die HTML elements in diceHtml
  for (let dieVal = 1; dieVal < 7; dieVal++) {  // we set up a nested loop, first we check for all the 1s, then 2s, etc
    let howManyDice = 0; // we zero out our counter
    for (let i = 0; i < 5; i++) {  // we create the inner loop that cycles through the rolled dice
      if (dieVal === Number(diceHtml[i].getAttribute('data-roll'))) {  // we check if the rolled die is equal to the one's we're counting
        howManyDice++; // if so, we add one to the count
        diceArray[dieVal - 1] = howManyDice;
      }
    }
  }
  let straightFlag = true;
  for (let i = 0; i < diceArray.length; i++) {
    if (diceArray[i] !== 1 && i !== 0) {
      straightFlag = false;
    }
    if (diceArray[i] === 2) {
      pairs.push(i + 1);
    } else if (diceArray[i] === 3) {
      toak = i + 1;
    } else if (diceArray[i] === 4) {
      foak = i + 1;
    } else if (diceArray[i] === 5) {
      yacht = i + 1;
    }
  }
  if (pairs.length > 0) {
    if (pairs.length > 1) {
      document.querySelector("#report").innerHTML += `There are two pairs<br>`;
    } else if (toak) {
      document.querySelector("#report").innerHTML += `There is a full house<br>`;
    } else {
      document.querySelector("#report").innerHTML += `There is a pair of ${pairs[0]}s<br>`;
    }
  }
  if (toak) {
    if (pairs.length === 0) {
      document.querySelector("#report").innerHTML += `There are three ${toak}s<br>`;
    }
  }
  if (foak) {
    document.querySelector("#report").innerHTML += `There are four ${foak}s<br>`;
  }
  if (yacht) {
    document.querySelector("#report").innerHTML += `There is a yacht of ${yacht}s<br>`;
  }

  if (straightFlag) {
    if (diceArray.sort()[0] === 1) {
      document.querySelector("#report").innerHTML += `There is a small straight<br>`;
    } else {
      document.querySelector("#report").innerHTML += `There is a large straight<br>`;
    }
  }
}
// report the results in the div with the ID 'report'.
report();
