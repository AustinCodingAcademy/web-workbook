$(document).ready(function(){
  var canvas = document.getElementById('shape');
  var canvas2 = document.getElementById('grad');
  var canvas3 = document.getElementById('text');
  var ctx = canvas.getContext('2d');
  var ctx2 = canvas2.getContext('2d');
  var ctx3 = canvas3.getContext('2d');



  ctx.fillstyle = "#FF0000";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  // Create gradient
  var grd=ctx2.createRadialGradient(75,50,5,150,100,200);
  grd.addColorStop(0,"blue");
  grd.addColorStop(1,"white");

  // Fill with gradient
  ctx2.fillStyle = grd;
  ctx2.fillRect(0,0,canvas.width,canvas.height);

  ctx3.font = "30px Comic Sans MS";
  ctx3.fillStyle = "red";
  ctx3.textAlign = "center";
  ctx3.fillText("Chase Turner", canvas.width/2, canvas.height/2);


});
