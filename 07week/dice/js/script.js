// dice images
const dieChar = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"];

function roll() {
  document.querySelector("#dice").innerHTML = ""; // clear #dice div
  for (let i = 0; i < 5; i++) { // go through all 5 dice
    const roll = Math.floor(Math.random() * 6) + 1; // assign each die a random number between 1 and 6.
    // insert span with correct image from dieChar array with class of "die" and correct data-roll value.
    document.querySelector("#dice").innerHTML += `<span class="die" data-roll="${roll}">${dieChar[roll - 1]}</span>`;
  }
  report(); // print report
}

function report() {
  document.querySelector("#report").innerHTML = ""; // clear out the report box

  const diceHtml = document.querySelectorAll('.die'); // this puts all the individual die HTML elements in diceHtml as an array
  const diceArray = [0,0,0,0,0,0]; // this is where counts of the rolls are stored
  const pairs = []; // array filled with die values of detected pairs
  const threes = []; // array filled with die values of detected triplets
  // loops through dice html to get data-roll attribute, then plugs the # of each possible roll into diceArray
  for (let i = 0; i < diceHtml.length; i++) {
    // num represents the number value within each individual die
  	const rollnum = Number(diceHtml[i].getAttribute('data-roll'));
    // pushing the count of each possible roll number into diceArray
    diceArray[rollnum - 1]++;
  }
  // "i" here represents the position in the diceArray which is an Array full of counts for each possible dice roll
  for (let i = 0; i < diceArray.length; i++) {
		// if diceArray has only 1 of each possible roll and no 1 value rolled, report big straight.
  	if (diceArray.join('') === '011111') {
      document.querySelector("#report").innerHTML += 'There is a big straight';
      }
		// if diceArray has only 1 of each possible roll and no 6 rolled, report small straight.
    if (diceArray.join('') === '111110') {
      document.querySelector("#report").innerHTML += 'There is a small straight';
      }
  	if (diceArray[i] === 2) { // if there is count of 2 for any possible roll in diceArray
      // print a message declaring a pair and plug in that value (i + 1).
    	document.querySelector("#report").innerHTML += `There are a pair of ${i + 1}s<br>`;
      pairs.push(i + 1); // push to the pairs array the # of the paired dice
    } else if (diceArray[i] === 3) { // if there is three of any die
      // print a message declaring so, and plug in the value of the dice.
    	document.querySelector("#report").innerHTML += `There are a three of ${i + 1}s<br>`;
      threes.push(i + 1); // push to the threes array the # value of the detected triplet
    } else if (diceArray[i] === 4) { // if there are 4 of any die
      // print a message declaring so, and plug in the value of the dice.
    	document.querySelector("#report").innerHTML += `There are a four of ${i + 1}s<br>`;
    } else if (diceArray[i] === 5) { // if there are 5 of any die
      // print a message declaring so, and plug in the value of the dice.
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
