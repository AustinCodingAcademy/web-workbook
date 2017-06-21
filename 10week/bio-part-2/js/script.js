var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var grd = ctx.createRadialGradient(200,200,35,135,155,300);
var tText=ctx.createLinearGradient(0,0,c.width,0);
grd.addColorStop(0,"purple");
grd.addColorStop(1,"cyan");

ctx.fillStyle = grd;
ctx.fillRect(0,0,400,400);

ctx.moveTo(200,50);
ctx.lineTo(50,300);
ctx.lineTo(350,300);
ctx.lineTo(200,50);
ctx.stroke();


tText.addColorStop("0","black");
tText.addColorStop("0.5","white");
tText.addColorStop("1.0","black");
ctx.strokeStyle=tText;

ctx.font = "90px Garamond";
ctx.strokeText("TREVOR",20,220);
