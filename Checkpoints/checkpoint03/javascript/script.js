'use strict';
// console.log("javascript works");
$(document).ready(function() {
  // this copies the user's choice and puts it in a new div
  $('button').click(function() {
    var userTurn = $(this);
    var userValue=$(this).data("block");
    console.log(userValue);
    console.log(userTurn);
    $(".user").append(userTurn.clone());
    var computerTurn = getRandomInt(0, 3);
    // var computerDisplay=$(computerTurn).attr('data-block');
    // console.log(computerDisplay);
    console.log(computerTurn);
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
  });
  // the computer randomly chooses a number
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    //The maximum is exclusive and the minimum is inclusive
  }

  // check for win
setTimeout(CheckWin, 300);
  function checkWin() {

      if ((userValue===2 && computerTurn===0) || (userValue ===0 && computerTurn===2)) {
        alert("Rock wins!");
      } else if ((userValue===1 && computerTurn===0) || (userValue ===0 && computerTurn===1)) {
        alert("Paper wins!");
      } else if ((userValue===2 && computerTurn===1) || (userValue ===1 && computerTurn===2)) {
        alert("Scissors wins!");
      } else if (userValue === computerTurn) {
        alert("Tie! Play again!");
    }
  };
});
