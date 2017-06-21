'use strict'

window.onload = function(){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

//Eyes
  ctx.beginPath();
  ctx.arc(300,130,60,0,2*Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(280,150,20,0,2*Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(700,130,60,0,2*Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(680,150,20,0,2*Math.PI);
  ctx.stroke();

//Mouth
  var grd = ctx.createLinearGradient(0,0,800,0);
  grd.addColorStop(0,"green");
  grd.addColorStop(1,"white");

  ctx.fillStyle = grd;
  ctx.fillRect(190,300,700,200);

//Text
  ctx.font = "30px Arial";
  ctx.strokeText("J/Whitman",10,300);

};
