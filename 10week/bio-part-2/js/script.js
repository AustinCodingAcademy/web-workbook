window.onload = function() {
//
// var figure = $('video').hover(hoverVideo, hideVideo);
//
// function hoverVideo(e) {
//   $('video', this).get(0).play();
// }
//
// function hoverVideo(e) {
//   $('video', this).get(0).pause();
// }

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);

ctx.font = "30px Comic Sans MS";
ctx.fillStyle = "purple";
// ctx.strokeText("Shay Hoffman",10,125);
ctx.fillText("Shay Hoffman", 10, 125);
}
