'use strict';

$(document).ready(function() {

  //Line
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  var grd=ctx.createRadialGradient(75,50,5,90,60,100);
  grd.addColorStop(0,"blue");
  grd.addColorStop(1,"white");

  // Fill with gradient
  ctx.fillStyle=grd;
  ctx.fillRect(10,10,150,100);

  //text
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.font = "20px Arial";
  ctx.strokeText("Jason",35,40);

})
