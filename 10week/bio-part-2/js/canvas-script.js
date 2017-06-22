var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var grd = ctx.createLinearGradient(0,0,200,0);

grd.addColorStop(0,"red");
grd.addColorStop(1,"yellow");
ctx.fillStyle = grd;
ctx.fillRect(0,0,350,100);

ctx.font = "30px Arial";
ctx.fillText("Hello World",50,130);

ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.fillStyle = "blue";

ctx.stroke();
