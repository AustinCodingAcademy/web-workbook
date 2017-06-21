$(document).ready(function () {

 var canvas = document.getElementById('myCanvas');
 var context = canvas.getContext('2d');
 var centerX = canvas.width / 2;
 var centerY = canvas.height / 2;
 var radius = 70;

context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.fillStyle = 'red';
context.fill();
context.lineWidth = 8;
context.strokeStyle = '#6dcfcc';
context.stroke();
ctx.font = "15px Lato";
ctx.fillText("Robert Sasaki Bio",10,50); 


});