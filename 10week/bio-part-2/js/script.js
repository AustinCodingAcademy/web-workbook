var canvas = document.getElementById("myCanvas");
     var ctx = canvas.getContext('2d');
     ctx.shadowColor = "rgb(180, 110, 110)";
     ctx.shadowOffsetX = 5;
     ctx.shadowOffsetY = 5
     ctx.shadowBlur = 2;
     ctx.font = "45px verdana";
     var gradient = ctx.createLinearGradient(0, 0, 110, 110);
     gradient.addColorStop(0, "rgb(80, 80, 80)");
     gradient.addColorStop(1, "rgb(0, 0, 0)");
     ctx.fillStyle = gradient;
     ctx.fillText("Scott Gray", 30, 60);
