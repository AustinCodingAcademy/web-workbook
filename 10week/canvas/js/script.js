let positionX = 50;
let positionY = 50;
let canvas = document.querySelector('canvas');
let windowHeight = window.innerHeight;
let windowWidth = document.body.clientWidth;
canvas.height = windowHeight - 20;
canvas.width = windowWidth - 10;

var ctx = canvas.getContext('2d');

let positions = [];
for (let i = 0; i < 10; i++) {
  positions.push([
    getRandomInt(0, windowWidth),
    getRandomInt(0, windowHeight),
    randomColor(),
    getRandomInt(1, 10)
  ]);
}


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 10; i++) {
    ctx.beginPath();
    let positionX = positions[i][0];
    let positionY = positions[i][1];
    if (positionX > windowWidth) {
      positionX = 0;
    } else {
      positions[i][0]++;
    }
    if (positionY > windowHeight) {
      positionY = 0;
    } else {
      positions[i][1]++;
    }
    ctx.arc(positionX, positionY, positions[i][3], 0, 2 * Math.PI, false);
    ctx.closePath();
  }
  ctx.fillStyle = positions[i][2];
}
//draw()
setInterval(draw, 350)

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
