var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {
    $('video', this).get(0).play();
}

function hideVideo(e) {
    $('video', this).get(0).pause();
}
let myCanvas = document.getElementById('canvas');
myCanvas.width = myCanvas.scrollWidth;
myCanvas.height = myCanvas.scrollHeight;
let ctx = myCanvas.getContext('2d');
var grd=ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");


ctx.fillStyle=grd;
ctx.fillRect(10,10,150,100);

ctx.font = "65px Garamond";
ctx.fillStyle = "blue";
ctx.fillText("Zeke Gutierrez", 180, 80);


ctx.fillStyle = "orange";
ctx.beginPath();
ctx.arc(86, 56, 40, 0, Math.PI * 2);
ctx.fill();
