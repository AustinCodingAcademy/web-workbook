let myCanvas = document.getElementById('canvas');
let ctx = myCanvas.getContext('2d');
ctx.beginPath();
ctx.strokeRect(75, 75, 300, 300);
ctx.stroke();
var grd=ctx.createLinearGradient(0,0,170,0);
grd.addColorStop(0,"black");
grd.addColorStop(.5,"red");
grd.addColorStop(.7,'blue');
ctx.fillStyle=grd;
ctx.fillRect(75,75,300,300);

let nameCanvas = document.getElementById('name');
let ctx1 = nameCanvas.getContext('2d');
ctx.beginPath();
ctx1.font = "30px Helvetica";
ctx1.fillText("Cynthia Williams", 50, 50);

