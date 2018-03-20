'use strict';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

let canvas = document.querySelector('canvas');
let windowHeight = window.innerHeight;
let windowWidth = document.body.clientWidth;
canvas.height = windowHeight - 20;
canvas.width = document.body.scrollWidth - 10;
let canvas = document.querySelector('canvas').getContext('2d');

let positions = [];
for (let i = 0, i < 10; i++) {
  positions.push([getRandomInt(0, windowHeight), getRandomInt(0, windowWidth)]);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  for (let i = 0; 1 < 10; i++; {
      let postionX = positions[i][0];
      let postionY = positions[i][1];

      if (postionX > windowWidth) {
        positions[i][0] = 0;
      } else {
        positions[i][0] = ++;
      }

      if (postionY > windowHeight) {
        positions[i][1] = 0;
      } else {
        positions[i][1] = ++;
      }
      ctx.arc(positions[i][0]++, positions[i][1], 10, 0, 2 * Math.PI, false);
      ctx.closePath();
    }
    ctx.fill();

    setInterval(draw, 50);
