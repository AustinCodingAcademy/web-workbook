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
    document.getElementById("report").innerHTML = ""; // clear out the report box
    let diceHtml = document.getElementsByClassName('die'); // this puts all the individual die HTML elements in diceHtml
    var pair=false;
    var pair2=false;
    var trips=false;
    var value1=false;
    var value2=false;
    var value3=false;
    var value4=false;
    var value5=false;
    var value6=false;
  
  
    for (var dieVal = 1; dieVal < 7; dieVal++) {  // we set up a nested loop, first we check for all the 1s, then 2s, etc
      let howManyDice = 0; // we zero out our counter
      for (var die = 0; die < 5; die++) {  // we create the inner loop that cycles through the rolled dice
        if (dieVal == diceHtml[die].dataset.roll) {  // we check if the rolled die is equal to the one's we're counting
          howManyDice++; // if so, we add one to the count
        }
      }
      if (howManyDice===1){
        if (dieVal===1){
          value1=true;
        }else if (dieVal===2){
          value2=true;
        }else if(dieVal===3){
          value3=true;
        }else if(dieVal===4){
          value4=true;
        }else if(dieVal===5){
          value5=true;
        }else if(dieVal===6){
          value6=true;
        }
      }
  
      if (howManyDice===2) { // we check after the counting is done if it is equal to '2'
  
        if (pair===false){
          pair=true;
        }else{
          pair2=true;
        }
        document.getElementById("report").innerHTML += "There are a pair of "+dieVal+"s<br>";  // if yes, we report a pair
      }
      if (howManyDice===3) { // we check after the counting is done if it is equal to '2'
        trips=true;
  
        document.getElementById("report").innerHTML += "There are three of "+dieVal+"s<br>";  // if yes, we report a pair
      }
      if (howManyDice===4) { // we check after the counting is done if it is equal to '2'
        document.getElementById("report").innerHTML += "There are four of "+dieVal+"s<br>";  // if yes, we report a pair
      }
  
    }
  
    if (pair && trips){
      document.getElementById("report").innerHTML += "Full House Baby"
    }
    if (pair && pair2){
      document.getElementById("report").innerHTML += "TWO PAIRS!!"
    }
    if (value1===true && value2===true && value3===true && value4===true && value5===true){
      document.getElementById("report").innerHTML += "Small Straight"
    }
    if (value2===true && value3===true && value4===true && value5===true && value6===true){
      document.getElementById("report").innerHTML += "Large and In Charge Straight"
    }
  
// function report() {
//   document.querySelector("#report").innerHTML = ""; // clear out the report box
//   let diceHtml = document.querySelectorAll('.die'); // this puts all the individual die HTML elements in diceHtml
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