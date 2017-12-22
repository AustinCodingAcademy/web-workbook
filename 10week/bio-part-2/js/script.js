var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var rando = "";
var newX = 250;
var newY = 250;

ctx.font = "20px Arial";
ctx.textAlign = 'center';
ctx.fillStyle = "#FFFFFF";
ctx.fillText("Kristian Houghtling - A Little Bit Random",250,25);

ctx.strokeStyle = '#FFFFFF';

setInterval(randomChoice, 75);

function randomChoice(){
  rando = Math.floor((Math.random() * 4) + 1);
  if (rando == 1){
    firstCombo();
  } else if (rando == 2) {
    secondCombo()
  } else if (rando == 3) {
    thirdCombo();
  } else if (rando == 4) {
    fourthCombo();
  }
}

function firstCombo(){
  ctx.moveTo(newX,newY);
  newX = newX - Math.floor((Math.random() * 10) + 1);
  newY = newY - Math.floor((Math.random() * 10) + 1);
  if (newX <= 0 || newY <= 50) {
    newX = newX + 50;
    newY = newY + 50;
  }
  ctx.lineTo(newX,newY);
  ctx.stroke();
}

function secondCombo(){
  ctx.moveTo(newX,newY);
  newX = newX + Math.floor((Math.random() * 10) + 1);
  newY = newY - Math.floor((Math.random() * 10) + 1);
  if (newX >= 500 || newY <= 50) {
    newX = newX - 50;
    newY = newY + 50;
  }
  ctx.lineTo(newX,newY);
  ctx.stroke();
}

function thirdCombo(){
  ctx.moveTo(newX,newY);
  newX = newX - Math.floor((Math.random() * 10) + 1);
  newY = newY + Math.floor((Math.random() * 10) + 1);
  if (newX <= 0 || newY >= 450) {
    newX = newX + 50;
    newY = newY - 50;
  }
  ctx.lineTo(newX,newY);
  ctx.stroke();
}

function fourthCombo(){
  ctx.moveTo(newX,newY);
  newX = newX + Math.floor((Math.random() * 10) + 1);
  newY = newY + Math.floor((Math.random() * 10) + 1);
  if (newX >= 500 || newY >= 450) {
    newX = newX - 50;
    newY = newY - 50;
  }
  ctx.lineTo(newX,newY);
  ctx.stroke();
}
