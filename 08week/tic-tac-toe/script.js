'use strict';
//project get smart Christelle
var origBoard; // difference between var and const
const huPlayer = '0';
const aiPlayer = 'X';
const winCombos =[//this array contains the winning combinations
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [6,4,2]
]
// querySelectorAll targets all the elements with the class cell
//that was set up in my html
// now the key word cells equals all the cells in the game
// thru the class name cell
const cells= document.querySelectorAll('.cell');
//always call a function on top of the actual function proper
startGame ();
function startGame() {//display property thru class endgame
  document.querySelector(".endgame").style.display="none"
  //Camel Casing is super imp[ortant to help with syntax errors
  // Creates an array inside of an array from my board
  // that contains 9 cells reviewed thru console log method
  origBoard=Array.from(Array(9).keys());
  // for loop used to clear up all the cells
  for (var i =0; i < cells.length; i++){
    cells[i].innerText='';//upon reseting clears all the cells
    cells[i].style.removeProperty('background-color');
    cells[i].addEventListener('click',turnClick, false);
  }
}
//determining and testing my new function turn click function
function turnClick (square){
  if (typeof origBoard[square.target.id] == 'number'){
    turn(square.target.id,huPlayer)
    if (!checkTie()) turn(bestSpot(),aiPlayer);
  }
}
//square id references to the actual numerical value in my id
function turn(squareId, player){
  origBoard[squareId]= player;
  document.getElementById(squareId).innerText = player;
  // thids allows me to check thru the board the players moves
  let gameWon= checkWin(origBoard,player)//pass in both arrays
  if (gameWon) gameOver(gameWon)
  // if the game has been won call the game over function
  //with the game won variable
}
// creating a new function to check ou wins
function checkWin(board, player){
  //pass in game board and the original player
  let plays = board.reduce((a, e, i) =>
  // a is the accumulator .reduce is afunction
  // .concat function that add values from 2 different arrays
  (e === player) ? a.concat(i) : a,[]);
  let gameWon = null;
  // array of win winCombos are set in the beginning
  for (let [index, win] of winCombos.entries()){

 if (win.every(elem=> plays.indexOf(elem)> -1)){
   gameWon={ index: index, player:player};
   break;
 }
}
return gameWon;
}

function gameOver(gameWon){
  for (let index of winCombos[gameWon.index]){
  document.getElementById(index).style.backgroundColor
  gameWon.player == huPlayer ? "blue" : "red";
  }
  for (var i=0; i <cells.length; i++){
    cells[i].removeEventListener('click',turnClick,false)
  }
  declareWinner (gameWon.player == huPlayer ? "You win!" : " You Lose.");
}
function declareWinner(who){
  document.querySelector(".endgame").style.display = "block";
  document.querySelector(".endgame.text").innerText= who;
}

function emptySquares(){
  return origBoard.filter(s => typeof s == 'number');
}

function bestSpot(){
  return emptySquares()[0];
}
function checkTie(){
  if (emptySquares().length == 0){
    for (var i= 0; i< cells.length; i++){
      cells[i].style.backgroundColor = "green";
      cells[i].removeEventListener('click', turnClick, false);
    }
    declareWinner("Tie Game!")
    return true;
  }
  return false;
}
