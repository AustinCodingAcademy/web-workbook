'use strict';
// this jquery function forces the entire HTML page to Load first before ex
// it's the same as function document.ready ()
$(function(){
var player = 1;
var board = $('div[data-cell]');
$('div[data-cell]').click(function(){
var box = $(this);
var isBoxFilled = checkBoxForPrevTurn(this);
if (isBoxFilled){
alert ("Box is filled! Choose Another One!!");
}else{
var pattern = determinePattern();
box.text(pattern); //set board
if (checkForWinner(pattern)){
alert("Player" + player + "won!");
}
changePlayer();
  }
});
function checkBoxForPrevTurn(box){
if (box.innerHTML === 'x' || box.innerHTML === "0")
return true;
else
return false;
}
// insert code here to check the current determinePattern
// against the board
// check first horizontal row
if (board [0].innerHTML === pattern && board [1].innerHTML === pattern && board)
return true;
// 2nd row
{ else if (board [3].innerHTML === pattern && board [4].innerHTML === pattern)}
// 3rd row
// diagonals
// columns
// nothing matched
return false;
function placeTurn (box, pattern){
box.text (pattern);
}
function reset (){
// change the player to 1
player =1;
//clear the innerHTML for all nodes on the Board
for (let i = 0; i<9; i++){
board [i].innerHTML='';
  }
}
$('#clear').click(function(){
reset();
})
});
