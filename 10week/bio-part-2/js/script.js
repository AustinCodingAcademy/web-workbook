'use strict';

// Document Ready Function & Console Log of Ready state

$(document).ready(function() {
  console.log("ready!");
});


var c = document.getElementById("myCanvas1");
var ctx = c.getContext("2d");
var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(0, 10, 750, 100);

var canvas = document.getElementById("myCanvas1");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#6495ed";
ctx.fillRect(180, 20, 550, 70);


var c = document.getElementById("myCanvas1");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("Eric Voss Bio 2", 200, 65);
