
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "40px Comic Sans MS";
ctx.strokeText("Adam Grieder",25,75);


var d = document.getElementById("Mycanvas");
var dtx = c.getContext("2d");
var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"black");
grd.addColorStop(1,"white");
ctx.fillStyle = grd;
ctx.fillRect(0,100,400,200);
