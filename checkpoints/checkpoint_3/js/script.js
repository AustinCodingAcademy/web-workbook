 'use strict';
 //dieChar variable holds the array of dice unicodes
 let dieChar = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"]

 // function rolls the dice by generating a random number and places the rolled die into .die
 function roll() {
   document.querySelector(".dice").innerHTML = ""; // clears .dice on roll
   document.querySelector("#results").innerHTML = ""; // clears #results on roll
   for (let i = 0; i < 5; i++) {
     let roll = Math.floor(Math.random() * 6) + 1; //math floor function returns the largest integer less than or equal to a given number. Math.random()*6 + 1 gives us a random number between 1 and 6.999999
     document.querySelector(".dice").innerHTML += `<span class="die" data-roll="${roll}">${dieChar[roll - 1]}</span>`;
   }
   report();
 }

 roll(); //call function onclick in html



 // report function reports the results of each dice roll
 function report() {
   // variables serve as counter
   var num1 = 0;
   var num2 = 0;
   var num3 = 0;
   var num4 = 0;
   var num5 = 0;
   var num6 = 0;

   let diceHtml = document.querySelectorAll('.die'); // puts individual die HTML elements in diceHtml
   //loops through die to determine how many of each number are in roll
   for (let i = 0; i < 5; i++) {
     var value = Number(diceHtml[i].getAttribute('data-roll')); // converts die faces to numbers
     if (value == 1) {
       num1++; // if die has numerical value of 1, update num1 variable by 1.
     } else if (value == 2) {
       num2++;
     } else if (value == 3) {
       num3++;
     } else if (value == 4) {
       num4++;
     } else if (value == 5) {
       num5++;
     } else if (value == 6) {
       num6++;
     }
   }
   //variables for checking for wins
   var foundPair;
   var threeOfKind
   var fullHouse;
   var smallStraight;
   var largeStraight;
   var fourOfKind;
   var yahtzee;

   var pairValue;


   //determines if two dice share the same numerical value

   if (num1 == 2) {
     foundPair = true;
     pairValue = 1; // this states that the pair is a pair of ones
   }
   if (num2 == 2) {
     foundPair = true;
     pairValue = 2; // this states that the pair is a pair of twos
   }
   if (num3 == 2) {
     foundPair = true;
     pairValue = 3;
   }
   if (num4 == 2) {
     foundPair = true;
     pairValue = 4;
   }
   if (num5 == 2) {
     foundPair = true;
     pairValue = 5;
   }

   if (num6 == 2) {
     foundPair = true;
     pairValue = 6;
   }


   // determines if three dice share a value
   if (num1 == 3 || num2 == 3 || num3 == 3 || num4 == 3 || num5 == 3 || num6 == 3) {
     threeOfKind = true;
   }

   // determines if four dice share a value
   if (num1 == 4 || num2 == 4 || num3 == 4 || num4 == 4 || num5 == 4 || num6 == 4) {
     fourOfKind = true;
     document.querySelector("#results").innerHTML += `Four of a kind<br>`;
     $('#goal8').appendTo('.matched'); // if yes, move goal 8 to .matched
   }
   // determines if five dice share a value
   if (num1 == 5 || num2 == 5 || num3 == 5 || num4 == 5 || num5 == 5 || num6 == 5) {
     yahtzee = true;
     document.querySelector("#results").innerHTML += `Yahtzee!<br>`;
     $('#goal12').appendTo('.matched'); // if yahtzee = true, move goal 12 to .matched
   }
   // determines if a full house is present by checking if variable foundPair and threeofKind are both true.
   if (foundPair == true && threeOfKind == true) {
     fullHouse = true;
     foundPair = false; // marked as false so program does not state that full house and pair are true at the same time
     threeOfKind = false; // marked as false so program does not state that full house and three of kind are true at the same time
     document.querySelector("#results").innerHTML += `Full House<br>`;
     $('#goal9').appendTo('.matched'); // if full house is true, move goal 9 to .matched
   }
   // for foundPair - tells you what to put in the html if it's met earlier
   if (foundPair == true) {
     document.querySelector("#results").innerHTML += `There are a pair of ${pairValue}s<br>`;
     $('#goal' + pairValue).appendTo('.matched');
   }
   // for threeOfKind - tells you what to put in the html if it's met earlier
   if (threeOfKind == true) {
     document.querySelector("#results").innerHTML += `Three of a kind<br>`;
     $('#goal7').appendTo('.matched');
   }

   //determines if small straight is present by checking if num values contain the right numbers
   if (num1 == 1 && num2 == 1 && num3 == 1 && num4 == 1 && num5 == 1 && num6 == 0) {
     smallStraight = true;
     document.querySelector("#results").innerHTML += `Small Straight<br>`;
     $('#goal10').appendTo('.matched'); // if small straight is true, move goal 10 to .matched
   }
   //determines if large straight is present by checking if num values contain the right numbers
   if (num1 == 0 && num2 == 1 && num3 == 1 && num4 == 1 && num5 == 1 && num6 == 1) {
     largeStraight = true;
     document.querySelector("#results").innerHTML += `Large Straight<br>`;
     $('#goal11').appendTo('.matched'); // if large straight is true, move goal 11 to .matched
   }

 }
