'use strict';

document.addEventListener("DOMContentLoaded", myAlert);

function myAlert() {

  var item = document.getElementsByTagName("LI");
  alert("There are " + item.length + " list items on the page");
}


window.onload = function() {

var heading = document.createElement("h2");
var headingText = document.createTextNode("You have _ items in your shopping cart");
heading.appendChild(headingText);
document.getElementById("heading").appendChild(heading);
}
