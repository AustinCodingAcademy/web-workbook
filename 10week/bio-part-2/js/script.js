'use strict';
// document.addEventListener("DOMContentLoaded", function(event) {
window.onload = function() {

  $(document).ready(function() {

    var canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var cd = canvas.getContext('2d');

    // setInterval(setDxDy, 5000)





    // run a for loop that puts multiple random value sinto array like X, Y, COlor, Speed etc..
    var color = [];
    var radius = [];
    var x = 0;
    var y = 0;
    var dx = 2;
    var dy = 2;


    function getRandomColor() {

      var letters = '0123456789ABCDEF';
      var hashTag = "#"
      for (var i = 0; i < 6; i++) {
        hashTag += letters[Math.floor(Math.random() * 16)];
      }
      color.push(hashTag);
      console.log(color);
    }

    function getRadius() {
      radius.push(Math.floor(10 + Math.random() * 50));
      console.log(radius);

    }

    function getXY() {
x = event.clientX; //get x from mouse positiion
y = event.clientY;//get y from mouse positiion

      console.log(x + ' ' + y);
    }
function getD() {
  dx = Math.ceil(Math.random() * 5);
  dy = Math.ceil(Math.random() * 5);

}

    function draw() {
      cd.beginPath();
      cd.arc(x, y, radius[radius.length - 1], 0, Math.PI * 2, false);
      cd.fillStyle = color[color.length - 1];
      cd.fill();
      cd.stroke();
      cd.beginPath();
      cd.arc(x, y, radius[radius.length - 1] / 2, 0, Math.PI * 2, true);
      cd.fillStyle = "white";
      cd.fill();
      cd.stroke();

    }
 animation();

    function animation() {
      requestAnimationFrame(animation);
        // clear();
        draw();
      //
      //
      if (x + radius[radius.length - 1] > canvas.width|| x - radius[radius.length - 1] < 0) {
        dx = -dx;
      }
      if (y + radius[radius.length - 1] > canvas.height || y - radius[radius.length -1 ] < 0) {
        dy = -dy;
      }

      x += dx;
      y += dy;
    }


    function clear() {
      cd.clearRect(0, 0, innerWidth, innerHeight);
    }


    $('body').click(() => {
      // draw();
      // clear();
      getRandomColor();
      getRadius();
      getXY();
      getD();
      draw();
    });



    // ----------------------------------------->
  }); //close document.ready

} //close window.onload
// });
