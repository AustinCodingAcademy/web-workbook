'use strict';

var token = "X";

$(document).on('ready', function() {
  // Put app logic in here
});

$("[data-cell]").click(function() {

  var cell = $(this); //which cell was picked

  if (cell.text() === "") { //if the cell is empty
    cell.text(token); //then you can write on it
    if(token === "X") { //if X is written, then the next one should be O
      token = "O"; //if X is written, then the next one should be O
    }
    else {
      token = "X"; //can also be written as:token = token === "X" ? "O" : "X";
    }
    isTheGameOver ();
  }

});

function isTheGameOver() {

  var cell0 = $("[data-cell=0]").text(); //this selects the text from cell 0
  var cell1 = $("[data-cell=1]").text();
  var cell2 = $("[data-cell=2]").text();
  var cell3 = $("[data-cell=3]").text();
  var cell4 = $("[data-cell=4]").text();
  var cell5 = $("[data-cell=5]").text();
  var cell6 = $("[data-cell=6]").text();
  var cell7 = $("[data-cell=7]").text();
  var cell8 = $("[data-cell=8]").text();
  var xwins = document.getElementById("announce-winner-X");
  var owins = document.getElementById("announce-winner-O");

  if(cell0 === "X" && cell4 === "X" && cell8 === "X") {
    xwins.style.visibility = "visible";
  }
  if(cell0 === "O" && cell4 === "O" && cell8 === "O") {
    owins.style.visibility = "visible";
  }


  if(cell2 === "X" && cell4 === "X" && cell6 === "X") {
    xwins.style.visibility = "visible";
  }
  if(cell2 === "O" && cell4 === "O" && cell6 === "O") {
    owins.style.visibility = "visible";
  }


  if(cell0 === "X" && cell3 === "X" && cell6 === "X") {
    xwins.style.visibility = "visible";
  }
  if(cell0 === "O" && cell3 === "O" && cell6 === "O") {
    owins.style.visibility = "visible";
  }


  if(cell1 === "X" && cell4 === "X" && cell7 === "X") {
    xwins.style.visibility = "visible";
  }
  if(cell1 === "O" && cell4 === "O" && cell7 === "O") {
    owins.style.visibility = "visible";
  }


  if(cell2 === "X" && cell5 === "X" && cell8 === "X") {
    xwins.style.visibility = "visible";
  }
  if(cell2 === "O" && cell5 === "O" && cell8 === "O") {
    owins.style.visibility = "visible";
  }


  if(cell0 === "X" && cell1 === "X" && cell2 === "X") {
    xwins.style.visibility = "visible";
  }
  if(cell0 === "O" && cell1 === "O" && cell2 === "O") {
    owins.style.visibility = "visible";
  }


  if(cell3 === "X" && cell4 === "X" && cell5 === "X") {
    xwins.style.visibility = "visible";
  }
  if(cell3 === "O" && cell4 === "O" && cell5 === "O") {
    owins.style.visibility = "visible";
  }


  if(cell6 === "X" && cell7 === "X" && cell8 === "X") {
    xwins.style.visibility = "visible";
  }
  if(cell6 === "O" && cell7 === "O" && cell8 === "O") {
    owins.style.visibility = "visible";
  }

};

$(".close").click(function() {
  $("#announce-winner-X").hide();
  $("#announce-winner-O").hide();
});

$("#clear").click(function(){
  $("[data-cell]").text("");
});
