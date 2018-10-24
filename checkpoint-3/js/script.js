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
  //Set up global variables
  var board;
  let i = 0;
  let j = 0;
  let currentscore = 0; //Start with 0 score
  let scorekeeper = $('#scorekeeper'); //Assign player score variable
  $(scorekeeper).text(currentscore);//Sets score text to currentscore

  newGame('easy'); //Start new game with easy difficulty
  $('#newgame').hide(); //Hides new game button

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
    currentscore = 0;//Start with current score of 0
    $(scorekeeper).text(currentscore);//Sets score text to currentscore
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
      board.click(eventObject.target);//Runs click function in board with square clicked as parameter
    });

    return board;//Returns board object
  }

  // Board Object
  function Board(row, col) {
    this.row = row;
    this.col = col;
    this.spaces = [];//Set up new array for all squares
    this.gameOver = false;
    let bombspaces = []; //Set up new array just for squares containing bombs
    var possible = "123B"; //List of possible text from which to choose for squares

    this.render = function () {
      var spaces = "";//Initialize spaces empty
      for (i = 1; i <= row; i++) {//For each row
        for (j = 1; j <= col; j++) {//For each column
          spaces = spaces.concat('<div class="square" data-row="' + i + '" data-col="' + j + '"><span></span>&nbsp</div>');//Create new square element, add to spaces
        }
        spaces = spaces.concat('<br />');//Add break to end of row, used for separation
      }
      $('#board').empty();//Empty grid
      $('#board').append(spaces);//Add newly created squares to grid
      let squares = $(".square");//Get all squares
      for (i = 0; i < squares.length; i++) { //For each square available in grid, assign a random text entries from list of possible texts above
        $(squares[i]).children("span").text(possible.charAt(Math.floor(Math.random() * possible.length)));//Select random character from possible list above, place inside span text
        $(squares[i]).children("span").hide(); //Hide text within squares
        if ($(squares[i]).children("span").text() === "1") { //Assigning colors to different possible texts
          $(squares[i]).children("span").addClass("blue");
        }
        if ($(squares[i]).children("span").text() === "2") {
          $(squares[i]).children("span").addClass("green");
        }
        if ($(squares[i]).children("span").text() === "3") {
          $(squares[i]).children("span").addClass("red");
        }
        if ($(squares[i]).children("span").text() === "B") {
          $(squares[i]).children("span").text("");//Removes 'B' from span
          $(squares[i]).children("span").append('<img src="./img/bomb.jpg" class="imgbomb" ></img>');//Appends IMG of bomb to square
          bombspaces.push($(this)); //If square is to have bomb, add to bombspaces array
        }
      }
      $("#message2").text("Avoid the " + bombspaces.length + " bombs!"); //Tell player how many squares have bombs in them
    }

    this.click = function (target_object) { //Fires when any square is clicked
      let squares = $(".square");//All squares in grid
      if (!this.gameOver) { //If game over has not happened
        $(target_object).children("span").show(); //Show the text inside of square
        $(target_object).addClass("chosen");//Add .chosen class
        if ($(target_object).children("span").text() === "") { //If square clicked contains a bomb
          for (i = 0; i < squares.length; i++) { //For each square in grid
            $(squares[i]).children("span").show(); //Reveal the text of every square
            $(squares[i]).addClass("chosen");//Add .chosen class
            if ($(squares[i]).children("span").text() === "") {//Check if square contains bomb
              $(squares[i]).css("background-color", "red");//change color to red
            }
            $("#message2").text("You hit a Bomb!  Game Over!"); //Display message to player
            this.gameOver = true; //set game over to true
            $("#newgame").show();//Show new game button
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

  newGame2(); //Start new game
  $('#newgame2').hide(); //Hides new game button
  $("#winmessage").hide(); //Hides win message

  $('#newgame2').click(function (eventObject) { //Fires when new game button is clicked
    newGame2(); //Runs new game function
    $('#newgame2').hide(); //Hides new game button
    $("#winmessage").hide(); //Hides win message
  });

  function newGame2() { //Function for creating a new game
    board2 = new Board2(4, 4);//Creates a new 4x4 game board object
    board2.render(); //Renders board object
    board2.gameOver2 = false; //Sets game over to false

    $('.square2').click(function (eventObject) { //Fires when square is clicked
      board2.click(eventObject.target);//Runs click function in board with square clicked as parameter
    });

    return board2;//Return board object
  }

  // Board Object
  function Board2(row, col) {
    this.row = row;
    this.col = col;
    this.spaces = [];
    this.gameOver2 = false;
    let possible = [1, 2, 3, 4, 5, 6, 7, 8]; //List of possible text from which to choose for squares
    let timesflipped = 0;//Keeps track of number of times squares flipped
    let firstnumber = 0;//Variable to store first number flipped
    let secondnumber = 0;//Same for second number, used for comparision

    this.render = function () {
      var spaces = "";//Initialize spaces empty
      for (i = 1; i <= row; i++) {//For each row
        for (j = 1; j <= col; j++) {//For each column
          spaces = spaces.concat('<div class="square2" data-row="' + i + '" data-col="' + j + '"><span></span>&nbsp</div>');//Create new square2 element, add to spaces
        }
        spaces = spaces.concat('<br />');//Add break to end of row, used for separation
      }
      $('#board2').empty();//Empty grid
      $('#board2').append(spaces);//Add newly created spaces to grid

      //Evenly distribute numbers in pairs to squares
      let squares2 = $(".square2");//Gets all squares
      for (i = 0; i < squares2.length; i++) { //For each square available in grid, assign a random text entries from list of possible texts above
        let number = 0;//Initialize number variable
        let i2 = 0;
        number = possible[Math.floor(Math.random() * possible.length)];//Select random character from possible list above, place inside span text

        //Checking for existing squares that have number and removing number from list if exist.
        console.log("NOW ON SQUARE: " + i);//Show what square your on
        console.log("NUMBER IS: " + number);//Show current selected number
        for(i2=0;i2<squares2.length;i2++){//For each square in the grid
          console.log("checking square " + i2 + " for number " + number);
          if($(squares2[i2]).children("span").text() == number){//Check if square contains number selected, if so remove number from possible list to prevent additional assigning
            console.log("square " + i2 + " already has number: " + number);
            console.log("removing " + number + " from list of numbers");
            let index = possible.indexOf(number);//Gets index of number in array
            possible.splice(index, 1);//Removes number from array
          }
        }
        
        $(squares2[i]).children("span").text(number);//Places number inside span text of square
        console.log("SQUARE " + i + " NOW HAS NUMBER " + number);
        console.log("");//To separate squares within log
      }
      $(".square2").addClass("flipped"); //Start with all cards flipped

      setTimeout(function () { //Reveal cars to player. after one second, flip cards back over
        $(".square2").removeClass("flipped");//Removes flipped class
        $(".square2").children("span").hide();//Hides text of square
      }, 2000);
    }

    this.click = function (target_object) { //Fires when any square is clicked
      if (!$(target_object).hasClass("flipped")) {//If square has not been flipped
        $(target_object).children("span").show(); //Show the text inside of square
        $(target_object).addClass("flipped"); //Color square when flipped
        if (timesflipped === 0) { //If first square flipped
          firstnumber = $(target_object).children("span").text(); //Put text from flipped square into firstnumber
          timesflipped++;//Increase timesflipped
          return;
        }
        else if (timesflipped === 1) { //If second square flipped
          secondnumber = $(target_object).children("span").text(); //Put text from flipped square into secondnumber
          if (firstnumber === secondnumber) {//If number from first square flipped matches second
            let matched = $(".flipped"); //Squares that are matching
            for (i = 0; i < matched.length; i++) {
              $(matched[i]).addClass("matched");//For each square matching, add .matched class
            }
            firstnumber, secondnumber, timesflipped = 0;//Reset all variables to 0
            checkWin();//Check for win condition
            return;
          } else {
            let squaresNotFlipped = $(".square2").not(".matched");//Gets all squares not currently matched
            setTimeout(function () {
              hideSquares(squaresNotFlipped);//Hides those squares text
            }, 500);
            firstnumber, secondnumber, timesflipped = 0;//Reset all variables to 0
            return;
          }
        }
      }
    }

    function hideSquares(target) {
      for (i = 0; i < target.length; i++) {//For each square in list
        $(target[i]).children("span").hide();//Hide text of square
        $(target[i]).removeClass("flipped");//Removes .flipped class
      }
    }

    function checkWin() {
      console.log($(".matched").length);
      console.log($(".square2").length);
      if ($(".matched").length === $(".square2").length) {//If number of matched squares equal total number of squares in grid, display win message and option for new game
        $("#newgame2").show();
        $("#winmessage").show();
      }
    }
  }
});