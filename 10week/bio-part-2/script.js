'use strict';

$(document).ready(function() {

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(95, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();
  var grd = ctx.createLinearGradient(0, 0, 200, 0);
  grd.addColorStop(0, "red");

  // Fill with gradient
  ctx.fillStyle = grd;
  ctx.fillRect(20, 10, 150, 80);

});
