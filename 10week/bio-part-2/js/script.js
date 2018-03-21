function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    var x = 65 ; // x coordinate
    var y = 25; // y coordinate
    var radius = 60; // Arc radius
    var startAngle = 0; // Starting point on circle
    var endAngle = Math.PI; // End point on circle
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.fillStyle = "#0d4a11";
    ctx.fill();

    var gradient = ctx.createRadialGradient(225,55,30,225, 55,0);
    gradient.addColorStop(0,"white");
    gradient.addColorStop(.15,"indigo");
    gradient.addColorStop(.3,"blue");
    gradient.addColorStop(.55,"green");
    gradient.addColorStop(.7,"yellow");
    gradient.addColorStop(.85,"orange");
    gradient.addColorStop(1,"red");
    ctx.fillStyle = gradient;
    ctx.fillRect(175,25,100,100);

    ctx.font = "30px Times";
    ctx.fillStyle = "red";
    ctx.fillText("P",300,63);
    ctx.fillStyle = "yellow";
    ctx.fillText("e",317,63);
    ctx.fillStyle = "green";
    ctx.fillText("t",332,63);
    ctx.fillStyle = "blue";
    ctx.fillText("e",341,63);
    ctx.fillStyle = "indigo";
    ctx.fillText("r",355,63);
    ctx.fillStyle = "indigo";
    ctx.fillText("S",375,63);
    ctx.fillStyle = "blue";
    ctx.fillText("l",392,63);
    ctx.fillStyle = "green";
    ctx.fillText("a",401,63);
    ctx.fillStyle = "yellow";
    ctx.fillText("v",415,63);
    ctx.fillStyle = "orange";
    ctx.fillText("i",431,63);
    ctx.fillStyle = "red";
    ctx.fillText("n",441,63);
  }
}
