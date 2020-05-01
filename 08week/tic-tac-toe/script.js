"use strict";

$(document).ready(function() {
  var dataCells = $(".data-cell");
  var clearBtn = $("#clear");
  var announceWinner = $("#announce-winner");
  var playerTurn = "X";
  var charCount = 0;

  const rows = 3;
  const cols = 3;
  const board = boardInit(rows, cols);


  dataCells.click(function() {
    if (this.innerHTML != "") {
      alert("That space is already occupied!");
      return;
    }

    if (playerTurn === "X") {
      this.innerHTML = playerTurn;
      this.classList.add("color1");
      playerTurn = "O";
    } else if (playerTurn === "O") {
      this.innerHTML = playerTurn;
      this.classList.add("color2");
      playerTurn = "X";
    }
    charCount++;
    let playerHasWon = checkForWin();
    if(playerHasWon) {
      return;
    }

    var boardState = getBoardState();
    if(boardState === "FULL" && playerHasWon === false) {
      announceWinner.text("It's a draw!");
    }
  });

  clearBtn.click(function() {
    dataCells.text("");
    announceWinner.text("");
    charCount = 0;

    for (i = 0; i < rows*cols; i++) {
      if(dataCells[i].classList.contains("color1"))
        dataCells[i].classList.remove("color1");
      if(dataCells[i].classList.contains("color2"))
        dataCells[i].classList.remove("color2");
    }
  });

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

  function getBoardState() {
    let boardState = "";
    if (charCount === rows * cols) {
      boardState = "FULL"
      return boardState;
    }
  }

  function checkForWin() {
    let winnerRow = checkRows(board);
    let winnerCol = checkCols(board);
    let winnerDiag = checkDiags(board);

    if (winnerRow || winnerCol || winnerDiag) {
      announceWinner.text("We Have a Winner!");
      return true;
    } else {
      return false;
    }
  }

  function checkRows(board) {
    let xCount__Row0 = 0;
    let xCount__Row1 = 0;
    let xCount__Row2 = 0;
    let oCount__Row0 = 0;
    let oCount__Row1 = 0;
    let oCount__Row2 = 0;
    for (var i = 0; i < rows; i++) {
      if (board[0][i].innerHTML === "X") {
        xCount__Row0++;
      } else if (board[0][i].innerHTML === "O") {
        oCount__Row0++;
      }

      if (board[1][i].innerHTML === "X") {
        xCount__Row1++;
      } else if (board[1][i].innerHTML === "O") {
        oCount__Row1++;
      }

      if (board[2][i].innerHTML === "X") {
        xCount__Row2++;
      } else if (board[2][i].innerHTML === "O") {
        oCount__Row2++;
      }
    }

    if (
      xCount__Row0 === rows ||
      xCount__Row1 === rows ||
      xCount__Row2 === rows ||
      oCount__Row0 === rows ||
      oCount__Row1 === rows ||
      oCount__Row2 === rows
    ) {
      return true;
    }

    return false;
  }

  function checkCols(board) {
    let xCount__Col0 = 0;
    let xCount__Col1 = 0;
    let xCount__Col2 = 0;
    let oCount__Col0 = 0;
    let oCount__Col1 = 0;
    let oCount__Col2 = 0;
    for (var i = 0; i < cols; i++) {
      if (board[i][0].innerHTML === "X") {
        xCount__Col0++;
      } else if (board[i][0].innerHTML === "O") {
        oCount__Col0++;
      }

      if (board[i][1].innerHTML === "X") {
        xCount__Col1++;
      } else if (board[i][1].innerHTML === "O") {
        oCount__Col1++;
      }

      if (board[i][2].innerHTML === "X") {
        xCount__Col2++;
      } else if (board[i][2].innerHTML === "O") {
        oCount__Col2++;
      }
    }

    if (
      xCount__Col0 === cols ||
      xCount__Col1 === cols ||
      xCount__Col2 === cols ||
      oCount__Col0 === cols ||
      oCount__Col1 === cols ||
      oCount__Col2 === cols
    ) {
      return true;
    }

    return false;
  }

  function checkDiags(board) {
    let xCount__diag1 = 0;
    let oCount__diag1 = 0;
    let xCount__diag2 = false;
    let oCount__diag2 = false;

    for (var i = 0; i < rows; i++) {
      if (board[i][i].innerHTML === "X") {
        xCount__diag1++;
      } else if (board[i][i].innerHTML === "O") {
        oCount__diag1++;
      }
    }

    if (
      board[0][2].innerHTML === "X" &&
      board[1][1].innerHTML === "X" &&
      board[2][0].innerHTML === "X"
    ) {
      xCount__diag2 = true;
    } else if (
      board[0][2].innerHTML === "O" &&
      board[1][1].innerHTML === "O" &&
      board[2][0].innerHTML === "O"
    ) {
      oCount__diag2 = true;
    }

    if (
      xCount__diag1 === rows ||
      oCount__diag1 === rows ||
      xCount__diag2 === true ||
      oCount__diag2 === true
    ) {
      return true;
    } else {
      return false;
    }
  }

  function checkForDraw(board) {
    return false;
  }
});