var canvas = document.getElementById("myCanvas");
  var c = canvas.getContext("2d");
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);

  c.fillStyle = "red";
  c.fillRect(20,20,50,50);

  c.strokeStyle = "white";
  c.lineWidth = 10;
  c.strokeRect(20,20,50,50);

  c.strokeStyle = "blue";
  c.linewidth = 5;

  c.beginPath();
  c.moveTo(100,100);
  c.lineTo(150,200);
  c.lineTo(200,200);
  c.lineTo(200,250);
  c.closePath();
  c.stroke();
  c.fill();

  c.fillStyle = "white";
  c.font = "20px Helvetica";
  c.fillText("Hello", 300, 200);

  c.beginPath();
  c.arc(200, 350, 50, 0, Math.PI * 2, true);
  c.fill();

  var posX = 0,
      posY = 200;
  setInterval(function(){
    posX += 1;
    if (posX > 200){
      posY += 3;
    }
    c.fillStyle = "rgba(0,0,0,0.1)";
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = "white";
    c.beginPath();
    c.arc(posX, posY, 50, 0, Math.PI * 2, true);
    c.fill();
  }, 30);
