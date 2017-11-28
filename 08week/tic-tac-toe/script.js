'use strict';
// function clickSquare(dataCell){
//   var init = '';
//   let isX = true;
//   let marker = '';
//
//   if(init ===null){
//     init = "initialized";
//     isX = true;
//   }
//   if (isX) {
//     marker = 'X';
//   }
//   else{
//     marker = 'O';
//   }
//    $('div[data-cell="'+datacell+'"]';).innerHTML = marker;
//
//     isX = !isx;
//   }
// }
// $(function(){
// var player = 1;
// var divs = $('div');
//   $('div').click(function(){
//     div = $(this);
//     var isBoxFilled = checkBoxForPrevTurn(div);
//     if(isBoxFilled){
//       alert("Box is filled! Choose another one!");
//     } else{
//       var pattern = determinePattern(player);
//       placeTurn(player,pattern);
//       if (checkForWinner(divs, pattern)){
//         alert("Palyer" + player + "won!");
//       }
//       changePlayer(player);
//     }
//     }
//   })
// })
// I'm having a really difficult time with JS. I tried a number of things and got absolutely no where. I eventually erased most of what I did. JS/Jquery is most definitely on a totally different level than html and css. I feel like it's going to take me MUCH longer to get a grasp of JS/Jquery than anything else we've done. I'll be trying to figure out JS/jquery long after this class is over. I don't think my last checkpoint will go as smoothly....
$(function(){
var player = 1;
var board = $('div[data-cell]');
$('div[data-cell]').click(function() {
    var box = $(this);
    var isBoxFilled = checkBoxForPrevTurn(this);
    if(isBoxFilled) {
      alert("Box is filled!  Choose another one!!");
    } else {
      var pattern = determinePattern();
      placeTurn(box,pattern);
      if (checkForWinner(pattern)) {
        alert ("Player " + player + " won!");
      }
      changePlayer();
    }
  });
  function checkBoxForPrevTurn(box) {
    if (box.innerHTML === 'X' || box.innerHTML === 'O')
      return true;
    else
      return false;
  }
  // assigns player 1 a pattern of 'x' and
  // player 2 a pattern of 'o'
  function determinePattern() {
    if (player === 1) {
      return 'X';
    } else {
      return 'O';
    }
  }
  function checkForWinner(pattern){
    // insert code here to check the current pattern
    // against the board
    if (board[0].innerHTML === pattern && board[1].innerHTML === pattern && board[2].innerHTML === pattern){
      return true;
    }
    else if (board[3].innerHTML === pattern && b)
    return false;
  }
  // changes player variable between values 1 and 2
  function changePlayer() {
    // check if player is number 1
    if (player === 1) {
      // change to player 2
      player = 2;
    } else {
      // otherwise change to player 1
      player = 1;
    }
  }
  function placeTurn(box, pattern) {
      box.text(pattern);
  }
  function reset() {
    // change the player to 1
    player = 1;
    // clear the innerHTML for all nodes in the board
    for (let i=0; i<9; i++){
      board[i].innerHTML='';
    }
  }
  $('#butn').click(function(){
    reset();
  })
});
