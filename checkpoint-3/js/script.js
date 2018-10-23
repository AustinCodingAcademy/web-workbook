'use strict';

$(document).ready(function () {
  //Set up global variables
  let score = 0;
  let multiplier;
  let gameOver = false;
  var animationEvent = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
  $("#cookie").click(function () { //When Cookie image is clicked
    if (!gameOver) { //If game over has not happened
      $(this).addClass('on'); //Add 'on' class to cookie
      $(this).one(animationEvent, function (event) { //When animation ends, remove class
        $(this).removeClass('on')
      });

      //Increase counter by 1 point each click
      multiplier = parseInt($("#clicker-multiplier").text());
      score += multiplier; //Add multiplier amount to current score to get new score
      $("#clicker-score").text(score); //Update score text
    }
  });

  $("#btnspend100").mousedown(function () { //On mouse down event for first bonus button
    if (!gameOver) //If game over has not happened, allow click
    {
      if (score >= 100) { //If player score is greater or equal to 100
        $(this).css("background-color", "limegreen"); //Turns button color green
        score -= 100; //Subtract 100 from player score
        multiplier++; //Increase multiplier by one
        $("#clicker-multiplier").text(multiplier); //Update multiplier text
      } else { //If player score not over 100
        $(this).css("background-color", "red"); //Turn button color red
        $("#message").text("You do not have enough points!") //Display message to player
      }
    }
  });

  $("#btnspend500").mousedown(function () { //On mouse down event for second bonus button, same as above button
    if (!gameOver) {
      if (score >= 1000) {
        $(this).css("background-color", "limegreen");
        score -= 1000;
        multiplier *= 2;
        $("#clicker-multiplier").text(multiplier);
      } else {
        $(this).css("background-color", "red");
        $("#message").text("You do not have enough points!")
      }
    }
  });
  $("input").mouseup(function () { //On any inputs mouse up(Only ones are both bonus buttons)
    $(this).css("background-color", "dodgerblue"); //Return buttons to original color
    $("#message").text(""); //Remove message text
  });

  function incrementCounter() {
    if (!gameOver) { //If game over has not happened
      multiplier = parseInt($("#clicker-multiplier").text()); //Bind multiplier text to variable
      score += (1 * multiplier); //Set score equal to score plus multiplier
      $("#clicker-score").text(score); //Update current score
    }
  }
  setInterval(incrementCounter, 1000); //Runs IncrementCounter function once every second


  let count = 60; //Start with 60 seconds on timer

  let counter = setInterval(timer, 1000); //Run it every 1 second

  function timer() { //Timer to count down every second 
    count = count - 1;
    $("#timer").text("Timer: " + count);
    if (count <= 0) {
      clearInterval(counter);
      $("#timer").text("Time Up!"); //Display Time up to player
      $("#clicker-score").text("Final Score: " + score)
      gameOver = true; //Set game over to true
      return;
    }
  }


  // Minesweeper code
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var board;
  let i = 0;
  let j = 0;
  let currentscore = 0; //Start with 0 score
  let scorekeeper = $('#scorekeeper'); //Assign player score variable
  $(scorekeeper).text(currentscore);

  newGame('easy'); //Start new game with regular difficulty
  $('#newgame').hide(); //Hides New Game button

  $('#difficulty li').click(function (eventObject) { //Fires when any of the difficulty buttons are clicked
    $('#difficulty li').removeClass('selected'); //Removes 'selected' class from all difficulty buttons
    $(this).addClass('selected'); //Adds 'selected' class to difficulty player clicked
    var difficulty = $(this).attr('id'); //Sets difficulty variable to id of currently selected button
    newGame(difficulty); //Runs new game function with difficulty as parameter
    $('#newgame').hide(); //Hides new game button
  });

  $('#newgame').click(function (eventObject) { //Fires when new game button is clicked
    var difficulty = $('#difficulty li.selected').attr('id'); //Sets difficulty variable to id of currently selected button
    newGame(difficulty); //Runs new game function with difficulty as parameter
    $('#newgame').hide(); //Hides new game button
  });

  function newGame(difficulty) { //Function for creating a new game(needs difficulty parameter)
    currentscore = 0;
    $(scorekeeper).text(currentscore);
    switch (difficulty) { //Creates a new board, size depending on chosen difficulty
    case 'easy': //If easy is selected, create a board 6 x 8 squares
      board = new Board(6, 8);
      break;
    case 'hard': //If hard is selected, create a board 12 x 15 squares
      board = new Board(12, 15);
      break;
    case 'normal': //If normal is selected, create a board 8 x 10 squares
    default:
      board = new Board(8, 10);
      break;
    }
    board.render(); //Renders board object
    board.gameOver = false; //Sets game over to false

    $('.square').click(function (eventObject) { //Fires when square is clicked
      board.click(eventObject.target);
    });

    return board;
  }

  // Board Object
  function Board(row, col) {
    this.row = row;
    this.col = col;
    this.spaces = [];
    this.gameOver = false;
    let bombspaces = []; //Set up new array just for squares containing bombs
    var possible = "123B"; //List of possible text from which to choose for squares

    this.render = function () {
      var spaces = "";
      for (i = 1; i <= row; i++) {
        for (j = 1; j <= col; j++) {
          spaces = spaces.concat('<div class="square" data-row="' + i + '" data-col="' + j + '"><span></span>&nbsp</div>');
        }
        spaces = spaces.concat('<br />');
      }
      $('#board').empty();
      $('#board').append(spaces);
      let squares = $(".square");
      for (i = 0; i < squares.length; i++) { //For each square available in grid, assign a random text entries from list of possible texts above
        $(squares[i]).children("span").text(possible.charAt(Math.floor(Math.random() * possible.length)));
        $(squares[i]).children("span").hide(); //Hide text within squares
        if ($(squares[i]).children("span").text() === "1") { //Assigning colors to different possible texts
          $(squares[i]).children("span").addClass("blue");
        }
        if ($(squares[i]).children("span").text() === "2") {
          $(squares[i]).children("span").addClass("red");
        }
        if ($(squares[i]).children("span").text() === "3") {
          $(squares[i]).children("span").addClass("green");
        }
        if ($(squares[i]).children("span").text() === "B") {
          $(squares[i]).children("span").addClass("black");
          bombspaces.push($(this)); //If square is to have bomb, add to bombspaces array
        }
      }
      $("#message2").text("Avoid the " + bombspaces.length + " bombs!"); //Tell player how many squares have bombs in them
    }

    this.click = function (target_object) { //Fires when any square is clicked
      let squares = $(".square");
      if (!this.gameOver) { //If game over has not happened
        $(target_object).children("span").show(); //Show the text inside of square
        if ($(target_object).children("span").text() === "B") { //If square clicked contains a bomb
          for (i = 0; i < squares.length; i++) { //For each square in grid
            $(squares[i]).children("span").show(); //Reveal the text of every square
            $("#message2").text("You hit a Bomb!  Game Over!"); //Display message to player
            this.gameOver = true; //set game over to true
            $("#newgame").show();
          }
        } else { //Otherwise, increase player score by number inside of square
          $(scorekeeper).text(parseInt($(scorekeeper).text()) + parseInt($(target_object).children("span").text()));
        }
      }
    }
  }









  // Matching Pairs code
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var board2;
  let i2 = 0;
  let j2 = 0;

  newGame2(); //Start new game with regular difficulty
  $('#newgame2').hide(); //Hides New Game button
  $("#winmessage").hide(); //Hides win message

  $('#newgame2').click(function (eventObject) { //Fires when new game button is clicked
    newGame2(); //Runs new game function with difficulty as parameter
    $('#newgame2').hide(); //Hides new game button
    $("#winmessage").hide(); //Hides win message
  });

  function newGame2() { //Function for creating a new game(needs difficulty parameter)
    board2 = new Board2(4, 4);
    board2.render(); //Renders board object
    board2.gameOver2 = false; //Sets game over to false

    $('.square2').click(function (eventObject) { //Fires when square is clicked
      board2.click(eventObject.target);
    });

    return board2;
  }

  // Board Object
  function Board2(row, col) {
    this.row = row;
    this.col = col;
    this.spaces = [];
    this.gameOver2 = false;
    let possible = [1, 2, 3, 4, 5, 6, 7, 8]; //List of possible text from which to choose for squares
    let number1used = false;
    let number2used = false;
    let number3used = false;
    let number4used = false;
    let number5used = false;
    let number6used = false;
    let number7used = false;
    let number8used = false;
    let timesflipped = 0;
    let firstnumber = 0;
    let secondnumber = 0;

    this.render = function () {
      var spaces = "";
      for (i = 1; i <= row; i++) {
        for (j = 1; j <= col; j++) {
          spaces = spaces.concat('<div class="square2" data-row="' + i + '" data-col="' + j + '"><span></span>&nbsp</div>');
        }
        spaces = spaces.concat('<br />');
      }
      $('#board2').empty();
      $('#board2').append(spaces);

      //Evenly distribute numbers in pairs to squares
      let squares2 = $(".square2");
      for (i = 0; i < squares2.length; i++) { //For each square available in grid, assign a random text entries from list of possible texts above
        let number = 0;
        number = possible[Math.floor(Math.random() * possible.length)];
        if (number === 1 && !number1used) {
          number1used = true;
        } else if (number === 1 && number1used) {
          let index = possible.indexOf(number);
          possible.splice(index, 1);
        } else if (number === 2 && !number2used) {
          number2used = true;
        } else if (number === 2 && number2used) {
          let index = possible.indexOf(number);
          possible.splice(index, 1);
        } else if (number === 3 && !number3used) {
          number3used = true;
        } else if (number === 3 && number3used) {
          let index = possible.indexOf(number);
          possible.splice(index, 1);
        } else if (number === 4 && !number4used) {
          number4used = true;
        } else if (number === 4 && number4used) {
          let index = possible.indexOf(number);
          possible.splice(index, 1);
        } else if (number === 5 && !number5used) {
          number5used = true;
        } else if (number === 5 && number5used) {
          let index = possible.indexOf(number);
          possible.splice(index, 1);
        } else if (number === 6 && !number6used) {
          number6used = true;
        } else if (number === 6 && number6used) {
          let index = possible.indexOf(number);
          possible.splice(index, 1);
        } else if (number === 7 && !number7used) {
          number7used = true;
        } else if (number === 7 && number7used) {
          let index = possible.indexOf(number);
          possible.splice(index, 1);
        } else if (number === 8 && !number8used) {
          number8used = true;
        } else if (number === 8 && number8used) {
          let index = possible.indexOf(number);
          possible.splice(index, 1);
        }
        $(squares2[i]).children("span").text(number);
      }
      $(".square2").addClass("flipped"); //Start with all cards flipped

      setTimeout(function () { //Reveal cars to player. after one second, flip cards back over
        $(".square2").removeClass("flipped");
        $(".square2").children("span").hide();
      }, 1000);
    }

    this.click = function (target_object) { //Fires when any square is clicked
      if (!$(target_object).hasClass("flipped")) {
        $(target_object).children("span").show(); //Show the text inside of square
        $(target_object).addClass("flipped"); //Color square when flipped
        if (timesflipped === 0) { //If first square flipped
          firstnumber = $(target_object).children("span").text(); //Put text from flipped square into firstnumber
          timesflipped++;
          return;
        }
        if (timesflipped === 1) { //If second square flipped
          secondnumber = $(target_object).children("span").text(); //Put text from flipped square into secondnumber
          if (firstnumber === secondnumber) {
            let matched = $(".flipped"); //Squares that are matching
            for (i = 0; i < matched.length; i++) {
              $(matched[i]).addClass("matched");
              console.log(matched[i]);
            }
            console.log("found matching pair");
            firstnumber = 0;
            secondnumber = 0;
            timesflipped = 0;
            checkWin();
            return;
          } else {
            let squaresNotFlipped = $(".square2").not(".matched");
            setTimeout(function () {
              hideSquares(squaresNotFlipped);
            }, 500);
            firstnumber = 0;
            secondnumber = 0;
            timesflipped = 0;
            return;
          }
        }

        function hideSquares(target) {
          for (i = 0; i < target.length; i++) {
            $(target[i]).children("span").hide();
            $(target[i]).removeClass("flipped");
          }
        }

      }
    }

    function checkWin() {
      console.log($(".matched").length);
      console.log($(".square2").length);
      if ($(".matched").length === $(".square2").length) {
        $("#newgame2").show();
        $("#winmessage").show();
      }
    }
  }
});