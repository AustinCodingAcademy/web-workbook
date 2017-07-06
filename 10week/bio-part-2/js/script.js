var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {
    $('video', this).get(0).play();
}

function hideVideo(e) {
    $('video', this).get(0).pause();
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(205,98);
ctx.lineTo(100,200);
ctx.lineTo(300,200);
ctx.lineTo(200,100);

var gradient=ctx.createLinearGradient(0,0,270,0);
gradient.addColorStop("0","blue");
gradient.addColorStop("0.5","orange");
gradient.addColorStop("1.0","purple");

ctx.strokeStyle = gradient;
ctx.lineWidth=10;
ctx.stroke();
ctx.fillStyle = "green";
ctx.fill();
