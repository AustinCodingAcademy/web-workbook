'use st
rict';

// this jquery function forces the entire HTML page to load first before executing the function
// it's the same as function document.ready()
$(function(){
var player = 1;
var board = $('div[data-cell]');


$('div[data-cell]').click(function() {
    var box = $(this);
    var isBoxFilled = checkBoxForPrevTurn(this.innerHTML);
    if(isBoxFilled) {
      alert("Box is filled!  Choose another one!!");
    } else {
      var pattern = determinePattern();
      placeTurn(box,pattern);
      if (checkForWinner(pattern)) {
        alert ("Player " + player + " won!");
      }
      changePlayer();
    }
  });

  function checkBoxForPrevTurn(box) {
    if (box.text === 'X' || box.text === 'O')
      return true;
    else
      return false;
  }

  // assigns player 1 a pattern of 'x' and
  // player 2 a pattern of 'o'
  function determinePattern() {
    if (player === 1) {
      return 'X';
    } else {
      return 'O';
    }
  }

  function checkForWinner(pattern){
    // insert code here to check the current pattern
    // against the board

    return false;
  }

  // changes player variable between values 1 and 2
  function changePlayer() {
    // check if player is number 1
    if (player === 1) {
      // change to player 2
      player = 2;
    } else {
      // otherwise change to player 1
      player = 1;
    }
  }

  function placeTurn(box, pattern) {
      box.text(pattern);
  }

  function reset() {
    // change the player to 1
    // clear the innerHTML for all nodes in the board
    // write a click function also...
  }


});
