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

  // This gets a "handle" to the clock div in our HTML
  var timeDiv = document.getElementById('time');

  // Then we set the text inside the clock div
  // to the hours, minutes, and seconds of the current time
  timeDiv.innerText = hours + ":" + minutes + ":" + seconds;
}

// This runs the displayTime function the first time
showTime();

setInterval(showTime, 1000);

});
