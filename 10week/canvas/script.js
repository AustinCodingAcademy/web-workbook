let canvas = document.getElementById("shade");
let ctx = canvas.getContext("2d");

// Create gradient
let grd = ctx.createLinearGradient(0,0,500,0);
grd.addColorStop(0,"indigo");
grd.addColorStop(1,"white");
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);
