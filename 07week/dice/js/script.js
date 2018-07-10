const dieChar = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"];

function roll() {
  document.querySelector("#dice").innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    document.querySelector("#dice").innerHTML += `<span class="die" data-roll="${roll}">${dieChar[roll - 1]}</span>`;
  }
  report();
}


//////////////////////////////////////////////////////
// Add code here that uses loops and conditional statements
// to determine if any of the following cases are true:
//

function report() {
  document.querySelector("#report").innerHTML = ""; // clear out the report box

  const diceHtml = document.querySelectorAll('.die'); // this puts all the individual die HTML elements in diceHtml

  const diceArray = [0,0,0,0,0,0];
  const pairs = [];
  const threes = [];
  let smallStraight = true;
  let bigStraight = true;

  for (let i = 0; i < diceHtml.length; i++) {
  	const num = Number(diceHtml[i].getAttribute('data-roll'));
    diceArray[num - 1]++;
  }

  if (diceArray[0] != 0) bigStraight = false;
  if (diceArray[5] != 0) smallStraight = false;

  for (let i = 0; i < diceArray.length; i++) {
  	if (smallStraight && (i != 5 && diceArray[i] != 1)) smallStraight = false;
    if (bigStraight && (i != 0 && diceArray[i] != 1)) bigStraight = false;
  	if (diceArray[i] === 2) {
    	document.querySelector("#report").innerHTML += `There are a pair of ${i + 1}s<br>`;
      pairs.push(i + 1);
    } else if (diceArray[i] === 3) {
    	document.querySelector("#report").innerHTML += `There are a three of ${i + 1}s<br>`;
      threes.push(i + 1);
    } else if (diceArray[i] === 4) {
    	document.querySelector("#report").innerHTML += `There are a four of ${i + 1}s<br>`;
    } else if (diceArray[i] === 5) {
    	document.querySelector("#report").innerHTML += `There are a yacht of ${i + 1}s<br>`;
    }
  }

  if (pairs.length === 2) {
  	document.querySelector("#report").innerHTML += `There are 2 pairs`;
  } else if (pairs.length === 1 && threes.length === 1) {
  	document.querySelector("#report").innerHTML += `There is a full-house`;
  }

  if (smallStraight) document.querySelector("#report").innerHTML += `There is a small straight`;



// two of dice have the same points, like 3 6 5 6 1 - called pair: example solved for you. Complete the other cases below:
/*     if (howManyDice === 2) { // we check after the counting is done if it is equal to '2'
      document.querySelector("#report").innerHTML += `There are a pair of ${dieVal}s<br>`;  // if yes, we report a pair
    } */
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
