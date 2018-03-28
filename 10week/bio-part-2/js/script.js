// //go into DOM and get the canvas
// let c = document.getElementById("canvas");
// //set context
// let ctx = canvas.getContext("2d");


var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();