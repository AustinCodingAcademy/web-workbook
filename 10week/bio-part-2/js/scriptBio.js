$(document).ready(function () {

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var x = 150,
    y = 75,
    
    innerRadius = 5,
    outerRadius = 70,
    // Radius of the whole circle.
    radius = 60;

var gradient = ctx.createRadialGradient(x, y, innerRadius, x, y, outerRadius);
gradient.addColorStop(0, '#69C5FF');
gradient.addColorStop(1, '#487d88');

ctx.arc(x, y, radius, 0, 2 * Math.PI);

ctx.fillStyle = gradient;
ctx.fill();
// Changed scale to improve legibility.
ctx.font = "80px Arial";
ctx.fillStyle = "rgba(255, 255, 255,0.5)";
ctx.textAlign = "center";
ctx.fillText("Robert", canvas.width/2, canvas.height/1.5); 

});


