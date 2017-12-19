
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ct = canvas.getContext('2d');

/*ct.fillStyle = "pink";
ct.fillRect(100, 100, 100, 100);
ct.fillStyle = "orange";
ct.fillRect(400, 100, 100, 100);
ct.fillStyle = "lightgreen";
ct.fillRect(300, 300, 100, 100);

// line

/* ct.beginPath();
ct.moveTo(50, 300);
ct.lineTo(300, 100);
ct.lineTo(400, 300);
ct.strokeStyle = "red";
ct.stroke();

// arc / circle

/* ct.beginPath();
ct.arc(300, 300, 30, 0, Math.PI * 2, false);
ct.strokeStyle = "violet";
ct.stroke();

/*for (var i = 0; i <400; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  ct.beginPath();
  ct.arc(x, y, 30, 0, Math.PI * 2, false);
  ct.strokeStyle = "violet";
  ct.stroke()
} */

var mouse = {
  x: undefined,
  y: undefined
}

var maxRadius = 40;
var minRadius = 2;

var colorArray = [
  '#E53D36',
  '#FFA644',
  '#998A2F',
  '#295949',
  '#002D40'
];

window.addEventListener('mousemove',function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
})

window.addEventListener('resize', function()
  {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


})

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function() {
    ct.beginPath();
    ct.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    //ct.strokeStyle = "yellow";
    ct.stroke();
    ct.fillStyle = this.color;
    ct.fill();
    ct.font = '35px serif';
    ct.fillStyle = this.color;
    ct.textAlign = 'center';
    ct.fillText('Andrew was here', canvas.width/2, canvas.height/2);

  }
  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius
    < 0) {
      this.dx = -dx;
    }

    if ( this.y + this.radius > innerHeight || this.y - this.radius
    < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

// interactivity
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50
      && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
      if (this.radius < maxRadius) {
          this.radius += 1;
      }
    } else if(this.radius > minRadius) {
      this.radius -= 1;
    }

    this.draw();
  }
}

var circleArray = [];

for (var i=0; i < 800; i++){
  var radius = Math.random() * 3 + 1;
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dx = (Math.random() - 0.5);
  var dy = (Math.random() - 0.5);
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

//circle.draw();

function animate() {
  requestAnimationFrame(animate);
  ct.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }

  circle.update();

  ct.beginPath();
  ct.arc(x, y, radius, 0, Math.PI * 2, false);
  ct.strokeStyle = "blue";
  ct.stroke();

  if (x + radius > innerWidth || x - radius
  < 0) {
    dx = -dx;
  }

  if ( y + radius > innerHeight || y - radius
  < 0) {
    dy = -dy;
  }

  x += dx;
  y += dy;
}

animate();
