var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {
    $('video', this).get(0).play();
}

function hideVideo(e) {
    $('video', this).get(0).pause();
}

let myCanvas = document.getElementById('canvas');
let ctx = myCanvas.getContext('2d');
ctx.beginPath();
var grd = ctx.createLinearGradient(0, 40, 170, 0);
grd.addColorStop(0, "green");
grd.addColorStop(1, "black");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);
ctx.arc(50, 75, 35, 0, 2*Math.PI);
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();

ctx.font = "30px Garamond";
ctx.fillText("William Cruz", 10, 200);
