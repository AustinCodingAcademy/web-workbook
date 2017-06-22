'use strict';
window.onload = function(){
  var message = "WARNING: You're gonna like what you see!";
  alert(message);
// };
// window.onload = function(){
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(150,90,40,1.5,1.5*Math.PI);
ctx.stroke();﻿
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(250,90,40,0,2*Math.PI);
ctx.stroke();
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "45px Arial";
var gradient=ctx.createLinearGradient(0,0,c.width,0);
gradient.addColorStop("0","green");
gradient.addColorStop("0.5","red");
gradient.addColorStop("1.0","blue");
ctx.fillStyle=gradient;
ctx.fillText("Cody G",115,105);
};
