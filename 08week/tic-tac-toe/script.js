'use strict';

$(document).ready(function () {
  // Put app logic in here
  //create X and O

  let playx = 'X';
  //event handler  for playing the game
  $('div[data-cell]').on('click', function (event) {
    //variable to target/store cell value of dataset
    let pos = event.target.dataset.cell
    //adds child div within div with appropriate letter
    $(this).prepend(playx);
    //logic for alternating players
    if (playx === 'X') {
      //checks for win
      if(isWinninClick("x",pos )) {
        $('#announce-winner').text('Player X wins!');   
       }          
      playx = 'O';
      $(this).off('click');           
    } else {
       if(isWinninClick("o",pos) ) {
        $('#announce-winner').text('Player O wins!');
    } 
      playx = 'X';
      $(this).off('click');             
    }
    //check for clear board and restart with X
    $('#clear').on('click', function () {
      //reloads page which clears board and resets click event 
      location.reload(true);
    });
  });
});
//json object to store values of datacells for isWinninclick func
let boardState = {
  "0": undefined,
  "1": undefined,
  "2": undefined,
  "3": undefined,
  "4": undefined,
  "5": undefined,
  "6": undefined,
  "7": undefined,
  "8": undefined,
}
//surround index with ""
//winner check function
function isWinninClick(letter, position) {
  boardState[position] = letter 
  if (boardState[0] === letter && boardState[1] === letter  && boardState[2] === letter) {
    return true;  
  } else if (boardState[3] === letter && boardState[4] === letter  && boardState[5] === letter) {
    return true;
  } else if (boardState[6] === letter && boardState[7] === letter  && boardState[8] === letter) {
    return true;
  } else if (boardState[6] === letter && boardState[7] === letter  && boardState[8] === letter) {
    return true;
  } else if (boardState[0] === letter && boardState[3] === letter  && boardState[6] === letter) {
    return true;
  } else if (boardState[1] === letter && boardState[4] === letter  && boardState[7] === letter) {
    return true;
  } else if (boardState[2] === letter && boardState[5] === letter  && boardState[8] === letter) {
    return true;
  } else if (boardState[0] === letter && boardState[4] === letter  && boardState[8] === letter) {
    return true;
  } else if (boardState[2] === letter && boardState[4] === letter  && boardState[6] === letter) {
    return true;
  } else if (boardState['0'] != undefined && boardState['1'] != undefined && boardState['2'] != undefined && boardState['3'] != undefined && boardState['4'] != undefined && boardState['5'] != undefined && boardState['6'] != undefined && boardState['7'] != undefined && boardState['8' != undefined]) {
    $('#announce-winner').text('No More moves!');
  } 
}

