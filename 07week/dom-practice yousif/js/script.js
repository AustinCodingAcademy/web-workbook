'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("The page has been loaded");

});

function sayHi(){
  console.log("Saying hi");
}

function addLi(){
  console.log("I am in addLi")
  var newLi = document.createElement("LI");
  var text = document.createTextNode("water");
  newLi.appendChild(text);

  var theList = document.getElementById("myList");
  theList.appendChild(newLi);
  console.log("end of addLi")
}
