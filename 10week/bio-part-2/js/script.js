
var canvas = document.getElementById("myCanvas");
     var ctx = canvas.getContext('2d');
     ctx.shadowColor = "rgb(190, 190, 190)";
     ctx.shadowOffsetX = 10;
     ctx.shadowOffsetY = 10
     ctx.shadowBlur = 10;
     ctx.font = "50px Acme";

     var gradient = ctx.createLinearGradient(0, 0, 150, 100);
     gradient.addColorStop(0, "rgb(255, 0, 128)");
     gradient.addColorStop(1, "rgb(255, 153, 51)");
     ctx.fillStyle = gradient;
     ctx.fillText("Jamie Fox", 30, 60);
     
