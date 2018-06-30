'use strict';
// console.log("javascript works");
$(document).ready(function() {
  // this copies the user's choice and puts it in a new div
  $('button').click(function() {
    var userTurn = $(this);
    // let $block=null;
    var userValue=parseInt($(this).attr('data-block'));
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
    var countComp=0;
    var countUser=0;
    console.log("inside checkWin");
    console.log("this is userValue " + userValue);
    console.log("this is the computerTurn" + computerTurn);
      if ((userValue===2 && computerTurn===0) || (userValue ===0 && computerTurn===1) || (userValue ===1 && computerTurn==2)) {
        var computerCount=$(".computercount").append(parseInt(countComp) +1);
        var computerTotal=parseInt(computerCount) +1;
        console.log("the computerTotal is "+ computerTotal);
        console.log("the counter for the computer wins is "+ countComp);
        alert("Sorry, you lose. Play again!");
      } else if ((userValue===0 && computerTurn===2) || (userValue ===1 && computerTurn===0) || (userValue ===2 && computerTurn===1)) {
        var userCount=$(".usercount").append(parseInt(countUser) +1);
        var userTotal=parseInt(userCount) + 1;
        console.log("The userTotal is " + userTotal);
        console.log("the counter for the user wins is "+ countUser);
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
