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
      if ((move%2)==1) { $(this).append("X").css({fontSize: '50px', color: 'red'}); } 
      else { $(this).append("O").css({fontSize: '50px', color: 'blue'}); }
      move++; 
      if (checkForWin()!=-1 && checkForWin()!="") { 
        if (checkForWin()=="X") { alert("Player 1 Winner!"); }
        else { alert("Player 2 Winner!"); }
        play = false; 
      }
    }
  });

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
    // check rows
    if      ((box1==box2) && (box2==box3)) { return box3; }
    else if ((box4==box5) && (box5==box6)) { return box6; }	
    else if ((box7==box8) && (box8==box9)) { return box9; }
    // check columns
    else if ((box1==box4) && (box4==box7)) { return box7; }
    else if ((box2==box5) && (box5==box8)) { return box8; }
    else if ((box3==box6) && (box6==box9)) { return box9; }
    // check diagonals
    else if ((box1==box5) && (box5==box9)) { return box9; }
    else if ((box3==box5) && (box5==box7)) { return box7; }
    // no winner
    return -1;
  }

});



// Write function: clear board
    
// Write function: check for win 

// Write function: winner text

// Write function: check for draw

// Write function: draw text


