// reference https://github.com/kevincolten/asteroids/blob/master/asteroids.js

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

// ctx.clearRect(0, 0, 400, 400);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var i = 0;

function drawCircle(x, y, radius, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(
    (i / 10 + x) % 400, // x
    (i / 10 + y) % 400, // y
    radius, // radius
    0, // start angle
    2 * Math.PI, // end angle
    false
  );
  ctx.fill();
  i++;
}



const positions = [];

for (let i = 0; i < 20; i++) {
  positions.push([getRandomInt(0, 400), getRandomInt(0, 400), getRandomInt(0, 200), getRandomColor()])
}

setInterval(() => {
  ctx.clearRect(0, 0, 400, 400);
  for(let i = 0; i < 20; i++) {
    drawCircle(positions[i][0], positions[i][1], positions[i][2], positions[i][3])
  }
}, 10)
