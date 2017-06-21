'use strict';
window.onload = function () {

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// Background
ctx.fillStyle = "gray";
ctx.fillRect(0, 0, canvas.width, canvas.height);
// Circle
ctx.beginPath();
ctx.arc(120,150,100,0,2*Math.PI);
ctx.fillStyle = '#2f71c6';
ctx.fill();
ctx.stroke();
// Gradient
var grd = ctx.createRadialGradient(315,140,15,330,150,100);
grd.addColorStop(0,"#00ff04");
grd.addColorStop(1,"gray");
ctx.fillStyle = grd;
ctx.fillRect(225,50,200,200);
// Name
ctx.font = "50px Arial";
ctx.strokeText("Martin Godwin",75,160);
};
