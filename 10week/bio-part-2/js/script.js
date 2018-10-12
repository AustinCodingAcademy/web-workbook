let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


let grd = ctx.createRadialGradient(25, 50, 5, 100, 50, 100);
grd.addColorStop(0, "lightgray");
grd.addColorStop(1, "lightblue");


ctx.beginPath();

ctx.moveTo(0, 25);
ctx.lineTo(75, 25);
ctx.lineTo(0, 100);
ctx.fillStyle = grd;
ctx.fill();

let grdTwo = ctx.createRadialGradient(320, 0, 5, 5, 5, 320);
grdTwo.addColorStop(0, "lightgray");
grdTwo.addColorStop(1, "lightblue");

ctx.beginPath();
ctx.moveTo(320, 320);
ctx.lineTo(25, 310);
ctx.lineTo(320, 25);
ctx.fillStyle = grdTwo;
ctx.fill();


ctx.font = "30px Arial";
ctx.strokeStyle = "Black";
ctx.strokeText("MATT LUKSO", 70, 70);
