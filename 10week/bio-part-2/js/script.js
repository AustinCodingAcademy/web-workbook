var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
ctx.beginPath();
ctx.arc(50,300,50,0,2*Math.PI);
ctx.stroke();
