'use strict';
$(document).on('ready', function() {

var humanMark, computerMark, nextPlayer, difficulty, winner;
var status = [];
var gamePhase = "finished";
var marksPlaced = 0;
var humanWins = 0;
var computerWins = 0;
var ties = 0;

function flipButtons(off, on) {
  document.getElementById(off).setAttribute("data-display", "no");
  document.getElementById(on).setAttribute("data-display", "yes");
}

$("#start").click(function() {
  if (gamePhase == "finished") {
    marksPlaced = 0;
    gamePhase = "ongoing";
    for (i=0; i<9; i++) {
      status[i] = 0;
      document.getElementById("cell"+i).setAttribute("data-mark", "none");
      document.getElementById("cell"+i).innerHTML = "";
    }
    flipButtons("start", "forfeit");
    document.getElementById("start").innerHTML = "Again?";
    if (nextPlayer == "computer") {
      computerPlays();
    }
  }
});

$("#forfeit").click(function() {
  computerWins++;
  document.getElementById("computer-wins").innerHTML = computerWins;
  gamePhase = "finished";
  flipButtons("forfeit", "start");
});

function selectMark() {
  switch (true) {
    case ($('input:radio[name=xo]:checked').val() == "X"):
      humanMark = "X";
      computerMark = "O";
      break;
    case ($('input:radio[name=xo]:checked').val() == "O"):
      humanMark = "O";
      computerMark = "X";
      break;
    default:
      humanMark = "X";
      computerMark = "O";
      var temp = Math.random()
      if (temp < 0.5) {
        humanMark = "O";
        computerMark = "X";
}}}

function selectOrder() {
  switch (true) {
    case ($('input:radio[name=first]:checked').val() == "First"):
      nextPlayer = "human";
      break;
    case ($('input:radio[name=first]:checked').val() == "Second"):
      nextPlayer = "computer"
      break;
    default:
      nextPlayer = "human";
      var temp = Math.random()
      if (temp < 0.5) {
        nextPlayer = "computer";
}}}

function selectDifficulty() {
  difficulty = $('input:radio[name=first]:checked').val();
}

$("#xo").click(function() {
  if (marksPlaced == 0) {
    selectMark();
}});

$("#first").click(function() {
  if (marksPlaced == 0) {
    selectOrder();
}});

$("#difficulty").click(function() {
  if (marksPlaced == 0) {
    selectDifficulty();
}});

$(".cell").click(function() {
  var clickedCell = document.this.getAttribute("data-cell");
  if (status[clickedCell] == 0 && gamePhase == "ongoing" && nextPlayer == "human") {
    status[clickedCell] = 1;
    document.getElementById("cell"+clickedCell).setAttribute("data-mark", humanMark);
    document.getElementById("cell"+clickedCell).innerHTML = humanMark;
    marksPlaced++;
    if (marksPlaced > 4) {
      checkForWin("human");
    }
    nextPlayer = "computer";
    if (gamePhase == "ongoing") {
      computerPlays();
}}});

function placeCompMark(cellNum) {
  status[cellNum] = -1;
  document.getElementById("cell"+cellNum).setAttribute("data-mark", computerMark);
  document.getElementById("cell"+cellNum).innerHTML = computerMark;
  marksPlaced++;
}

function playEasy() {
  var found = false;
  var count = 0;
  while (found = false) {
    if (status[count] == 0) {
      placeCompMark(count);
      found = true;
      } else {
        count++;
      }
  }
}

function findEmpty(x,y,z) {
  switch (true) {
    case (status[x] == 0):
      placeCompMark(x);
      break;
    case (status[y] == 0):
      placeCompMark(y);
      break;
    case (status[z] == 0):
      placeCompMark(z);
      break;
  }
}


function playHard() {
  switch (true) {
    // Win the game
    case (status[0] + status[1] + status[2] == -2):
      findEmpty(0,1,2);
      break;
    case (status[3] + status[4] + status[5] == -2):
      findEmpty(3,4,5);
      break;
    case (status[6] + status[7] + status[8] == -2):
      findEmpty(6,7,8);
      break;
    case (status[0] + status[3] + status[6] == -2):
      findEmpty(0,3,6);
      break;
    case (status[1] + status[4] + status[7] == -2):
      findEmpty(1,4,7);
      break;
    case (status[2] + status[5] + status[8] == -2):
      findEmpty(2,5,8);
      break;
    case (status[0] + status[4] + status[8] == -2):
      findEmpty(0,4,8);
      break;
    case (status[2] + status[4] + status[6] == -2):
      findEmpty(2,4,6);
      break;
    // Block any impending win
    case (status[0] + status[1] + status[2] == 2):
      findEmpty(0,1,2);
      break;
    case (status[3] + status[4] + status[5] == 2):
      findEmpty(3,4,5);
      break;
    case (status[6] + status[7] + status[8] == 2):
      findEmpty(6,7,8);
      break;
    case (status[0] + status[3] + status[6] == 2):
      findEmpty(0,3,6);
      break;
    case (status[1] + status[4] + status[7] == 2):
      findEmpty(1,4,7);
      break;
    case (status[2] + status[5] + status[8] == 2):
      findEmpty(2,5,8);
      break;
    case (status[0] + status[4] + status[8] == 2):
      findEmpty(0,4,8);
      break;
    case (status[2] + status[4] + status[6] == 2):
      findEmpty(2,4,6);
      break;
    // Get the center [4 possible wins through center]
    case (status[4] == 0):
      placeCompMark(4);
      break;
    // Get a corner [3 possible wins through any corner]
    case (status[0] == 0):
      placeCompMark(0);
      break;
    case (status[2] == 0):
      placeCompMark(2);
      break;
    case (status[6] == 0):
      placeCompMark(6);
      break;
    case (status[8] == 0):
      placeCompMark(8);
      break;
    // Get an interior cell [2 possible wins through any interior cell]
    case (status[1] == 0):
      placeCompMark(1);
      break;
    case (status[3] == 0):
      placeCompMark(3);
      break;
    case (status[5] == 0):
      placeCompMark(5);
      break;
    case (status[7] == 0):
      placeCompMark(7);
      break;
  }
}

function makeWinAdjustments() {
  gamePhase = "finished";
  if (player == "human") {
    humanWins++;
    document.getElementById("human-wins").innerHTML = humanWins;
  } else {
    computerWins++;
    document.getElementById("computer-wins").innerHTML = computerWins;
  }
}

function checkForWin(player) {
  if (player == "human") {
    var checkSum = 3;
  } else {
    var checkSum = -3;
  }
  switch (true) {
    case (status[0] + status[1] + status[2] == checkSum) :
      makeWinAdjustments();
      break;
    case (status[3] + status[4] + status[5] == checkSum) :
      makeWinAdjustments();
      break;
    case (status[6] + status[7] + status[8] == checkSum) :
      makeWinAdjustments();
      break;
    case (status[0] + status[3] + status[6] == checkSum) :
      makeWinAdjustments();
      break;
    case (status[1] + status[4] + status[7] == checkSum) :
      makeWinAdjustments();
      break;
    case (status[2] + status[5] + status[8] == checkSum) :
      makeWinAdjustments();
      break;
    case (status[0] + status[4] + status[8] == checkSum) :
      makeWinAdjustments();
      break;
    case (status[2] + status[4] + status[6] == checkSum) :
      makeWinAdjustments();
      break;
    case (marksPlaced = 9):
      gamePhase = "finished";
      ties++;
      document.getElementById("ties").innerHTML = ties;
}}

function computerPlays() {
  switch (difficulty) {
    case "easy":
      playEasy();
      break;
    case "moderate":
      var temp = Math.random()
      if (temp < 0.5) {
        playEasy();
      } else {
        playHard();
      }
      break;
    case "hard":
      playHard();
      break;
  }
  if (marksPlaced > 4) {
    checkForWin("computer");
  }
  nextPlayer = "human";
}



});
