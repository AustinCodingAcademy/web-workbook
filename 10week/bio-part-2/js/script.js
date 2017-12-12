window.onload = function draw() {

  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

      // heart shape in canvas
     ctx.beginPath();
     ctx.moveTo(75, 40);
     ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
     ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
     ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
     ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
     ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
     ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
     ctx.fill();
  }

  var words = document.getElementById("canvas");
  var wtx = words.getContext("2d"); {

      //My name in canvas
      wtx.font = "50px Arial";
      wtx.strokeText("Taylor Bentley",80,200);
  }

  var c=document.getElementById("canvas");
  var cxtx=c.getContext("2d");{

  // Create gradient
  var grd=cxtx.createLinearGradient(0,0,0,400);
      grd.addColorStop(0,"blue");
      grd.addColorStop(1,"yellow");

      // Fill with gradient
      cxtx.fillStyle = grd;
      cxtx.fillRect(300,250,150,80);
  }
}
