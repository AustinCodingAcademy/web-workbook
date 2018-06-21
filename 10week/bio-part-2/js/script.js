"use strict";

let myCanvas = document.getElementById('canvas');
myCanvas.width = myCanvas.scrollWidth;
myCanvas.height = myCanvas.scrollHeight;
let ctx = myCanvas.getContext('2d');

ctx.beginPath();
ctx.arc(75, 75, 35, 0, 2*Math.PI);
ctx.fill();

ctx.font = "30px Ariel";
ctx.fillText("Grace Shvedov", 15, 30);

let grd = ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
ctx.fillStyle=grd;
//ctx.fill(10,10,150,100);
