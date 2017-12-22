window.onload = function(){
///  var figure = $(".video").hover( hoverVideo, hideVideo );

  function hoverVideo(e) {
      $('video', this).get(0).play();
  }

  function hideVideo(e) {
      $('video', this).get(0).pause();
  }

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");


  // Create gradient
  var grd = ctx.createLinearGradient(10,70,200,0);
  grd.addColorStop(0,"aqua");
  grd.addColorStop(1,"pink");

  // Fill with gradient
  ctx.fillStyle = grd;
  ctx.fillRect(80,0,200,800);
  //shape
  ctx.beginPath();
  ctx.arc(95,50,40,0,2*Math.PI);
  ctx.stroke();


//text
ctx.font = "50px 'Special Elite', cursive";
ctx.fillStyle = "blue";
ctx.textAlign = "right";
ctx.fillText("Tera Clenin", canvas.width/5, canvas.height/5);
}
