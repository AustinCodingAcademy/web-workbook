'use strict';
$(document).ready(function() {
  // Put app logic in here
  // Declares the variables for the number, letterNumber - 1 or 2, that is used
  // to dynamically set the 'X' or 'O' token variable of gameToken
  let letterNumber = (Math.floor(Math.random()*2)+1);
  let gameToken = '';
  let lis = $('.singleCell');
  // Then using the letterNumber variable output, set the gameToken value
  if (letterNumber === 1) {
    gameToken = 'O';
  } else {
    gameToken = 'X';
  }

  // Declares the starting token value in the #startMessage element
  $('#startMessage').text(gameToken + ' goes first!');

  // This block of code runs when a element with the 'singleCell' class is clicked
  $('.singleCell').on('click', event, ()=> {
    let isEmpty = $(event.currentTarget).text();  // Gets the value of the element that is clicked
    if (isEmpty === '') {   // checks to see if the cell is empty
      $(event.currentTarget).text(gameToken);  // If the element is empty, insert the gameToken string
      if (gameToken === 'O') {  // Changes the value of the gameToken string to opposite
        gameToken = 'X';
      } else {
        gameToken = 'O';
      }
    }
    endGame();
    $('#startMessage').text(gameToken + ' goes next!'); // Updates the #startMessage to show who goes next
  });

  // This block of code clears the game board
  $('#clear').click(reset); // Reset button that triggers the reset function
  function reset() {
    $('.row').children().text('');  // Runs to set contents of the children of '.row' class to blank
    letterNumber = (Math.floor(Math.random()*2)+1); // Recalcs random number of 1 or 2 and assigns to letterNumber
      if (letterNumber === 1) { // Sets value of gameToken based on letterNumber value
        gameToken = 'O';
      } else {
        gameToken = 'X';
      }
    $('#startMessage').text(gameToken + ' goes first!');  // Updates the #startMessage element
  }

  // Playing against the computer
  // Runs a function that rolls through a 'while' loop and checks for empty divs
/*   function computerPick() {
    let cPick = '';
    while (cPick === '') {
      if (lis[(Math.floor(Math.random()*9))] === '') {
        // $(this).text(gameToken);
        cPick = 'end';
        console.log(cPick);
      }
    }
  } */


  // Sets the array that loads and lays out the values in the divs
  let winState = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  // Runs through the array to determine if there is a winning solution
  // This is called each time a gameToken is called to be played by clicking the gameboard
  function endGame() {
    for (let a = 0; a < winState.length; a++) {
      let tally = 0;
      for (let b = 0; b < winState[a].length; b++){
        if ($(lis[winState[a][b]]).text() === 'X') {
          tally++;
        } else if ($(lis[winState[a][b]]).text() === 'O'){
          tally--;
        } 
      }
      if (tally === 3) {
        alert('X wins!');
        reset();
      } else if (tally === -3) {
        alert('O wins!');
        reset();
      } else  {
        let open = 0;
        $.each(lis, function() {
          if($(this).text() === ''){
            open++;
          }
        });
        if (open === 0) {
          alert("It's a tie!");
          reset();
        }
      }
    }
  };

});