var c = document.getElementById("canvan");
var ctx = c.getContext("2d");
var grad= ctx.createLinearGradient(0, 0, 600, 400);
grad.addColorStop(0, "orange");
grad.addColorStop(1, "green");

ctx.strokeStyle = grad;

ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(600,400);
ctx.lineWidth = 15;
ctx.stroke();


var d = document.getElementById("canvan");
var ctx = d.getContext("2d");
var grad= ctx.createLinearGradient(600, 0, 0, 400);
grad.addColorStop(.3, "red");
grad.addColorStop(.5, "blue");
grad.addColorStop(.7, "yellow");
ctx.strokeStyle = grad;
var d = document.getElementById("canvan");
var ctx = d.getContext("2d");
ctx.beginPath();
ctx.arc(300, 200, 150, 0, 2*Math.PI);
ctx.stroke();

var e = document.getElementById("canvan");
var ctx = e.getContext("2d");
var grad= ctx.createLinearGradient(600, 0, 0, 400);
grad.addColorStop(0, "purple");
grad.addColorStop(1, "brown");
ctx.strokeStyle = grad;
ctx.beginPath();
ctx.moveTo(600,0);
ctx.lineTo(0,400);
ctx.lineWidth = 15;
ctx.stroke();
