
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var cd = canvas.getContext('2d');

dx = 5;
dy = 5;
radius = 30;
var x = Math.random() * window.innerWidth;
var y = Math.random() * window.innerHeight;
function animation() {
  requestAnimationFrame(animation);
  cd.clearRect(0, 0, innerWidth, innerHeight);
  cd.beginPath();
  cd.arc(x, y, radius, 0, Math.PI * 2);
  cd.fillStyle = getRandomColor();
  cd.fill();
  if(x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
  }
  if(y + radius > innerHeight || y - radius < 0) {
    dy = -dy;
  }
  x += dx;
  y += dy;
}

animation();

function getRandomColor(){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters [Math.floor(Math.random() * 16)];
  }
  return color;
}

var c = document.getElementById('text');
var ctx = c.getContext('2d');
var gradient = ctx.createRadialGradient(220,120,80,200,150,250);
ctx.font = '20px Bungee Shade' ;
gradient.addColorStop('0','red');
gradient.addColorStop('0.5','blue');
gradient.addColorStop('1','indigo');
ctx.fillStyle = gradient;
ctx.textAlign = 'center';
ctx.fillText('This should be my name...', c.width/2, c.height/2);

// boxes

// cd.fillRect(x, y, width, height);

// lines

// cd.beginPath();
// cd.moveTo();
// cd.lineTo();
// cd.stroke();

// circles
// cd.arc(x, y, radius, start angle, end angle, draw counterclockwise)

// cd.beginPath();
// cd.arc(100, 100, 40, 0, Math.PI * 2, false);
// cd.stroke();
// cd.fillStyle = '';
// cd.fill();
