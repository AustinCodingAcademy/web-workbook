'use strict';


var data = {
  totalRevs: 360,
  totalCurrent: 0,
  totalRPS: 0
};

setInterval(goGo, 1000);

function goGo() {
  data.totalRevs += data.totalRPS;
  data.totalCurrent += data.totalRPS;
  $("#baseball").css({
    'transform': 'rotate(' + data.totalRevs + 'deg)'
  });
  updateReport();
}

//updates the account balance and speed in MPH, then runs addPitcher function to update staff

function updateReport() {
  $("#currentTotal").text(Math.floor(data.totalCurrent));
  $("#rps").text((data.totalRPS / 2).toFixed(3));
  addPitcher()
}

//add pitchers to rotation when speed threshhold is crossed, capping out at 5 pitchers

function addPitcher() {
  let speed = $("#rps").html();
  let divs = $("#rotation").children().length;
  if (speed >= 1 && divs == 1) {
    $("#rotation").append($("<div><img src='./Images/Jeff_Samardzija.jpg' id='staff'><div>"));
  } else if (speed >= 10 && divs == 2) {
    $("#rotation").append($("<div><img src='./Images/James_Shields.gif' id='staff'><div>"));
  } else if (speed >= 50 && divs == 3) {
    $("#rotation").append($("<div><img src='./Images/Corey_Kluber.gif' id='staff'><div>"));
  } else if (speed >= 100 && divs == 4) {
    $("#rotation").append($("<div><img src='./Images/Clayton_Kershaw.jpg' id='staff'><div>"));
  } else if (divs == 5) {
    $("#rotation").append($("<p>Your rotation is complete!</p>"));
  }
}

//clicking baseball adds to visual and actual speed of ball and updates account
$("#baseball").click(function() {
  data.totalRevs++;
  data.totalCurrent++;
  updateReport();
})

//buttons for purchase pitches which increases speed and updates account accordingly
$(".button").click(function() {
  var addVal = $(this).data("cost");
  if ($(this).data("cost") < data.totalCurrent) {
    data.totalCurrent -= parseFloat($(this).data("cost").toPrecision(2));
    data.totalRPS += parseFloat($(this).data("val"));
    $(this).children("span").html(parseInt($(this).children("span").html() * 1.15));
    $(this).data("cost", parseInt($(this).data("cost") * 1.15));
  }
  updateReport();
})