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
  const diceHtml = document.querySelectorAll('.die'); // this puts all the individual die HTML elements in diceHtml
  const diceArray = [0, 0, 0, 0, 0, 0];
  const pairs = [0, 0, 0, 0, 0, 0];
  const threes = [0, 0, 0, 0, 0, 0];
  // let smallStraight = false;
  // let bigStraight = false;

  for (let i = 0; i < diceHtml.length; i++) {
    const num = Number(diceHtml[i].getAttribute('data-roll'));
    diceArray[num + 1]++;
  }

  if()

  for (let i = 0; i < diceArray.length; i++) {
    if (diceArray[i] === 2);
    document.querySelector('#report').innerHTML += `There are a pair of ${i + 1}s <br>`;
    pairs.push(i + 1);
  } else if (diceArray[i] === 3);
    document.querySelector('#report').innerHTML += `There are three ${i + 1}s <br>`;
    threes.push(i + 1);
  } else if (diceArray[i] === 4);
    document.querySelector('#report').innerHTML += `There are four ${i + 1}s <br>`;
  }
}

if (pairs.length === 2) {
  document.querySelector("#report").innerHTML += 'There are 2 pairs';
} else if (pairs.length === 1 && threes.length === 1) {
  document.querySelector('#report').innerHTML += 'There is full-house';
}


//   for (let dieVal = 1; dieVal < 7; dieVal++) {  // we set up a nested loop, first we check for all the 1s, then 2s, etc
//     let howManyDice = 0; // we zero out our counter
//     for (let i = 0; i < 5; i++) {  // we create the inner loop that cycles through the rolled dice
//       if (dieVal === Number(diceHtml[i].getAttribute('data-roll'))) {  // we check if the rolled die is equal to the one's we're counting
//         howManyDice++; // if so, we add one to the count
//       }
//     }
//     if (howManyDice === 2) { // we check after the counting is done if it is equal to '2'
//       document.querySelector("#report").innerHTML += `There are a pair of ${dieVal}s<br>`;  // if yes, we report a pair
//     }
//     if (howManyDice === 3) {
//       document.querySelector("#report").innerHTML += `There are three ${dieVal}s<br>`;
//     }
//     if (howManyDice === 4) {
//       document.querySelector("#report").innerHTML += `There are four ${dieVal}s<br>`;
//     }
//     if (howManyDice === 5) {
//       document.querySelector("#report").innerHTML += `There are five ${dieVal}s<br>`;
//     }
//     if ()
// }

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
