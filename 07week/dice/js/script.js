//dieChar is the unicode die face symbols for numbers 1-6
let dieChar = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"]

function roll() {
  //accessing the div holding the dice and setting the innerHTML inside that div to a string???-maybe?
  document.querySelector("#dice").innerHTML = "";
  for (let i = 0; i < 5; i++) {
    //let roll = a generated number rounded down to the nearest integer of a generated random decimal 0-1 times 6 and plus 1 this gives you numbers 1-6 which are the numbers on a die
    let roll = Math.floor(Math.random() * 6) + 1;
    //console.log(roll);
    //adding or including the variables roll and dieChar to the string using the template literal
    document.querySelector("#dice").innerHTML += `<span class="die" data-roll="${roll}">${dieChar[roll - 1]}</span>`;
  }
  //closing curly bracket for the for loop
  report();
  //calling function report inside the function roll
}
//closing curly bracket for the function roll

roll();
//calling function roll

//////////////////////////////////////////////////////
// Add code here that uses loops and conditional statements
// to determine if any of the following cases are true:
//
function report() {
  document.querySelector("#report").innerHTML = ""; // clear out the report box
  let diceHtml = document.querySelectorAll('.die');
  // this puts all the individual die HTML elements in diceHtml

  let pairs = []
  let triple = []
  let quad = []
  let yachty = []

  //need to push the
  for (let dieVal = 1; dieVal < 7; dieVal++) {  // we set up a nested loop, first we check for all the 1s, then 2s, etc
    let howManyDice = 0; // we zero out our counter
    for (let i = 0; i < 5; i++) {  // we create the inner loop that cycles through the rolled dice
      //this conditional is the count for how many die have the same faces?????
      if (dieVal === Number(diceHtml[i].getAttribute('data-roll'))) {  // we check if the rolled die is equal to the one's we're counting
        howManyDice++; // if so, we add one to the count
      }
      if (howManyDice === 2) { // we check after the counting is done if it is equal to '2'
        document.querySelector("#report").innerHTML += `There are a pair of ${dieVal}s<br>`; // if yes, we report a pair
        pairs.push(howManyDice === 2);
        if (howManyDice === 'pairs[] + pairs[]') {
          document.querySelector("#report").innerHTML += "You have two pairs!"
        }
      }
      if (howManyDice === 3) {
        document.querySelector("#report").innerHTML += `There are three ${dieVal}s<br>`;
        triple.push(howManyDice === 3);
      }
      if (howManyDice === 4) {
        document.querySelector("#report").innerHTML += `There are four ${dieVal}s<br>`;
        quad.push(howManyDice === 4);
      }
      if (howManyDice === 5) {
        document.querySelector("#report").innerHTML += `You have a yacht of ${dieVal}s<br>`;
        yachty.push(howManyDice === 5);
      }
      if (howManyDice === 'pairs[i] + triple[i]') {
        document.querySelector("#report").innerHTML += "You have a full house!";
      }
      else {
        document.querySelector("#report").innerHTML += "";
      }
    }
    }
 }
// report the results in the div with the ID 'report'.
report();

//creating an inner loop that cycles through howManyPairs
      // let howManyPairs = howManyDice === 2 * 2;
      // for (let i = 0; i < 3; i++) {
      //   if (dieVal === Number(diceHtml[i].getAttribute('data-roll'))) {
      //     howManyPairs++;
      //     document.querySelector("#report").innerHTML += `There are two pairs<br>`;
