var canvastop = document.getElementById('canvastop');
var ctx1 = canvastop.getContext('2d');
ctx1.fillStyle = 'steelblue';
ctx1.fillRect(10, 0, 400, 20);

var canvasmiddle = document.getElementById('canvasmiddle');
var ctx2 = canvasmiddle.getContext('2d');
ctx2.font = '36px serif';
ctx2.strokeText('Ramona Neafie', 20, 30);

var canvasbottom = document.getElementById('canvasbottom');
var ctx3 = canvasbottom.getContext('2d');
var gradient = ctx3.createRadialGradient(120, 60, 50, 100, 100, 0);
gradient.addColorStop(0, 'white');
gradient.addColorStop(1, 'steelblue');
ctx3.fillStyle = gradient;
ctx3.fillRect(0, 0, 200, 200);
