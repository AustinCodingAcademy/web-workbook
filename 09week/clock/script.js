$(document).ready( function() {

function showTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  var timeDiv = document.getElementById('time');
  timeDiv.innerText = hours + ":" + minutes + ":" + seconds;
}

showTime();

setInterval(showTime, 1000);

});
sd
