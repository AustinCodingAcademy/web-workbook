'use strict';

$(document).ready(function() {
  draw();
  name();
});

function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
     var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.strokeStyle='white';
    ctx.lineWidth = 12;
    ctx.stroke();
    ctx.closePath();
  }
}

function name() {
  var canvas  = document.getElementById('canvas2');
var context = canvas.getContext('2d');

context.font = 'normal 36px Verdana';
context.fillStyle = '#fff';
context.fillText('Lillian', 20, 100);
}
