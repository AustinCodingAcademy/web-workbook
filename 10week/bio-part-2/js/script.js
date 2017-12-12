'use strict';

document.addEventListener("DOMContentLoaded", function() {

  var a = document.getElementById("canvas");
  var atx = a.getContext("2d");
  atx.font = "25px Arial";
  atx.fillText("Agata",10,280);

  var b = document.getElementById('canvas');
  var btx = b.getContext('2d');
  btx.beginPath();
  btx.arc(60,60,50,0,2*Math.PI);
  btx.fillStyle = "green";
  btx.fill();

  var c = document.getElementById('canvas');
  var ctx = c.getContext('2d');
  var grd = ctx.createLinearGradient(0,0,200,0);
  grd.addColorStop(0,"blue");
  grd.addColorStop(1,"white");
  ctx.fillStyle = grd;
  ctx.fillRect(10,140,150,80);

});
