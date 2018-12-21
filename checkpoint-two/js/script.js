var canvasElement = document.querySelector("#myCanvas");
var context = canvasElement.getContext("2d");
 
// the triangle
context.beginPath();
context.moveTo(200, 100);
context.lineTo(100, 300);
context.lineTo(300, 300);
context.closePath();
 
// the outline
context.lineWidth = 5;
context.strokeStyle = '#000000';
context.stroke();
 
// the fill color
context.fillStyle = "#32CD32";
context.fill();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);