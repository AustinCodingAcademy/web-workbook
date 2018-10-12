"use strict";

$(document).ready(function() {
  // Put app logic in here

  var dataCells = $(".datacell");
  var playerTurn = "X";
  var clearBtn = $("#clear");
  console.log(clearBtn);
  // Function that adds an X or O to clicked box

  dataCells.click(function() {
    if (playerTurn === "X") {
      this.innerHTML = playerTurn;
      playerTurn = "O";
    } else if (playerTurn === "O") {
      this.innerHTML = playerTurn;
      playerTurn = "X";
    }



    //check if someone has won
    checkRowWin();
    checkColWin();
    checkDiagWin();

  });

  clearBtn.click(function() {
    dataCells.text("");
  });

function checkRowWin () {
  console.log('checking for row win');
}

function checkColWin () {
  console.log('checking for col win');
}

function checkDiagWin () {
  console.log('checking for diag win');
}



});

//clear button

// select all data cells by data cell attribute
// use .text()  function
// global variable
// toggle player state or toggle input string on click
// c
