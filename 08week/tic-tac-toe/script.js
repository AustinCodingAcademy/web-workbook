'use strict';

$(document).ready(function () {
  //Set up global variables
  let gameOver = false;
  let currentTurn = 1;
  let currentPlayer = "Player One";
  let playerOneGamesWon = 0;
  let playerTwoGamesWon = 0;
  $("#turntracker").text(currentPlayer + " - Turn: " + currentTurn);
  $("#turntracker").addClass("playerOne");
  let squares = $(".square"); //Set up array of all squares


  $(".square").click(function () { //Runs when any square is clicked
    if (!gameOver) { //If game over has not happened, allow clicking of boxes
      if ($(this).text() == "") { //Check if clicked square is empty
        $(this).text(currentPlayer === "Player One" ? "X" : "O"); //Place player character in square
        $(this).addClass(currentPlayer === "Player One" ? "playerOne" : "playerTwo"); //Add class to element to change font to player's color

        if (checkWin(currentPlayer === "Player One" ? "X" : "O") === true) { //Check to see if move met win condition
          playerWins(currentPlayer);
          gameOver = true;
          return;
        } else if (checkDraw() === true) { //Otherwise check to see if move creates draw condition
          $("#announce-winner").text("Draw!");
          gameOver = true;
        } else { //If not win or draw, advance game by switching turns
          if (currentPlayer === "Player One") {
            currentPlayer = "Player Two"; //Set current player to Player Two
          } else {
            currentPlayer = "Player One"; //Set current player to Player One
          }
          IncrementCounter();
        }
      } else {
        //Square is occupied, do nothing
      }
    }
  })

  //Clear Board button
  $("#clear").click(function () {
    let i = 0;
    for (i = 0; i < squares.length; i++) { //For each square in array, make text blank/remove player classes
      $(squares[i]).text("");
      $(squares[i]).removeClass("playerOne");
      $(squares[i]).removeClass("playerTwo");
    }
    $("#announce-winner").text(""); //Clears Win text
    currentPlayer = "Player One"; //Set current player to Player One
    currentTurn = 1; //Reset Turn counter
    $("#turntracker").removeClass("playerOne");
    $("#turntracker").removeClass("playerTwo");
    $("#turntracker").text(currentPlayer + " - Turn: " + currentTurn);
    $("#turntracker").addClass("playerOne");
    gameOver = false; //Resets gameOver
  })

  let winCombos = [
    //Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //Diagonals
    [0, 4, 8],
    [2, 4, 6]
  ]

  function checkWin(playerLetter) { //Check for win conditions using player's turns letter by looping though all possible win combinations, and seeing if players letter exists in all three in the combo.
    return winCombos.some(function (threeInARow) {
      return threeInARow.every(function (square) {
        return $(squares[square]).text() === playerLetter;
      });
    });
  }

  function checkDraw() { //Checks how many squares are still empty, and if 0 then draw
    let draw = false;
    if ($(".square:empty").length === 0) {
      draw = true; //Set draw to true
    } else {
      //Do nothing
    }
    return draw;
  };

  function playerWins(playerWhoWon) {
    $("#announce-winner").text(playerWhoWon + " Wins!"); //Display that player won
    if (playerWhoWon === "Player One") {
      //Increment the Scoreboard counter
      playerOneGamesWon++;
      $(".playeronescore").text(playerOneGamesWon)
    } else {
      playerTwoGamesWon++;
      $(".playertwoscore").text(playerTwoGamesWon)
    }

  }

  function IncrementCounter() {
    currentTurn++; //Increment Turn counter
    $("#turntracker").text(currentPlayer + " - Turn: " + currentTurn); //Update text for turn tracker
    if (currentPlayer === "Player One") { //Remove opposite color classes to keep coloring consistent
      $("#turntracker").removeClass("playerTwo");
      $("#turntracker").addClass("playerOne");
    } else {
      $("#turntracker").removeClass("playerOne");
      $("#turntracker").addClass("playerTwo");
    }

  }

});