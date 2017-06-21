$(document).ready(function () {

 var canvas = document.getElementById('myCanvas');
 var context = canvas.getContext('2d');
	var x1 = 100;
	var y1 = 100;
	var r1 = 30;
	var x2 = 100;
	var y2 = 100;
	var r2 = 100; 
var radialGradient1 =
    context.createRadialGradient(x1, y1, r1, x2, y2, r2);

radialGradient1.addColorStop(0, 'rgb(0, 0, 200)');
radialGradient1.addColorStop(1, 'rgb(0, 0,  100)');

context.fillStyle = radialGradient1;
context.fillRect(10,10, 200, 200);


var gradient = ctx.createRadialGradient(100,100,100,100,100,0);
gradient.addColorStop(0,"white");
gradient.addColorStop(1,"green");
ctx.fillStyle = gradient;
ctx.fillRect(0,0,200,200);

//context.lineWidth = 8;
//context.strokeStyle = '#6dcfcc';
//context.stroke();
//ctx.font = "15px Lato";
//ctx.fillText("Robert Sasaki Bio",10,50); 


});


