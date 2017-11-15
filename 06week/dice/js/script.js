var dieChar = ["", "&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"]

function roll() {
document.getElementById("dice").innerHTML = "";
for (a=0; a<5; a++) {
var roll = Math.floor(Math.random()*6)+1;
document.getElementById("dice").innerHTML += "<span class='die' data-roll='"+roll+"'>"+dieChar[roll]+"</span>";
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

for (var dieVal = 1; dieVal < 7; dieVal++) { // we set up a nested loop, first we check for all the 1s, then 2s, etc
let howManyDice = 0; // we zero out our counter
for (var die = 0; die < 5; die++) { // we create the inner loop that cycles through the rolled dice
if (dieVal == diceHtml[die].dataset.roll) { // we check if the rolled die is equal to the one's we're counting
howManyDice++; // if so, we add one to the count
}
}

if (howManyDice===1) {
  if (dieVal===1) {
    d1++;
  } else if (dieVal===2) {
    d2++;
  } else if (dieVal===3) {
    d3++;
  } else if (dieVal===4) {
    d4++;
  } else if (dieVal===5) {
    d5++;
  } else if (dieVal===6) {
    d6++;
  }
}

if (howManyDice===2) { // we check after the counting is done if it is equal to '2'
document.getElementById("report").innerHTML += "There are a pair of "+dieVal+"s<br>"; // if yes, we report a pair
pair++;
}
if (howManyDice===3) {
document.getElementById("report").innerHTML += "There are a three of "+dieVal+"s<br>";
triple++;
}
if (howManyDice===4) {
document.getElementById("report").innerHTML += "There are a four of "+dieVal+"s<br>";
four++;
}
if (howManyDice===5) {
document.getElementById("report").innerHTML += "There are a yacht of "+dieVal+"s<br>";
yacht++;
}
}
if (pair===2) {
document.getElementById("report").innerHTML += "Two Pair!";
} else if (pair && triple) {
document.getElementById("report").innerHTML += "Full House!";
}
 if (d1===1 && d2===1 && d3===1 && d4===1 && d5===1) {
   document.getElementById("report").innerHTML += "Small Straight!";
 } else if (d2===1 && d3===1 && d4===1 && d5===1 && d6===1) {
   document.getElementById("report").innerHTML += "Large Straight!";
 }


}

report();
