'use strict';

$(document).ready(function () {
  // set up global variables
  let gameOver = false;
  let currentTurn = 1;
  let currentPlayer = "Player One";
  let playerOneGamesWon = 0;
  let playerTwoGamesWon = 0;
  $("#turntracker").text(currentPlayer + " - Turn: " + currentTurn);
  $("#turntracker").addClass("playerOne");


  $(".square").click(function () { //Runs when any square is clicked
    if (!gameOver) { //If game over has not happened, allow clicking of boxes
      if (currentPlayer === "Player One") {
        if ($(this).text() == "") { //Check if clicked square is empty
          $(this).text("X"); //Place player character in square
          $(this).addClass("playerOne"); //Add class to element to change font to player's color

          if (checkWin("X") === true) {  //Check to see if move met win condition
            playerWins(currentPlayer);
            return;
          } else if (checkDraw() === true) { //Otherwise check to see if move creates draw condition
            $("#announce-winner").text("Draw!");
            gameOver = true;
          }
          else { //If not win or draw, advance game by switching turns
            currentPlayer = "Player Two"; //set current player to playerTwo
            IncrementCounter();
          }    
        } else {
          //Square is occupied, do nothing
        }
      } else if (currentPlayer === "Player Two") {
        if ($(this).text() == "") { //Check if clicked square is empty
          $(this).text("O"); //Place player character in square
          $(this).addClass("playerTwo"); //Add class to element to change font to player's color

          if (checkWin("O") === true) { //Check to see if move met win condition
            playerWins(currentPlayer);
            return;
          } else if (checkDraw() === true) { //Otherwise check to see if move creates draw condition
            $("#announce-winner").text("Draw!");
            gameOver = true;
          }
          else { //If not win or draw, advance game by switching turns
            currentPlayer = "Player One"; //set current player to playerOne
            IncrementCounter();
          } 
        } else {
          //Square is occupied, do nothing
        }

      }

    }
  })

  //Clear Board button
  $("#clear").click(function () {
    //set up array of all squares
    let squares = $(".square");
    let i = 0;
    //for each square in array, make text blank/remove player classes
    for (i = 0; i < squares.length; i++) {
      $(squares[i]).text("");
      $(squares[i]).removeClass("playerOne");
      $(squares[i]).removeClass("playerTwo");
    }
    //Clears Win text
    $("#announce-winner").text("");
    //set current player to playerOne
    currentPlayer = "Player One";
    //Reset Turn counter
    currentTurn = 1;
    $("#turntracker").removeClass("playerOne");
    $("#turntracker").removeClass("playerTwo");
    $("#turntracker").text(currentPlayer + " - Turn: " + currentTurn);
    $("#turntracker").addClass("playerOne");
    //Resets gameOver
    gameOver = false;
  })

  function checkWin(playerLetter) { //Check for win conditions using player's turns letter
    //Rows
    //////////////////////////////////////////////////////////////////////////////////////
    //Top Row
    if ($(".square")[0].innerHTML == playerLetter && $(".square")[1].innerHTML == playerLetter && $(".square")[2].innerHTML == playerLetter) {
      gameOver = true;
    }
    //Middle Row
    if ($(".square")[3].innerHTML == playerLetter && $(".square")[4].innerHTML == playerLetter && $(".square")[5].innerHTML == playerLetter) {
      gameOver = true;
    }
    //Bottom Row
    if ($(".square")[6].innerHTML == playerLetter && $(".square")[7].innerHTML == playerLetter && $(".square")[8].innerHTML == playerLetter) {
      gameOver = true;
    }

    //Columns
    /////////////////////////////////////////////////////////////////////////////////////
    //Left Column
    if ($(".square")[0].innerHTML == playerLetter && $(".square")[3].innerHTML == playerLetter && $(".square")[6].innerHTML == playerLetter) {
      gameOver = true;
    }
    //Middle Column
    if ($(".square")[1].innerHTML == playerLetter && $(".square")[4].innerHTML == playerLetter && $(".square")[7].innerHTML == playerLetter) {
      gameOver = true;
    }
    //Right Column
    if ($(".square")[2].innerHTML == playerLetter && $(".square")[5].innerHTML == playerLetter && $(".square")[8].innerHTML == playerLetter) {
      gameOver = true;
    }

    //Diagonals
    //////////////////////////////////////////////////////////////////////////////////
    //Left To Right Diagonal
    if ($(".square")[0].innerHTML == playerLetter && $(".square")[4].innerHTML == playerLetter && $(".square")[8].innerHTML == playerLetter) {
      gameOver = true;
    }
    //Right To Left Diagonal
    if ($(".square")[2].innerHTML == playerLetter && $(".square")[4].innerHTML == playerLetter && $(".square")[6].innerHTML == playerLetter) {
      gameOver = true;
    }

    return gameOver;
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
      //Increment the Scoreboard counter
      playerTwoGamesWon++;
      $(".playertwoscore").text(playerTwoGamesWon)
    }

  }

  function IncrementCounter() {
    currentTurn++; //Increment Turn counter
    $("#turntracker").text(currentPlayer + " - Turn: " + currentTurn); //Update text for turn tracker
    if (currentPlayer === "Player One") {  //Remove opposite color classes to keep coloring consistent
      $("#turntracker").removeClass("playerTwo");
      $("#turntracker").addClass("playerOne");
    } else {
      $("#turntracker").removeClass("playerOne");
      $("#turntracker").addClass("playerTwo");
    }

  }

});