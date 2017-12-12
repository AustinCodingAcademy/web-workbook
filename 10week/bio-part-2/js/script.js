window.onload = function() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  // Create gradient
  var grad = ctx.createRadialGradient(90,50,5,90,60,100);
  grad.addColorStop(0,"#FF224B");
  grad.addColorStop(1,"#0000FF");


  ctx.beginPath();
  ctx.arc(95,50,40,0,2*Math.PI);
  ctx.stroke();
  ctx.fillStyle = grad;
  ctx.fill();

ctx.font = "30px Arial";
ctx.fillText("Krista Kannen",10,120);
}
