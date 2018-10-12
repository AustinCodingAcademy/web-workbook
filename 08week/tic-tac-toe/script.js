"use strict";

$(document).ready(function() {
  // Put app logic in here
  var dataCells = $(".data-cell");
  var playerTurn = "X";
  var clearBtn = $("#clear");

  const board = boardInit(3,3);

  // function: insert "X" or "O" in cells
  dataCells.click(function() {
    if (playerTurn === "X") {
      this.innerHTML = playerTurn;
      playerTurn = "O";
    } else if (playerTurn === "O") {
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

  // function: load board cells into 2d array
  function boardInit(rows, cols) {
    let board = new Array(rows);
    let cell = 0;
    
    for (var i = 0; i < cols; i++) {
      board[i] = new Array(cols);
    }

    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < cols; j++) {
        board[i][j] = dataCells[cell];
        cell++;
      }
    }

    return board;
  }

  // function: check row win
  function checkRowWin() {}

  // function: check col win
  function checkColWin() {}

  // function: check diag win
  function checkDiagWin() {}

  // function: check for draw
  function checkForDraw() {}
});
