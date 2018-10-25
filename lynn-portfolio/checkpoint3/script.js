"use strict";
var wheelSpinning = false,
    wheelStopped = true;

var whatYouLandOn = {
  };
  
  setInterval(goGo,1000);
  
  function goGo() {
    $("#wheel").css({ 'transform': 'rotate(' + 'deg)'});
    updateReport();
  }
  
  function updateReport() {
    $("#winnings").text(Math.floor(data.totalCurrent));
    $("#rps").text((data.totalRPS/70.4).toFixed(3));
  }
  function onclick () {
    $("#wheel").rotate(180);
  }