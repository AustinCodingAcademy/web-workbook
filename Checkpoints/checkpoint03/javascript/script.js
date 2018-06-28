'use strict';
console.log("javascript works");
$(document).ready(function() {
  // this copies the user's choice and puts it in a new div
  $('button').click(function(){
    var userTurn=$(this);
    console.log(userTurn);
    $(".user").append(userTurn.clone());
    var computerTurn=getRandomInt(0,3);
    // var computerDisplay=$(computerTurn).attr('data-block');
    // console.log(computerDisplay);
    console.log(computerTurn);
// getting the computer option to show in the div
    if (computerTurn===0) {
      $(".computer").addClass(".rockpic");
      console.log("does this work");
    } else if (computerTurn===1) {
      $(".computer").addClass(".paperpic");
    } else if (computerTurn===2) {
      $(".computer").addClass(".scissorspic");
    }
    // $rock=$('[data-block=0]').addClass(".rockpic");
    // console.log($rock);
    // let $paper=$('[data-block=1]').addClass(".paperpic");
    // console.log($paper);
    // let $scissors=$('[data-block=2]').addClass(".scissorspic");
    // console.log($scissors);
    // $(".computer").append(computerTurn.css("background-image"));
    });
// the computer randomly chooses a number
  function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
  //The maximum is exclusive and the minimum is inclusive
}

// check for win

function checkWin(userTurn, computerTurn) {

//   if (userTurn) {
//     alert("Rock wins");
//   } else if (1,0) {
//     alert("Paper wins");
//   } else if (2,1) {
//     alert("Scissors win");
//   } else if (userTurn === computerTurn) {
//     alert("Tie! Play again!");
// }
}
});
