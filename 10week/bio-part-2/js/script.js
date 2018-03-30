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

  let cnv2 = document.querySelector("#my2canvas");
  let ctx2 = cnv2.getContext("2d");

  // Create gradient
  var gradient = ctx2.createLinearGradient(0, 0, cnv2.width, 0);
  gradient.addColorStop("0", "magenta");
  gradient.addColorStop("0.5", "blue");
  gradient.addColorStop("1.0", "red");
  ctx2.lineWidth = 2;

  // Fill with gradient
  ctx2.strokeStyle = gradient;
  ctx2.strokeText("Suneetha Kori", 180, 200);
});
