var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//gradients
var grd = ctx.createRadialGradient(90,130, 20, 120, 70, 150);
grd.addColorStop(0,'red');
grd.addColorStop(0.2,'blue');
grd.addColorStop(0.5, 'yellow');
grd.addColorStop(0.7, 'purple');
grd.addColorStop(1, 'aqua');


//fill color
ctx.fillStyle = grd;
ctx.fillRect(0, 0, canvas.width, canvas.height);


//my name text
ctx.font = "40px monospace";
ctx.textAlign = "center";
ctx.fillStyle = "white";
ctx.fillText("Matt", canvas.width/2, canvas.height/2);
