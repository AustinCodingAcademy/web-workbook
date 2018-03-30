'use strict';

$(document).ready(function() {

  let cnv = document.querySelector("#mycanvas");
  let ctx = cnv.getContext("2d");

  var grd = ctx.createLinearGradient(0, 0, 170, 0);
  grd.addColorStop("0", "lightblue");
  grd.addColorStop("0.5", "purple");
  grd.addColorStop("1", "red");

  ctx.fillStyle = grd; //"#80ffff";
  ctx.fillRect(20, 20, 150, 100);

  ctx.beginPath();

  ctx.strokeStyle = grd;
  ctx.lineWidth = 20;
  ctx.arc(280, 150, 80, 60, 1.9 * Math.PI);
  ctx.stroke();

  ctx.font = "30px Verdana";

  // Create gradient
  var gradient = ctx.createLinearGradient(0, 0, cnv.width, 0);
  gradient.addColorStop("0", "magenta");
  gradient.addColorStop("0.5", "blue");
  gradient.addColorStop("1.0", "red");
  ctx.lineWidth = 2;

  // Fill with gradient
  ctx.strokeStyle = gradient;
  ctx.strokeText("Suneetha Kori", 180, 200);
});
