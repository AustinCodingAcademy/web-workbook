'use strict';
// console.log("javascript works");
$(document).ready(function() {
  // this copies the user's choice and puts it in a new div
  $('button').click(function() {
    var userTurn = $(this);
    // let $block=null;
    var userValue = parseInt($(this).attr('data-block'));
    console.log("this is userValue " + userValue);
    console.log("this is the userTurn" + userTurn);
    $(".user").append(userTurn.clone());
    var computerTurn = getRandomInt(0, 3);
    // var computerDisplay=$(computerTurn).attr('data-block');
    // console.log(computerDisplay);
    console.log("this is the computerTurn" + computerTurn);
    // getting the computer option to show in the div
    if (computerTurn === 0) {
      $(".computer").addClass("rockpic");
      // console.log("does this work");
    } else if (computerTurn === 1) {
      $(".computer").addClass("paperpic");
    } else if (computerTurn === 2) {
      $(".computer").addClass("scissorspic");
    }
    //   let $rock = $('[data-block=0]').data();
    //   // console.log($rock);
    //   let $paper = $('[data-block=1]').data();
    //   // console.log($paper);
    //   let $scissors = $('[data-block=2]').data();
    //   // console.log($scissors);

    // the computer randomly chooses a number
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
      //The maximum is exclusive and the minimum is inclusive
    }

    // check for win
    setTimeout(checkWin, 300);

    function checkWin() {
      // console.log("inside checkWin");


      // these two variables show the numerical value associated with the choice
      // console.log("this is userValue " + userValue);
      // console.log("this is the computerTurn " + computerTurn);
      // this function decides what options are possible for a computer win
      if ((userValue === 2 && computerTurn === 0) || (userValue === 0 && computerTurn === 1) || (userValue === 1 && computerTurn == 2)) {
        // this starts to count the computer's wins and inputs it into the div called computercount
        // starting the counters that will calculate wins at zero
        var computerWin = 0;
        console.log("the counter for the computer win is " + computerWin);
        var computerCount = $(".computercount").append(parseInt(computerWin) + 1);
        console.log("the computerCount is " + computerCount);
        // computer win total variable
        var computerTotal = parseInt(computerCount) + 1;
        // this should print out the wins for the computer
        console.log("the computerTotal is " + computerTotal);

        alert("Sorry, you lose. Play again!");
        // this part of the function decides what options are possible for the user to win
      } else if ((userValue === 0 && computerTurn === 2) || (userValue === 1 && computerTurn === 0) || (userValue === 2 && computerTurn === 1)) {
        // this starts to count the user's wins and inputs it into the div called usercount
        var userWin = 0;
        var userCount = $(".usercount").append(parseInt(userWin) + 1);
        console.log("the userCount is " + userCount);
        // user win total variable, why is it NaN?
        var userTotal = parseInt(userCount) + 1;
        // userTotal is not a number. why?
        console.log("The userTotal is " + userTotal);
        // this isn't moving from zero
        console.log("the counter for the userWin is " + userWin);
        alert("You win!");
      } else {
        alert("Tie! Play again!");
      };
      $(".user").html("");
      $(".computer").removeClass("rockpic");
      $(".computer").removeClass("paperpic");
      $(".computer").removeClass("scissorspic");
    };
  });
});
