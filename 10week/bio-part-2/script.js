'use strict';

$(document).ready(function() {
  // Canvas Design
  let myCanvas = document.getElementById('canvas');
  let ctx = myCanvas.getContext("2d");

  ctx.fillStyle = "teal";
  ctx.font = "30px Garamond";
  ctx.fillText("Mary Heppenstall's Bio Part 2", 100, 60);

  // Create radiant variable
  var grd=ctx.createRadialGradient(20,20,60,20,40,50);
  grd.addColorStop(0,"teal");
  grd.addColorStop(1,"turquoise");

  // Fill with gradient
  ctx.fillStyle=grd;
  ctx.fillRect(10,10,150,100);

  // Audio & Video Files
  var figure = $(".video").hover( hoverVideo, hideVideo );

  function hoverVideo(e) {
      $('video', this).get(0).play();
  }

  function hideVideo(e) {
      $('video', this).get(0).pause();
  }
});
