$(function() {   // .ready function

var humanMark = "X";
var computerMark = "O";
var nextPlayer = "human";
var difficulty ="Hard";
var gamePhase = null;
var status = [0,0,0,0,0,0,0,0,0];
var marksPlaced = 0;
var humanWins = 0;
var computerWins = 0;
var ties = 0;
var radios = document.getElementsByClassName('radio');
var greetingChar = ["S","H","A","L","L"," ","W","E"," ","P","L","A","Y"," ","A"," ","G","A","M","E","?", ""];
var greeting = "";
var charCount = 0;
var totalChar = greetingChar.length;
console.log(totalChar);
var greetingAudio = new Audio("Shall-we-play-a-game.mp3");
var intervalID;
startGreeting();

function startGreeting() {
  document.getElementById("start").setAttribute("data-blink", "no");
  charCount = 0;
  greeting = "";
  greetingAudio.load();
  greetingAudio.play();
  intervalID = setInterval(writeGreeting, 85);
}

function writeGreeting() {
  if (charCount < totalChar) {
    greeting += greetingChar[charCount];
    charCount++;
    document.getElementById("computer").innerHTML = greeting;
    console.log("charCount: "+charCount+" greeting: "+greeting);
    if (charCount == 22) {
      clearInterval(intervalID);
      document.getElementById("start").innerHTML = "Y";
      document.getElementById("start").setAttribute("data-blink", "yes");
      gamePhase = "finished";
    }
  }
}

$("#start").click(function() {
  if (gamePhase == "finished") {
    startGame();
  }
});

$(document).keypress(function(event) {
  if (gamePhase == "finished") {
    startGame();
  }
});

function startGame() {
  marksPlaced = 0;
  for (i=0; i<9; i++) {
    status[i] = 0;
    document.getElementById("cell"+i).setAttribute("data-mark", "none");
    document.getElementById("cell"+i).setAttribute("data-prestart", "no");
    document.getElementById("cell"+i).innerHTML = "";
  }
  for (i=0; i<radios.length; i++) {
    radios[i].disabled = true;
  }
  document.getElementById("computer").innerHTML = "";
  document.getElementById("start").innerHTML = "";
  gamePhase = "ongoing";
  getSettings();
  if (nextPlayer == "computer") {
    computerPlays();
  }
}

function getSettings() {
  difficulty = $('input:radio[name=difficulty]:checked').val();
  // Set Play Order
  switch (true) {
    case ($('input:radio[name=first]:checked').val() == "First"):
      nextPlayer = "human";
      break;
    case ($('input:radio[name=first]:checked').val() == "Second"):
      nextPlayer = "computer";
      break;
    default:
      nextPlayer = "human";
      var temp = Math.random();
      if (temp < 0.5) {
        nextPlayer = "computer";
      }
  }
  // Set competitor's marks
  switch (true) {
    case ($('input[name=xo]:checked').val() == "X"):
      humanMark = "X";
      computerMark = "O";
      break;
    case ($('input[name=xo]:checked').val() == "O"):
      humanMark = "O";
      computerMark = "X";
      break;
    case ($('input[name=xo]:checked').val() == "Random"):
      var temp = Math.random();
      if (temp < 0.5) {
        humanMark = "O";
        computerMark = "X";
      } else {
        humanMark = "X";
        computerMark = "O";
      }
      break;
    default:
      console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ERROR: could not change mark");
  }
}

$("#cell0").click(function() {
  humanClicked(0);
});
$("#cell1").click(function() {
  humanClicked(1);
});
$("#cell2").click(function() {
  humanClicked(2);
});
$("#cell3").click(function() {
  humanClicked(3);
});
$("#cell4").click(function() {
  humanClicked(4);
});
$("#cell5").click(function() {
  humanClicked(5);
});
$("#cell6").click(function() {
  humanClicked(6);
});
$("#cell7").click(function() {
  humanClicked(7);
});
$("#cell8").click(function() {
  humanClicked(8);
});

function humanClicked(cell) {
  if (status[cell] == 0 && gamePhase == "ongoing" && nextPlayer == "human") {
    status[cell] = 1;
    document.getElementById("cell"+cell).setAttribute("data-mark", humanMark);
    document.getElementById("cell"+cell).innerHTML = humanMark;
    marksPlaced++;
    checkForWin("human");
    nextPlayer = "computer";
    if (gamePhase == "ongoing") {
      computerPlays();
    }
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
      makeWinAdjustments(player);
      break;
    case (status[3] + status[4] + status[5] == checkSum) :
      makeWinAdjustments(player);
      break;
    case (status[6] + status[7] + status[8] == checkSum) :
      makeWinAdjustments(player);
      break;
    case (status[0] + status[3] + status[6] == checkSum) :
      makeWinAdjustments(player);
      break;
    case (status[1] + status[4] + status[7] == checkSum) :
      makeWinAdjustments(player);
      break;
    case (status[2] + status[5] + status[8] == checkSum) :
      makeWinAdjustments(player);
      break;
    case (status[0] + status[4] + status[8] == checkSum) :
      makeWinAdjustments(player);
      break;
    case (status[2] + status[4] + status[6] == checkSum) :
      makeWinAdjustments(player);
      break;
    case (marksPlaced == 9):
      makeWinAdjustments("tie");
      break;
  }

  function makeWinAdjustments(player) {
    for (i=0; i<radios.length; i++) {
      radios[i].disabled = false;
    }
    if (player == "human") {
      humanWins++;
      document.getElementById("human-wins").innerHTML = humanWins;
    } else if (player == "computer"){
      computerWins++;
      document.getElementById("computer-wins").innerHTML = computerWins;
    } else {
      ties++;
      document.getElementById("ties").innerHTML = ties;
    }
    gamePhase = "finished";
    startGreeting();
  }
}

function computerPlays() {
  switch (difficulty) {
    case "Easy":
      playEasy();
      break;
    case "Moderate":
      var temp = Math.random();
      if (temp < 0.5) {
        playEasy();
      } else {
        playHard();
      }
      break;
    case "Hard":
      playHard();
      break;
  }
  checkForWin("computer");
  nextPlayer = "human";
}

function playEasy() {
  var found = false;
  while (found == false) {
    var randomCell = Math.floor(Math.random()*9);
    if (status[randomCell] == 0) {
      placeCompMark(randomCell);
      found = true;
    }
  }
}

function playHard() {
  switch (true) {
    // Win the game
    case (status[0] + status[1] + status[2] == -2):
      findEmptyThenPlace(0,1,2);
      break;
    case (status[3] + status[4] + status[5] == -2):
      findEmptyThenPlace(3,4,5);
      break;
    case (status[6] + status[7] + status[8] == -2):
      findEmptyThenPlace(6,7,8);
      break;
    case (status[0] + status[3] + status[6] == -2):
      findEmptyThenPlace(0,3,6);
      break;
    case (status[1] + status[4] + status[7] == -2):
      findEmptyThenPlace(1,4,7);
      break;
    case (status[2] + status[5] + status[8] == -2):
      findEmptyThenPlace(2,5,8);
      break;
    case (status[0] + status[4] + status[8] == -2):
      findEmptyThenPlace(0,4,8);
      break;
    case (status[2] + status[4] + status[6] == -2):
      findEmptyThenPlace(2,4,6);
      break;
    // Block any impending win
    case (status[0] + status[1] + status[2] == 2):
      findEmptyThenPlace(0,1,2);
      break;
    case (status[3] + status[4] + status[5] == 2):
      findEmptyThenPlace(3,4,5);
      break;
    case (status[6] + status[7] + status[8] == 2):
      findEmptyThenPlace(6,7,8);
      break;
    case (status[0] + status[3] + status[6] == 2):
      findEmptyThenPlace(0,3,6);
      break;
    case (status[1] + status[4] + status[7] == 2):
      findEmptyThenPlace(1,4,7);
      break;
    case (status[2] + status[5] + status[8] == 2):
      findEmptyThenPlace(2,5,8);
      break;
    case (status[0] + status[4] + status[8] == 2):
      findEmptyThenPlace(0,4,8);
      break;
    case (status[2] + status[4] + status[6] == 2):
      findEmptyThenPlace(2,4,6);
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
    case (true):
      console.log("############### error - comp didn't find a move");
      break;
    }

  function findEmptyThenPlace(x,y,z) {
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
}

function placeCompMark(cellNum) {
  status[cellNum] = -1;
  marksPlaced++;
  document.getElementById("cell"+cellNum).setAttribute("data-mark", computerMark);
  document.getElementById("cell"+cellNum).innerHTML = computerMark;
}

});
