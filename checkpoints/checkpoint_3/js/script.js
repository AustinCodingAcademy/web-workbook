 'use strict';

 let dieChar = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"]

 function roll() {
   document.querySelector(".dice").innerHTML = "";
   for (let i = 0; i < 5; i++) {
     let roll = Math.floor(Math.random() * 6) + 1;
     document.querySelector(".dice").innerHTML += `<span class="die" data-roll="${roll}">${dieChar[roll - 1]}</span>`;
   }
   report();
 }

 roll(); //call function onclick in html

 function report() {
   document.querySelector("#results").innerHTML = "";
   let diceHtml = document.querySelectorAll('.die'); // puts individual die HTML elements in diceHtml
   for (let dieVal = 1; dieVal < 7; dieVal++) { // Loop checks for all the 1s, then 2s, etc
     let howManyDice = 0; // zeros out the counter
     for (let i = 0; i < 5; i++) { // creates inner loop that cycles through the rolled dice
       if (dieVal === Number(diceHtml[i].getAttribute('data-roll'))) { // Number - converts dieHtml to a numerical value. + This line checks if rolled die = one's we're counting
         howManyDice++; // if so, we add one to the count
       }
     }

     if ((dieVal === 1) &&
       (dieVal === 2) &&
       (dieVal === 3) &&
       (dieVal === 4))
       ||
       (dieVal == 2) &&
       (dieVal == 3) &&
       (dieVal == 4) &&
       (dieVal == 5)) {
     document.querySelector("#results").innerHTML += `Small Straight!<br>`;
     $('#goal10').hide();
     // } else if ((dieVal == 1) &&
     //   (dieVal == 2) &&
     //   (dieVal == 3) &&
     //   (dieVal == 4) &&
     //   (dieVal == 5) ||
     //   ((dieVal == 2) &&
     //   (dieVal == 3) &&
     //   (dieVal == 4) &&
     //   (dieVal == 5) &&
     //   (dieVal == 6)) {
     //   document.querySelector("#results").innerHTML += `Large Straight!<br>`;
     //   $('#goal11').hide();
   } else if (howManyDice === 2 && dieVal === 1) { // we check after the counting is done if it is equal to '2'
     document.querySelector("#results").innerHTML += `There are a pair of ${dieVal}s<br>`; // if yes, we report a pair
     $('#goal1').hide();
   } else if (howManyDice === 2 && dieVal === 2) {
     document.querySelector("#results").innerHTML += `There are a pair of ${dieVal}s<br>`;
     $('#goal2').hide();
   } else if (howManyDice === 2 && dieVal === 3) {
     document.querySelector("#results").innerHTML += `There are a pair of ${dieVal}s<br>`;
     $('#goal3').hide();
   } else if (howManyDice === 2 && dieVal === 4) {
     document.querySelector("#results").innerHTML += `There are a pair of ${dieVal}s<br>`;
     $('#goal4').hide();
   } else if (howManyDice === 2 && dieVal === 5) {
     document.querySelector("#results").innerHTML += `There are a pair of ${dieVal}s<br>`;
     $('#goal5').hide();
   } else if (howManyDice === 2 && dieVal === 6) {
     document.querySelector("#results").innerHTML += `There are a pair of ${dieVal}s<br>`;
     $('#goal6').hide();
   } else if ((howManyDice === 5) && (dieVal)) {
     document.querySelector("#results").innerHTML += `Full House<br>`;
   } else if (howManyDice === 3) {
     document.querySelector("#results").innerHTML += `Three of a kind of ${dieVal}s<br>`;
     $('#goal7').hide();
   } else if (howManyDice === 4) {
     document.querySelector("#results").innerHTML += `Four of a kind of ${dieVal}s<br>`;
     $('#goal8').hide();
   } else if (howManyDice === 5) {
     document.querySelector("#results").innerHTML += `Yahtzee!<br>`;
   }

 }

 }

 // reports results in div with  ID 'results'.
 report();
