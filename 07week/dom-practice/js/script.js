'use strict';

var count = document.getElementById("items").childElementCount;

function countItems() {
  console.log("I am in countItems");
}

document.getElementById("list").innerHTML = ("There are " + count + " items in this list");



function addP(x) {
  console.log("I am in addP")
  var newP = document.createElement("P");
  var text = document.createTextNode(x);
  newP.appendChild(text);

  var theList = document.getElementById("cart");
  theList.appendChild(newP);
  console.log("end of addP");

}

function addButton() {
  console.log("I am in addButton")
  var newButton = document.createElement("BUTTON");
  var text = document.createTextNode('Remove from cart');
  newButton.appendChild(text);

  var theList = document.getElementById("cart");
  theList.appendChild(newButton);
  console.log("end of addButton");
}

function removeElement() {
  console.log("I am in removeElement")
    var elem = document.getElementsByClassName("things");
    elem.parentNode.removeChild(elem);

}
