'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
console.log("This is interesting :0");
});
function addADiv(){
  var newLi = document.createElement("Li");
  var text = document.createTextNode("water");

  newLi.appendChild(text);

  var theList = document.getElementById("myList");
  theList.appendChild(newLi);
  console.log("end of LI");
}