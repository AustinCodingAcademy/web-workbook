'use strict';

$(document).ready(function() {




var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {
    $('video', this).get(0).play();
}

function hideVideo(e) {
    $('video', this).get(0).pause();
}





var canvas = document.querySelector('#circle'),
c = canvas.getContext('2d');
canvas.width = (500);
canvas.height = (500);
var pct = 0,
    start = 4.72,
    diff;



function showTime(){
  diff = pct/100 * Math.PI*2;
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.lineWidth = 15;
  c.fillStyle= '#F5F5F5';
  c.strokeStyle= '#F5F5F5';
  c.textAlign= 'center';
  c.font= '30px monospace';
  c.fillText('Dylan', 250, 260);
  c.beginPath();
  c.arc(250, 250, 80, start, diff+start, false);
  c.stroke();
  if (pct >= 100){
    clearTimeout(play);
  }
  pct++;
}
var play = setInterval(showTime, 30);

var canvas = document.querySelector('#mycanvas')
var context = canvas.getContext('2d');
context.rect(0, 0, canvas.width, canvas.height);

// create radial gradient
var grd = context.createRadialGradient(0, 250, 0, 238, 90, 450);
// light
grd.addColorStop(0, '#F5F5F5');
// black
grd.addColorStop(1, 'black');

context.fillStyle = grd;
context.fill();

})
