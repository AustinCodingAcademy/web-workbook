"use strict";

$(document).ready(function() {
  // Put app logic in here
  var dataCells = $(".data-cell");
  var playerTurn = "X";
  var clearBtn = $("#clear");
  
  // function: insert "X" or "O" in cells
  dataCells.click(function() {
    
    if(playerTurn === "X") {
      this.innerHTML = playerTurn;
      playerTurn = "O";
    }
    
    else if(playerTurn === "O") {
      this.innerHTML = playerTurn;
      playerTurn = "X";
    }

    // Check if someone has won
    checkRowWin();
    checkColWin();
    checkDiagWin();
    
  });
  
  // function: clear board
  clearBtn.click(function() {
    dataCells.text("");
  });


  // function: check row win
  function checkRowWin() {
    console.log("checking row win")
  }

  // function: check col win
  function checkColWin() {
    console.log("checking col win")
  }

  // function: check diag win
  function checkDiagWin() {
    console.log("checking diag win")
  }

  // function: check for draw
  function checkForDraw() {
    console.log("checking for draw")
  }

});
