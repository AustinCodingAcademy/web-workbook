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
  document.querySelector("#report").innerHTML = "";
  var pairs = 0;
  var triple = 0; 
  let diceHtml = document.querySelectorAll('.die'); 
  for (let dieVal = 1; dieVal < 7; dieVal++) {  
    let howManyDice = 0;
    
    for (let i = 0; i < 5; i++) {  
      if (dieVal === Number(diceHtml[i].getAttribute('data-roll'))) {  
        howManyDice++;
      }
    }
    if (howManyDice === 2) { // we check after the counting is done if it is equal to '2'
      document.querySelector("#report").innerHTML += `There are a pair of ${dieVal}s<br>`;  // if yes, we report a pair
      pairs += 1;
    }
    if (howManyDice === 3) { 
     document.querySelector("#report").innerHTML += `There are three ${dieVal}s<br>`;
     triple +=1;
    }
    if (howManyDice === 4) { 
      document.querySelector("#report").innerHTML += `There are four ${dieVal}s<br>`;
    }
    if (howManyDice === 5) { 
      document.querySelector("#report").innerHTML += `Yacht`;
   }
    
} 
if (pairs === 2){
  document.querySelector("#report").innerHTML = 'Two pairs';
}
if (pairs === 1 && triple === 1) {
  document.querySelector("#report").innerHTML = 'Full House';
} 
var diceNums = [0,0,0,0,0];
for(let i = 0; i < 5; i++){
  diceNums[i] = diceHtml[i].getAttribute('data-roll');
}
diceNums.sort();
console.log(diceNums);
var straight = true;
for(let i = 0; i < 4; i++){
  if (diceNums[i] != diceNums[i+1]-1){
    straight = false;
  }
  console.log(straight);
}
if (straight && diceNums[0]==1){
  document.querySelector("#report").innerHTML += 'Small Straight'
}
if (straight && diceNums[0]==2){
  document.querySelector("#report").innerHTML += 'Big Straight'
}
}

report();