var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.fillStyle ="blue";
ctx.fill();
ctx.stroke();

//text
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Robert N",150,50);


//Gradient
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(175,155,10,190,160,100);
grd.addColorStop(0,"yellow");
grd.addColorStop(1,"black");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(100,100,150,80);
