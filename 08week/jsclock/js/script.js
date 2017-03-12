$(document).ready( function() {

function displayTime(){
  //this will pull current time from computer
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  //12 hour format
  var medridiem = "AM"; //default is AM

//change from 24 to 12 hour clock
//keep track of the meridiem
  if (hours > 12) {
    hours = hours -12;
    meridiem = "PM";
  }

  if (hours === 0) {
    hours = 12;
  }

  //if seconds digit is less than ten
  if (hours < 10){
    //add the "0" digit to the front
    //Ex- 9 becomes "09"
    hours = "0" + hours;
  }
  if (minutes < 10){
    //add the "0" digit to the front
    //Ex- 9 becomes "09"
    minutes = "0" + minutes;
  }
  if (seconds < 10){
    //add the "0" digit to the front
    //Ex- 9 becomes "09"
    seconds = "0" + seconds;
  }


  // Then we set the text inside the clock div
  // to the hours, minutes, and seconds of the current time
  var clockDiv = document.getElementById("clock");
  clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " "+ meridiem;

}
//This runs the displayTime function the first time
displayTime();
//makes the clock clock tick every second repeatedly
setInterval(displayTime, 1000);



});
