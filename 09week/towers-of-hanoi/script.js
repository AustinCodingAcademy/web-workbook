'use strict';

$(document).ready(function() {
  // Buttons to move blocks

var movesLeft = 20;

$("#button1").on("click", function oneToTwo(){
  var a = parseInt($("#colOne").children().last().attr("data-block"));
  var b = parseInt($("#colTwo").children().last().attr("data-block"));
      if (a < b || isNaN(b)) {
        $("#colOne").children().last().detach().appendTo("#colTwo");
      } else {
        $("#colOne").children().last().addClass("badmove");
      }
      score();
      outOfTime();
      setTimeout(winner, 500);
      setTimeout(clearCSS, 1000);
    })

$("#button1b").on("click", function oneToThree(){
  var a = parseInt($("#colOne").children().last().attr("data-block"));
  var c = parseInt($("#colThree").children().last().attr("data-block"));
      if (a < c || isNaN(c)) {
        $("#colOne").children().last().detach().appendTo("#colThree");
      } else {
        $("#colOne").children().last().addClass("badmove");
      }
      score();
      outOfTime();
      setTimeout(winner, 500);
      setTimeout(clearCSS, 1000);
    })

$("#button2b").on("click", function twoToThree(){
  var b = parseInt($("#colTwo").children().last().attr("data-block"));
  var c = parseInt($("#colThree").children().last().attr("data-block"));
      if (b < c || isNaN(c)) {
        $("#colTwo").children().last().detach().appendTo("#colThree");
      } else {
        $("#colTwo").children().last().addClass("badmove");
      }
      score();
      outOfTime();
      setTimeout(winner, 500);
      setTimeout(clearCSS, 1000);
    })

$("#button3").on("click", function threeToTwo(){
  var b = parseInt($("#colTwo").children().last().attr("data-block"));
  var c = parseInt($("#colThree").children().last().attr("data-block"));
      if (c < b || isNaN(b)) {
        $("#colThree").children().last().detach().appendTo("#colTwo");
      } else {
        $("#colThree").children().last().addClass("badmove");
      }
      score();
      outOfTime();
      setTimeout(winner, 500);
      setTimeout(clearCSS, 1000);
    })

$("#button3b").on("click", function threeToOne(){
  var a = parseInt($("#colOne").children().last().attr("data-block"));
  var c = parseInt($("#colThree").children().last().attr("data-block"));
      if (c < a || isNaN(a)) {
        $("#colThree").children().last().detach().appendTo("#colOne");
      } else {
        $("#colThree").children().last().addClass("badmove");
      }
      score();
      outOfTime();
      setTimeout(winner, 500);
      setTimeout(clearCSS, 1000);
    })

$("#button2a").on("click", function twoToOne(){
  var a = parseInt($("#colOne").children().last().attr("data-block"));
  var b = parseInt($("#colTwo").children().last().attr("data-block"));
      if (b < a || isNaN(a)) {
        $("#colTwo").children().last().detach().appendTo("#colOne");
      } else {
        $("#colTwo").children().last().addClass("badmove");
      }
      score();
      outOfTime();
      setTimeout(winner, 100);
      setTimeout(clearCSS, 1000);
    })

$("#buttonReset").on("click", function resetGame(){
  location.reload(true);
})
// var a = parseInt($("#colOne").children().last().attr("data-block"));
// var b = parseInt($("#colTwo").children().last().attr("data-block"));
//
// $($("#colOne").children().last()).draggable({
//   revert: "invalid"
// });
//
// $("#colTwo").droppable({
//   accept: ".block"
//   drop: function (event, ui) {
//     $().append(ui.draggable);
//   }
// });

function score(){
  movesLeft=movesLeft-1;
  document.getElementById('moves').innerHTML=movesLeft;
}

function outOfTime(){
  if (movesLeft<6){
    $("#moves").addClass("movesDanger animated bounce");
  }
  if (movesLeft==0){
    document.getElementById('announce').innerHTML="GAME OVER!";
    document.getElementById('Caray').src="Media/Bad.png";
    document.getElementById('audio').src="Media/Bad1.mp3";
    disableBtn();
  }
  if (movesLeft==1){
    document.getElementById('moveText').innerHTML="MOVE LEFT";
  }
}

function winner(){
var final = $("#colThree").children().length;
  if (final === 4) {
    document.getElementById('announce').innerHTML="CUBS WIN! CUBS WIN!";
    document.getElementById('Caray').src="Media/Good.png";
    document.getElementById('audio').src="Media/Win.mp3";
    $.confetti.start();
    disableBtn();
  }
}

function disableBtn(){
  document.getElementById("button1").disabled = true;
  document.getElementById("button1b").disabled = true;
  document.getElementById("button2a").disabled = true;
  document.getElementById("button2b").disabled = true;
  document.getElementById("button3").disabled = true;
  document.getElementById("button3b").disabled = true;
}

function clearCSS() {
  $("#colOne").children().last().removeClass("badmove");
  $("#colTwo").children().last().removeClass("badmove");
  $("#colThree").children().last().removeClass("badmove");
}
})
