'use strict';

$(document).ready(function () {
  // Put app logic in here
  let gameOver = false;
  let currentTurn = 1;
  let currentPlayer = "Player One";
  let playerOneGamesWon = 0;
  let playerTwoGamesWon = 0;
  $("#turntracker").text(currentPlayer + " - Turn: " + currentTurn);
  $("#turntracker").addClass("playerOne");


  $(".square").click(function () {
    if (!gameOver) {
      //To see what square you clicked on
      console.log($(this).attr("data-cell"));
      if (currentPlayer === "Player One") {
        //if square is not used, place an X in the box clicked
        if ($(this).text() == "") {
          $(this).text("X");
          //Add class to element to change font to player's color
          $(this).addClass("playerOne");

          //Check to see if move creates draw condition
          if (checkDraw() === true) {
            $("#announce-winner").text("Draw!");
            gameOver = true;
            return;
          }

          //Check to see if move met win condition
          if (checkWin() === true) {
            playerWins(currentPlayer);
          } else {
            //set current player to playerTwo
            currentPlayer = "Player Two";
            IncrementCounter();
            //Increment Turn counter
            currentTurn++;
            $("#turntracker").text(currentPlayer + " - Turn: " + currentTurn);
            $("#turntracker").removeClass("playerOne");
            $("#turntracker").addClass("playerTwo");
          }

        } else {
          console.log("Square is taken!");
        }
      } else if (currentPlayer === "Player Two") {
        //if square is not used, place an O in the box clicked
        if ($(this).text() == "") {
          $(this).text("O");
          //Add class to element to change font to player's color
          $(this).addClass("playerTwo");

          //Check to see if move creates draw condition
          if (checkDraw() === true) {
            $("#announce-winner").text("Draw!");
            gameOver = true;
            return;
          }

          //Check to see if move met win condition
          if (checkWin() === true) {
            playerWins(currentPlayer);
          } else {
            //set current player to playerOne
            currentPlayer = "Player One";
            IncrementCounter();
          }

        } else {
          console.log("Square is taken!");
        }

      }

    }
  })



  //Clear Board button
  /////////////////////////////////////////////////////////////////////////////////////
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
  /////////////////////////////////////////////////////////////////////////////////////////

  //Check for Win condition by checking if boxes are filled in straight lines.
  let winCombos = [
    //rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    //columns
    [0, 3, 7],
    [1, 4, 6],
    [2, 5, 8],

    //diagonals
    [0, 4, 8],
    [2, 4, 7]

  ];

  function checkWin() {
    if (currentPlayer === "Player One") {
      //Check for Player One wins
      //Rows
      //////////////////////////////////////////////////////////////////////////////////////
      //Top Row
      if ($(".square")[0].innerHTML == "X" && $(".square")[1].innerHTML == "X" && $(".square")[2].innerHTML == "X") {
        gameOver = true;
      }
      //Middle Row
      if ($(".square")[3].innerHTML == "X" && $(".square")[4].innerHTML == "X" && $(".square")[5].innerHTML == "X") {
        gameOver = true;
      }
      //Bottom Row
      if ($(".square")[6].innerHTML == "X" && $(".square")[7].innerHTML == "X" && $(".square")[8].innerHTML == "X") {
        gameOver = true;
      }

      //Columns
      /////////////////////////////////////////////////////////////////////////////////////
      //Left Column
      if ($(".square")[0].innerHTML == "X" && $(".square")[3].innerHTML == "X" && $(".square")[6].innerHTML == "X") {
        gameOver = true;
      }
      //Middle Column
      if ($(".square")[1].innerHTML == "X" && $(".square")[4].innerHTML == "X" && $(".square")[7].innerHTML == "X") {
        gameOver = true;
      }
      //Right Column
      if ($(".square")[2].innerHTML == "X" && $(".square")[5].innerHTML == "X" && $(".square")[8].innerHTML == "X") {
        gameOver = true;
      }

      //Diagonals
      //////////////////////////////////////////////////////////////////////////////////
      //Left To Right Diagonal
      if ($(".square")[0].innerHTML == "X" && $(".square")[4].innerHTML == "X" && $(".square")[8].innerHTML == "X") {
        gameOver = true;
      }
      //Right To Left Diagonal
      if ($(".square")[2].innerHTML == "X" && $(".square")[4].innerHTML == "X" && $(".square")[6].innerHTML == "X") {
        gameOver = true;
      }

    } else {
      //Check for Player Two wins
      //Rows
      //////////////////////////////////////////////////////////////////////////////////////
      //Top Row
      if ($(".square")[0].innerHTML == "O" && $(".square")[1].innerHTML == "O" && $(".square")[2].innerHTML == "O") {
        gameOver = true;
      }
      //Middle Row
      if ($(".square")[3].innerHTML == "O" && $(".square")[4].innerHTML == "O" && $(".square")[5].innerHTML == "O") {
        gameOver = true;
      }
      //Bottom Row
      if ($(".square")[6].innerHTML == "O" && $(".square")[7].innerHTML == "O" && $(".square")[8].innerHTML == "O") {
        gameOver = true;
      }

      //Columns
      /////////////////////////////////////////////////////////////////////////////////////
      //Left Column
      if ($(".square")[0].innerHTML == "O" && $(".square")[3].innerHTML == "O" && $(".square")[6].innerHTML == "O") {
        gameOver = true;
      }
      //Middle Column
      if ($(".square")[1].innerHTML == "O" && $(".square")[4].innerHTML == "O" && $(".square")[7].innerHTML == "O") {
        gameOver = true;
      }
      //Right Column
      if ($(".square")[2].innerHTML == "O" && $(".square")[5].innerHTML == "O" && $(".square")[8].innerHTML == "O") {
        gameOver = true;
      }

      //Diagonals
      //////////////////////////////////////////////////////////////////////////////////
      //Left To Right Diagonal
      if ($(".square")[0].innerHTML == "O" && $(".square")[4].innerHTML == "O" && $(".square")[8].innerHTML == "O") {
        gameOver = true;
      }
      //Right To Left Diagonal
      if ($(".square")[2].innerHTML == "O" && $(".square")[4].innerHTML == "O" && $(".square")[6].innerHTML == "O") {
        gameOver = true;
      }

    }

    return gameOver;
  }

  function checkDraw() {
    let draw = false;
    //Check if all squares are filled
    if ($(".square:empty").length === 0) {
      //Set draw to true
      draw = true;
    } else {

    }
    return draw;
  };

  function playerWins(playerWhoWon) {
    //Display that player won
    $("#announce-winner").text(playerWhoWon + " Wins!");
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
    //Increment Turn counter
    currentTurn++;
    $("#turntracker").text(currentPlayer + " - Turn: " + currentTurn);
    if(currentPlayer === "Player One")
    {
      $("#turntracker").removeClass("playerTwo");
      $("#turntracker").addClass("playerOne");
    }
    else
    {
      $("#turntracker").removeClass("playerOne");
      $("#turntracker").addClass("playerTwo");
    }
    
  }

});