'use strict';

$(document).ready(function () {
  //Set up global variables
  var board;
  let i = 0;
  let j = 0;
  let currentscore = 0; //Start with 0 score
  let scorekeeper = $('#scorekeeper'); //Assign player score variable
  $(scorekeeper).text(currentscore); //Sets score text to currentscore

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
    currentscore = 0; //Start with current score of 0
    $(scorekeeper).text(currentscore); //Sets score text to currentscore
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
      board.click(eventObject.target); //Runs click function in board with square clicked as parameter
    });

    return board; //Returns board object
  }

  // Board Object
  function Board(row, col) {
    this.row = row;
    this.col = col;
    this.spaces = []; //Set up new array for all squares
    this.gameOver = false;
    let bombspaces = []; //Set up new array just for squares containing bombs
    var possible = "123B"; //List of possible text from which to choose for squares

    this.render = function () {
      var spaces = ""; //Initialize spaces empty
      for (i = 1; i <= row; i++) { //For each row
        for (j = 1; j <= col; j++) { //For each column
          spaces = spaces.concat('<div class="square" data-row="' + i + '" data-col="' + j + '"><span></span>&nbsp</div>'); //Create new square element, add to spaces
        }
        spaces = spaces.concat('<br />'); //Add break to end of row, used for separation
      }
      $('#board').empty(); //Empty grid
      $('#board').append(spaces); //Add newly created squares to grid
      let squares = $(".square"); //Get all squares
      for (i = 0; i < squares.length; i++) { //For each square available in grid, assign a random text entries from list of possible texts above
        $(squares[i]).children("span").text(possible.charAt(Math.floor(Math.random() * possible.length))); //Select random character from possible list above, place inside span text
        $(squares[i]).children("span").hide(); //Hide text within squares
        if ($(squares[i]).children("span").text() === "1") { //Assigning colors to different possible texts
          $(squares[i]).addClass("blue");
        }
        if ($(squares[i]).children("span").text() === "2") {
          $(squares[i]).addClass("green");
        }
        if ($(squares[i]).children("span").text() === "3") {
          $(squares[i]).addClass("red");
        }
        if ($(squares[i]).children("span").text() === "B") {
          $(squares[i]).children("span").text(""); //Removes 'B' from span
          $(squares[i]).children("span").append('<img src="./img/bomb.jpg" class="imgbomb" ></img>'); //Appends IMG of bomb to square
          bombspaces.push($(this)); //If square is to have bomb, add to bombspaces array
        }
      }
      $("#message2").text("Avoid the " + bombspaces.length + " bombs!"); //Tell player how many squares have bombs in them
    }

    this.click = function (target_object) { //Fires when any square is clicked
      if (!this.gameOver) { //If game over has not happened
        if (!$(target_object).parent().hasClass("chosen")) {//Check if square has not already been chosen
          let squares = $(".square"); //All squares in grid
          $(target_object).children("span").show(); //Show the text inside of square
          $(target_object).addClass("chosen"); //Add .chosen class
          if ($(target_object).children("span").text() === "") { //If square clicked contains a bomb
            for (i = 0; i < squares.length; i++) { //For each square in grid
              $(squares[i]).children("span").show(); //Reveal the text of every square
              $(squares[i]).addClass("chosen"); //Add .chosen class
              if ($(squares[i]).children("span").text() === "") { //Check if square contains bomb
                $(squares[i]).css("background-color", "red"); //change color to red
              }
              $("#message2").text("You hit a Bomb!  Game Over!"); //Display message to player
              this.gameOver = true; //set game over to true
              $("#newgame").show(); //Show new game button
            }
          } else { //Otherwise, increase player score by number inside of square
            $(scorekeeper).text(parseInt($(scorekeeper).text()) + parseInt($(target_object).children("span").text()));
          }
        }
      }
    }
  }
});