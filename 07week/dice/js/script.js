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

  const diceHtml = document.querySelectorAll('.die'); // this puts all the individual die HTML elements in diceHtml as an array

  const diceArray = [0,0,0,0,0,0];
  const pairs = []; // array filled with die values of detected pairs
  const threes = []; // array filled with die values of detected triplets
  let smallStraight = true;
  let bigStraight = true;
  // loops through dice html to get data-roll attribute, then plugs the # of each possible roll into diceArray
  for (let i = 0; i < diceHtml.length; i++) {
    // num represents the number value within each individual die
  	const rollnum = Number(diceHtml[i].getAttribute('data-roll'));
    // pushing the count of each possible roll number into diceArray
    diceArray[rollnum - 1]++;
  }

  if (diceArray[0] != 0) bigStraight = false; // if the numbers of 1s rolled does not equal 0, bigStraight is false.
  if (diceArray[5] != 0) smallStraight = false; // if the number of 6s rolled does not equal 0, smallStraight is false.
  // "i" here represents the position in the diceArray which is an Array full of counts for each possible dice roll
  for (let i = 0; i < diceArray.length; i++) {
    // ignoring position 5 (represent # of 6s rolled), and all other positions in diceArray (represents # of 1s - 5s rolled)
    // are not equal to 1, then smallStright is false
  	if (i != 5 && diceArray[i] != 1) smallStraight = false;
    // ignoring position 0 (representing # of 1s rolled), and all other positions in diceArray (representing # of 2s - 6s rolled)
    // are not equal to 1, bigStraight must be false.
    if (i != 0 && diceArray[i] != 1) bigStraight = false;
    // if there is count of 2 for any possible roll in diceArray
  	if (diceArray[i] === 2) {
      // print a message declaring a pair and plug in that value (i + 1).
    	document.querySelector("#report").innerHTML += `There are a pair of ${i + 1}s<br>`;
      pairs.push(i + 1); // push to the pairs array the # of the paired dice
      // if there is three of any die
    } else if (diceArray[i] === 3) {
      // print a message declaring so, and plug in the value of the dice.
    	document.querySelector("#report").innerHTML += `There are a three of ${i + 1}s<br>`;
      threes.push(i + 1); // push to the threes array the # value of the detected triplet
      // if there are 4 of any die
    } else if (diceArray[i] === 4) {
    	document.querySelector("#report").innerHTML += `There are a four of ${i + 1}s<br>`;
      // if there are 5 of any die
    } else if (diceArray[i] === 5) {
    	document.querySelector("#report").innerHTML += `There are a yacht of ${i + 1}s<br>`;
    }
  }
  // if there are 2 pairs, print a mesage saying so.
  if (pairs.length === 2) {
  	document.querySelector("#report").innerHTML += `There are 2 pairs`;
  // if there is a pair and a triplet, report a full house.
  } else if (pairs.length === 1 && threes.length === 1) {
  	document.querySelector("#report").innerHTML += `There is a full-house`;
  }
  // report if smallStraight or bigStraight are true. 
  if (smallStraight) document.querySelector("#report").innerHTML += 'There is a small straight';
  if (bigStraight) document.querySelector("#report").innerHTML += 'There is a big straight';



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
