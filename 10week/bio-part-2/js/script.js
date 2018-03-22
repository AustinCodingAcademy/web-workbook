'use strict'
// ======================================
// Variables
// ======================================
let c = document.getElementById("myCanvas"),
  ctx = c.getContext("2d"),
  grd=ctx.createRadialGradient(350,50,20,300,60,200);
// ======================================
// Radial Gradient
// ======================================
grd.addColorStop(0,"#0745c1");
grd.addColorStop(1,"white");
ctx.fillStyle=grd;
ctx.fillRect(0,0,600,400);
// ======================================
// Name Text
// ======================================
ctx.font = "20px Georgia";
ctx.strokeText("Robert W Brey", 10, 20);
// ======================================
// Favorite Color Filling Shape
// ======================================
ctx.beginPath();
ctx.arc(100,75,50,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle = "#153472";
ctx.fill()
