'use strict';

$(document).ready(function() {

  let cnv = document.querySelector("#myCanvas");
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


  // var x = 250,
  //     y = 250,
  //     radius = 50,
  //     // 0deg   - 1.5 * Pi,
  //     // 90deg  - 0   * Pi,
  //     // 180deg - 0.5 * Pi,
  //     // 270deg - 1   * Pi
  //     angleStart = 1.5 * Math.PI,
  //     angleEnd = 0.7 * Math.PI;
  //
  // //Create gradient
  // var gradient = ctx.createLinearGradient(0,500,0, 0);
  // gradient.addColorStop(0, '#c0e674');
  // gradient.addColorStop(1, '#40d6a5');
  //
  //
  // //Draw circle
  // ctx.beginPath();
  // ctx.arc(x, x, radius, 0, 2*Math.PI, false);
  // ctx.lineWidth = 30;
  // ctx.strokeStyle = 'rgba(255,255,255, 0.2)'
  // ctx.stroke();
  //
  // //Draw arc
  // ctx.beginPath();
  // ctx.arc(x, y, radius, angleStart, angleEnd);
  // ctx.strokeStyle = gradient;
  // ctx.lineWidth = 30;
  // ctx.lineCap = 'round';
  // ctx.stroke();
});
