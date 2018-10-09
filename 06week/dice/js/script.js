'use strict';

let dieChar = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"];
let rolledPair = false;
let previousPairVal = "";
let rolledOne = false;
let rolledTwo = false;
let rolledThree = false;
let rolledFour = false;
let rolledFive = false;
let rolledSix = false;
let rolledSmallStraight = false;
let rolledBigStraight = false;

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelectorAll('.button')[0].onclick = function roll() {
    document.querySelector("#dice").innerHTML = "";
    for (let i = 0; i < 5; i++) {
      let roll = Math.floor(Math.random() * 6) + 1;
      document.querySelector("#dice").innerHTML += `<span class="die" data-roll="${roll}">${dieChar[roll - 1]}</span>`;
    }
    report();

    //////////////////////////////////////////////////////
    // Add code here that uses loops and conditional statements
    // to determine if any of the following cases are true:
    //
    function report() {
      document.querySelector("#report").innerHTML = ""; // clear out the report box
      let diceHtml = document.querySelectorAll(".die"); // this puts all the individual die HTML elements in diceHtml
      for (let dieVal = 1; dieVal < 7; dieVal++) { // we set up a nested loop, first we check for all the 1s, then 2s, etc
        let howManyDice = 0; // we zero out our counter
        for (let i = 0; i < 5; i++) { // we create the inner loop that cycles through the rolled dice
          if (dieVal === Number(diceHtml[i].getAttribute("data-roll"))) { // we check if the rolled die is equal to the one's we're counting
            howManyDice++; // if so, we add one to the count
          }
          if (Number(diceHtml[i].getAttribute("data-roll")) == 1) {
            rolledOne = true;
          }
          if (Number(diceHtml[i].getAttribute("data-roll")) == 2) {
            rolledTwo = true;
          }
          if (Number(diceHtml[i].getAttribute("data-roll")) == 3) {
            rolledThree = true;
          }
          if (Number(diceHtml[i].getAttribute("data-roll")) == 4) {
            rolledFour = true;
          }
          if (Number(diceHtml[i].getAttribute("data-roll")) == 5) {
            rolledFive = true;
          }
          if (Number(diceHtml[i].getAttribute("data-roll")) == 6) {
            rolledSix = true;
          }
        }
        if (howManyDice === 2) { // we check after the counting is done if it is equal to "2"
          document.querySelector("#report").innerHTML += `There are a pair of ${dieVal}s<br>`; // if yes, we report a pair
          //If not rolled pair previously, set rolledPair to true and store the current value in previousPairVal for comparing later
          if (!rolledPair) {
            rolledPair = true;
            previousPairVal = `${dieVal}s`;
          }
        }

        // three of dice have the same points, like 2 4 5 4 4 - called three;
        if (howManyDice === 3) { // we check after the counting is done if it is equal to "3"
          document.querySelector("#report").innerHTML += `There are three ${dieVal}s<br>`; // if yes, we report three
        }

        // four of dice have the same points, like 1 4 1 1 1 - called four;
        if (howManyDice === 4) { // we check after the counting is done if it is equal to "4"
          document.querySelector("#report").innerHTML += `There are four ${dieVal}s<br>`; // if yes, we report four
        }

        // all five dice have the same points, like 2 2 2 2 2 - called yacht;
        if (howManyDice === 5) { // we check after the counting is done if it is equal to "5"
          document.querySelector("#report").innerHTML += `There are five ${dieVal}s, a yacht!<br>`; // if yes, we report a yacht
        }

        // two pairs at once, like 3 6 5 3 5 - called two-pairs;
        if (howManyDice === 2 && rolledPair === true && previousPairVal != `${dieVal}s`) { // we check after the counting is done if it is equal to "2", a pair has previously been rolled, and the current pair value does not equal to old pair value
          document.querySelector("#report").innerHTML += `You rolled a  two-pairs of ` + previousPairVal + ` and ${dieVal}s<br>`; // if yes, we report two pairs
          previousPairVal == "";
          rolledPair = false;
        }
        // pair and three at once, like 1 6 6 1 6 - called full-house;
        if ((howManyDice === 3 || howManyDice === 2) && rolledPair === true && previousPairVal != `${dieVal}s`) { // we check after the counting is done if it is equal to "3" or "2",a pair has previously been rolled, and the current pair value does not equal to old pair value
          document.querySelector("#report").innerHTML += `You rolled one pair of ` + previousPairVal + ` and three ${dieVal}s, a full-house!<br>`; // if yes, we report a full house
          previousPairVal == "";
          rolledPair = false;
        }

        // sequence from 1 to 5, like 2 4 3 5 1 - called small-straight;
        if (rolledOne == true && rolledTwo == true && rolledThree == true && rolledFour == true && rolledFive == true && rolledSmallStraight == false) {
          document.querySelector("#report").innerHTML += `You rolled 1 through 5, a small-straight!<br>`; // if yes, we report a small straight
          rolledSmallStraight = true;
        }

        // sequence from 2 to 6, like 6 3 4 2 5 - called big-straight.
        if (rolledTwo == true && rolledThree == true && rolledFour == true && rolledFive == true && rolledSix == true && rolledBigStraight == false) {
          document.querySelector("#report").innerHTML += `You rolled 2 through 6, a big-straight!<br>`; // if yes, we report a big straight
          rolledBigStraight = true;
        }
      }
    }
    previousPairVal == "";
    rolledPair = false;
    rolledOne = false;
    rolledTwo = false;
    rolledThree = false;
    rolledFour = false;
    rolledFive = false;
    rolledSix = false;
    rolledSmallStraight = false;
    rolledBigStraight = false;

  }

  //#region Roll Small Straight
  document.querySelectorAll('.button2')[0].onclick = function rollUntilSmallStraight() {
    rolledSmallStraight == false;
    do {
      repeatRoll();
    }
    while (rolledSmallStraight == false);
  }

  function repeatRoll() {
    console.log('rolling die');
    document.querySelector("#dice").innerHTML = "";
    for (let i = 0; i < 5; i++) {
      let roll = Math.floor(Math.random() * 6) + 1;
      document.querySelector("#dice").innerHTML += `<span class="die" data-roll="${roll}">${dieChar[roll - 1]}</span>`;
    }
    report2();
  }

  //////////////////////////////////////////////////////
  // Add code here that uses loops and conditional statements
  // to determine if any of the following cases are true:
  //
  function report2() {
    document.querySelector("#report").innerHTML = ""; // clear out the report box
    let diceHtml = document.querySelectorAll(".die"); // this puts all the individual die HTML elements in diceHtml
    for (let dieVal = 1; dieVal < 7; dieVal++) { // we set up a nested loop, first we check for all the 1s, then 2s, etc
      let howManyDice = 0; // we zero out our counter
      for (let i = 0; i < 5; i++) { // we create the inner loop that cycles through the rolled dice
        if (dieVal === Number(diceHtml[i].getAttribute("data-roll"))) { // we check if the rolled die is equal to the one's we're counting
          howManyDice++; // if so, we add one to the count
        }
        if (Number(diceHtml[i].getAttribute("data-roll")) == 1) {
          rolledOne = true;
        }
        if (Number(diceHtml[i].getAttribute("data-roll")) == 2) {
          rolledTwo = true;
        }
        if (Number(diceHtml[i].getAttribute("data-roll")) == 3) {
          rolledThree = true;
        }
        if (Number(diceHtml[i].getAttribute("data-roll")) == 4) {
          rolledFour = true;
        }
        if (Number(diceHtml[i].getAttribute("data-roll")) == 5) {
          rolledFive = true;
        }
        if (Number(diceHtml[i].getAttribute("data-roll")) == 6) {
          rolledSix = true;
        }
      }
      // sequence from 1 to 5, like 2 4 3 5 1 - called small-straight;
      if (rolledOne == true && rolledTwo == true && rolledThree == true && rolledFour == true && rolledFive == true && rolledSmallStraight == false) {
        document.querySelector("#report").innerHTML += `You rolled 1 through 5, a small-straight!<br>`; // if yes, we report a small straight
        rolledSmallStraight = true;
      }
    }
    rolledOne = false;
    rolledTwo = false;
    rolledThree = false;
    rolledFour = false;
    rolledFive = false;
    rolledSix = false;
  }
  //#endregion


  //#region Roll Big Straight
  document.querySelectorAll('.button2')[1].onclick = function rollUntilBigStraight() {
    rolledBigStraight == false;
    do {
      repeatRoll2();
    }
    while (rolledBigStraight == false);
  }

  function repeatRoll2() {
    console.log('rolling die');
    document.querySelector("#dice").innerHTML = "";
    for (let i = 0; i < 5; i++) {
      let roll = Math.floor(Math.random() * 6) + 1;
      document.querySelector("#dice").innerHTML += `<span class="die" data-roll="${roll}">${dieChar[roll - 1]}</span>`;
    }
    report3();
  }

  //////////////////////////////////////////////////////
  // Add code here that uses loops and conditional statements
  // to determine if any of the following cases are true:
  //
  function report3() {
    document.querySelector("#report").innerHTML = ""; // clear out the report box
    let diceHtml = document.querySelectorAll(".die"); // this puts all the individual die HTML elements in diceHtml
    for (let dieVal = 1; dieVal < 7; dieVal++) { // we set up a nested loop, first we check for all the 1s, then 2s, etc
      let howManyDice = 0; // we zero out our counter
      for (let i = 0; i < 5; i++) { // we create the inner loop that cycles through the rolled dice
        if (dieVal === Number(diceHtml[i].getAttribute("data-roll"))) { // we check if the rolled die is equal to the one's we're counting
          howManyDice++; // if so, we add one to the count
        }
        if (Number(diceHtml[i].getAttribute("data-roll")) == 1) {
          rolledOne = true;
        }
        if (Number(diceHtml[i].getAttribute("data-roll")) == 2) {
          rolledTwo = true;
        }
        if (Number(diceHtml[i].getAttribute("data-roll")) == 3) {
          rolledThree = true;
        }
        if (Number(diceHtml[i].getAttribute("data-roll")) == 4) {
          rolledFour = true;
        }
        if (Number(diceHtml[i].getAttribute("data-roll")) == 5) {
          rolledFive = true;
        }
        if (Number(diceHtml[i].getAttribute("data-roll")) == 6) {
          rolledSix = true;
        }
      }
      // sequence from 2 to 6, like 6 3 4 2 5 - called big-straight.
      if (rolledTwo == true && rolledThree == true && rolledFour == true && rolledFive == true && rolledSix == true && rolledBigStraight == false) {
        document.querySelector("#report").innerHTML += `You rolled 2 through 6, a big-straight!<br>`; // if yes, we report a big straight
        rolledBigStraight = true;
      }
    }
    rolledOne = false;
    rolledTwo = false;
    rolledThree = false;
    rolledFour = false;
    rolledFive = false;
    rolledSix = false;
  }
  //#endregion

});