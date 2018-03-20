'use strict';

// Using Canvas to draw shape
var c=document.getElementById("my-canvas");
var ctx=c.getContext("2d");

var grd=ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"blue");
grd.addColorStop(1,"white");

// Using Canvas to fill shape with gradient
ctx.fillStyle=grd;
ctx.fillRect(10,10,150,100);ke();

// Using Canvas to write Name
// var canvas = document.getElementById("my-name");
// var ctx=canvas.getContext("2d");
// ctx.font="30px Arial";
// ctx.fillStyle = "red";
// ctx.textAlign = "center";
// ctx.fillText("Hello World", canvas.width/2, canvas.height/2);
