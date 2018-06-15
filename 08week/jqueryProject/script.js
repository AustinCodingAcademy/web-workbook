'use strict'

$("div").click(function() {
  var clickedId = this.id;
  console.log("the id that was clicked is " +clickedId);
  var current = $("#counter").text();
  console.log("current counter is " +current);
  var currentAsNumber = parseInt(current);

  var newcounter;
  if(clickedId === "1"){
    newcounter = currentAsNumber +1;
  } else if (clickedId === "10") {
    newcounter = currentAsNumber +10;
  } else if (clickedId === "100") {
    newcounter = currentAsNumber +100;
  }

  $("#counter").text(newcounter);
})

