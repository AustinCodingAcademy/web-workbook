'use strict';

$(document).ready(function() {
  // Buttons to move blocks
$("#button1").on("click", function oneToTwo(){
  var a = parseInt($("#colOne").children().last().attr("data-block"));
  var b = parseInt($("#colTwo").children().last().attr("data-block"));
      if (a < b || isNaN(b)) {
        $("#colOne").children().last().detach().appendTo("#colTwo");
      } else {
        $("#colOne").children().last().addClass("badmove");
      }
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
      setTimeout(winner, 500);
      setTimeout(clearCSS, 1000);
    })


function winner(){
var final = $("#colThree").children().length;
  if (final === 4) {
    alert ("CUBS WIN! CUBS WIN!");
  }
}

function clearCSS() {
  $("#colOne").children().last().removeClass("badmove");
  $("#colTwo").children().last().removeClass("badmove");
  $("#colThree").children().last().removeClass("badmove");
}
})
