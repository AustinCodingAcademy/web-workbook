let dieChar = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"]

function roll() {
  document.querySelector("#dice").innerHTML = ""; // clears the dice
  for (let i = 0; i < 5; i++) { // runs from 0 to 4 for each of the die in the array above
    let roll = Math.floor(Math.random() * 6) + 1; // random number is generated and inserted into the string below. +1 to makes sure '0' is never returned and 6 can be returned
    document.querySelector("#dice").innerHTML += `<span class="die" data-roll="${roll}">${dieChar[roll-1]}</span>`; //string is created when ${roll} is from random func and ${dieChar[roll-1]} determines the value of the die
  }
  report(); // calls the report() function below which evalutates the rolls and displays 
}

roll();

//////////////////////////////////////////////////////
// Add code here that uses loops and conditional statements
// to determine if any of the following cases are true:
// WORKING FUNCTION FOR EVAL OF PAIRS, THREES, FOURS, AND YACHT
function report() {
    document.querySelector("#report").innerHTML = "";                           // clear out the report box
    let diceHtml = document.querySelectorAll('.die');                           // this puts all the individual die HTML elements in diceHtml
    let dicePair = [];
    let diceThree = 0;
    let diceFour = 0;
    let diceFive = 0;
    for (let dieVal = 1; dieVal < 7; dieVal++) {    // we set up a nested loop, first we check for all the 1s, then 2s, etc
        let howManyDice = 0;    // we zero out our counter
        for (let i = 0; i < 5; i++) {       // we create the inner loop that cycles through the rolled dice
            if (dieVal === Number(diceHtml[i].getAttribute('data-roll'))) {     // we check if the rolled die is equal to the one's we're counting
                howManyDice++;  // if so, we add one to the count
            }
        }                                                                       // end of second for()
        if (howManyDice === 2) {
            dicePair += dieVal;
            return dicePair;
        } else if (howManyDice === 3) {
            diceThree += dieVal;
            return diceThree;
        } else if (howManyDice === 4) {
            diceFour = dieVal;
            return diceFour;
        } else if (howManyDice === 5) {
            diceFive = dieVal;
            return diceFive;
        }
    }
    display();

    function display() {
        /* if (dicePair.length > 0) {
            if (dicePair.length > 1) {
                document.querySelector("#report").innerHTML += `There are a pair of ${dicePair[0]}s and a pair of ${dicePair[1]}<br>`;  // if yes, we report a pair
            } else {
                document.querySelector("#report").innerHTML += `There are a pair of ${dicePair[0]}s<br>`;            
            }
        } else  */if (diceThree > 0) {
            document.querySelector("#report").innerHTML += `There are three ${diceThree}s<br>`; 
        }
    }

        // if (howManyDice === 2) { // we check after the counting is done if it is equal to '2'
        //     document.querySelector("#report").innerHTML += `There are a pair of ${dieVal}s<br>`;  // if yes, we report a pair
        // } else if (howManyDice === 3) {
        //     document.querySelector("#report").innerHTML += `There are three ${dieVal}s<br>`;
        // } else if (howManyDice === 4) {
        //     document.querySelector("#report").innerHTML += `There are four ${dieVal}s<br>`;
        // } else if (howManyDice === 5) {
        //     document.querySelector("#report").innerHTML += `There are five ${dieVal}s. Yacth!<br>`;
        // }
    //}   // end of first for()
  
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