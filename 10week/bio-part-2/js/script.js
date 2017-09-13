var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.font = "30px Comic Sans MS";
ctx.fillStyle = "hotpink";
ctx.textAlign = "center";
ctx.fillText("Kenneth Russell Vandivort", canvas.width/2, canvas.height/2);

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(175,175,170,0,2*Math.PI);
ctx.stroke();
