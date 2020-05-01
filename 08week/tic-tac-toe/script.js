'use strict';
// call jquery
// Put app logic in here - Tic Tac Toe
// alternate between players
/* Write function: put X's and O's in the boxes when yo
click (!!!only allow one selection!!!) */
$(document).ready(function(){

  var move = 1;
  var play = true;

  $("#gameBoard tr td").click(function() {
    if ($(this).text()=="" && play) {
      if ((move%2)==1) { $(this).append("X").css({fontSize: '50px', color: 'pink'}); } 
      else { $(this).append("O").css({fontSize: '50px', color: '#00ffff6f'}); }
      move++; 
      if (checkForWin()!=-1 && checkForWin()!="") { 
        // Write function: winner text
        if (checkForWin()=="X") { alert("Player 1 Winner!"); }
        // Write function: winner text
        else { alert("Player 2 Winner!"); }
        play = false; 
      }
    }
  });
  // Write function: clear board
  
  /* $('.reset').click (function () {
    let clearBoard = $("#gameBoard");
    let i = 0;
    for (i = 0; i < clearBoard.length; i++) {
      $(clearBoard[i]).text('');
    }
  } */


  // Write function: check for win 
  function checkForWin() {
    var box1 = $("#gameBoard tr:nth-child(1) td:nth-child(1)").text();
    var box2 = $("#gameBoard tr:nth-child(1) td:nth-child(2)").text();
    var box3 = $("#gameBoard tr:nth-child(1) td:nth-child(3)").text();
    var box4 = $("#gameBoard tr:nth-child(2) td:nth-child(1)").text();
    var box5 = $("#gameBoard tr:nth-child(2) td:nth-child(2)").text();
    var box6 = $("#gameBoard tr:nth-child(2) td:nth-child(3)").text();
    var box7 = $("#gameBoard tr:nth-child(3) td:nth-child(1)").text();
    var box8 = $("#gameBoard tr:nth-child(3) td:nth-child(2)").text();
    var box9 = $("#gameBoard tr:nth-child(3) td:nth-child(3)").text();
    // check all rows
    if      ((box1==box2) && (box2==box3)) { return box3; }
    else if ((box4==box5) && (box5==box6)) { return box6; }	
    else if ((box7==box8) && (box8==box9)) { return box9; }
    // check all columns
    else if ((box1==box4) && (box4==box7)) { return box7; }
    else if ((box2==box5) && (box5==box8)) { return box8; }
    else if ((box3==box6) && (box6==box9)) { return box9; }
    // check both diagonals
    else if ((box1==box5) && (box5==box9)) { return box9; }
    else if ((box3==box5) && (box5==box7)) { return box7; }
    // no winner
    return -1;
  }

});


    
// Write function: check for draw

// Write function: draw text


