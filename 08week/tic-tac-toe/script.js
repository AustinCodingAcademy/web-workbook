'use strict';

$(document).ready(function() {
// target the list items with jquery and put an 'X' in any square they click
// every click flip the player
// check if it's a good move, and if not, ignore click
// check if there is a win
// check to see if it's a draw
// wire up the reset button
let turn="X";
let lis=$("li");


//this adds hover to the list items and removes it after the mouse moves off the list item
$(".square").hover(function(){
  $(this).addClass("hover");
}, function(){
  $(this).removeClass("hover");
});

//chaining commands. You can effect the content inside the li by adding a .text
$(".square").click(function(){
  if ($(this).text() === ""){
  $(this).addClass(turn).text(turn);
  if(turn === "X"){
    turn = "O";
  } else {
    turn = "X";
  };
    endGame();
  }
});

//reset button
$("#reset").click(reset);
function reset(){
  $.each(lis, function(){
    $(this).text("").removeClass("O").removeClass("X");
  });
  turn= "X";
};

let winState =[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [2,4,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [0,3,6]
];
function endGame(){
  for (let a=0; a<winState.length; a++){
    let tally = 0;
    for (let b=0; b< winState[a].length;b++){
          if($(lis[winState[a][b]]).text() === "X"){
      tally++;
      } else if ($(lis[winState[a][b]]).text() === "O"){
        tally--;
      }
    }
    if (tally === 3){
      alert("X wins!");
      reset();
    }else if (tally === -3){
      alert("0 wins!");
      reset();
    } else {
  let open = 0;
      $.each(lis, function(){
        if ($(this).text()===""){
          open++;
        }
      })
      if (open===0){
        alert("it's a tie");
      }
    }
  }
};

});
