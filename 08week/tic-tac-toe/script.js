'use strict';

$(document).ready(function() {

  let shape = 'X';

  $("[data-cell]").click(function() {
    console.log(this + "whatever this is");
    var theCell = $(this).attr('data-cell');
    console.log(theCell + " has been clicked");

    if (this.childNodes.length === 0) {
      console.log("the cell is empty");
      if (shape === 'X') {
        shape = 'O';
      } else {
        shape = 'X';
      }
      $(this).text(shape).promise().then(checkForWins);
    } else {
      alert("You can't play here! You cheater!!")
    }
  });

  function checkForWins () {
    var c1 = $("[data-cell*='0']").text();
    console.log("Data cell 0 is " + c1);
    var c2 = $("[data-cell*='1']").text();
    console.log("Data cell 1 is " + c2);
    var c3 = $("[data-cell*='2']").text();
    console.log("Data cell 2 is " + c3);
    var c4 = $("[data-cell*='3']").text();
    console.log("Data cell 3 is " + c4);
    var c5 = $("[data-cell*='4']").text();
    console.log("Data cell 4 is " + c5);
    var c6 = $("[data-cell*='5']").text();
    console.log("Data cell 5 is " + c6);
    var c7 = $("[data-cell*='6']").text();
    console.log("Data cell 6 is " + c7);
    var c8 = $("[data-cell*='7']").text();
    console.log("Data cell 7 is " + c8);
    var c9 = $("[data-cell*='8']").text();
    console.log("Data cell 8 is " + c9);
    var winningShape;

    if ((c1 === c2) && (c2 === c3) && (c1 === 'O' || c1 === 'X')){
      announceWinner(shape);
    } else if ((c4 === c5) && (c5===c6) && (c4 === 'O' || c4 === 'X')){
      announceWinner(shape);
    } else if ((c7 === c8) && (c8 === c9) && (c7 === 'O' || c7 === 'X')){
      announceWinner(shape);
    } else if ((c1 === c4) && (c4 === c7) && (c1 === 'O' || c1 === 'X')){
      announceWinner(shape);
    } else if ((c2 === c5) && (c5 === c8) && (c2 === 'O' || c2 === 'X')){
      announceWinner(shape);
    } else if ((c3 === c6) && (c6 === c9) && (c6 === 'O' || c6 === 'X')){
      announceWinner(shape);
    } else if ((c1 === c5) && (c5 === c9) && (c1 === 'O' || c1 === 'X')){
      announceWinner(shape);
    } else if ((c3 === c5) && (c5 === c7) && (c3 === 'O' || c3 === 'X')){
      announceWinner(shape);
    } else if (c1 !== "" && c2 !== "" && c3 !== "" && c4 !== "" && c5 !== "" && c6 !== "" && c7 !== "" & c8 !== "" && c9 !== ""){
      announceDraw();
    }
  }

  function announceWinner (shape) {
    $("body").prepend("<div id = 'announcewin'></div");
    $("body").css("display", "flex");
    $("body").css("justify-content", "center");
    $("body").css("align-items", "center");
    $("#board").hide();
    $("header").hide();
    $("#clear").hide();
    $("#container").hide();


    if (shape === 'X'){
      $("#announcewin").append("<span>X wins!!</span>")

    } else {
      $("#announcewin").append("<span>O wins!!</span>")
    }

    $("body").append("<button id = 'playagain' onclick = 'window.location.reload()'>play again</button>")

  }

  function announceDraw(){
    $("body").prepend("<div id = 'announcewin'></div");
    $("body").css("display", "flex");
    $("body").css("justify-content", "center");
    $("body").css("align-items", "center");
    $("#board").hide();
    $("header").hide();
    $("#clear").hide();
    $("#container").hide();
    $("#announcewin").append("<span>It's a draw!!</span>")
    $("body").append("<button id = 'playagain' onclick = 'window.location.reload()'>play again</button>")

  }


  $("#clear").click(function() {
    $("[data-cell]").text("");
  })

});
