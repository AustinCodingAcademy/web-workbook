var canvas = document.querySelector('canvas');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

var cd = canvas.getContext('2d');
var gradFill=cd.createRadialGradient(100,80,50,200,200,50);
gradFill.addColorStop(0,"black");
gradFill.addColorStop(1,"white");

cd.beginPath();
cd.arc(100, 80, 50, 0, Math.PI*2)
cd.stroke();
cd.fillStyle=gradFill;
cd.fill();

cd.beginPath();
cd.moveTo(100, 130);
cd.lineTo(130, 41);
cd.lineTo(54, 100);
cd.lineTo(145, 100);
cd.lineTo(68, 41);
cd.lineTo(100, 130);
cd.stroke();
cd.fillStyle='#821d09';
cd.fill();

cd.beginPath();
cd.moveTo(100, 130);
cd.lineTo(130, 41);
cd.lineTo(54, 100);
cd.lineTo(145, 100);
cd.lineTo(68, 41);
cd.lineTo(100, 130);
cd.stroke();

cd.font = '29px Bungee';
cd.strokeStyle = '#821d09';
cd.strokeText("welcome to heck", 50, 200);
cd.font = '22px Bungee';
cd.strokeText("<3 neil", 85, 240);
