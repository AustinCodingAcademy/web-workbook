'use strict';

$(document).ready(function () {
  //Set up global variables
  var board2;
  let i = 0;
  let j = 0;

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