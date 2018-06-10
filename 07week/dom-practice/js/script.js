'use strict';



function countItems() {
  console.log("I am in countItems");

}

countItems();

var count = document.getElementById("items").childElementCount;
document.getElementById("list").innerHTML = ("There are " + count + " items in this list");


var nextId = 1



function addP(x) {
  console.log("I am in addP")
  var myDiv = document.createElement("DIV");
  var newP = document.createElement("P");
  var text = document.createTextNode(x);
  newP.appendChild(text);
  myDiv.setAttribute("Id", nextId);


  var theList = document.getElementById("cart");
  myDiv.appendChild(newP);
  theList.appendChild(myDiv);
  console.log("end of addP");
  addButton(nextId, myDiv)
  nextId = nextId +1;
}

function addButton(id, myDiv) {
  console.log("I am in addButton")
  var newButton = document.createElement("BUTTON");
  newButton.setAttribute("onclick" , "removeElement("+id+")")
  var text = document.createTextNode('Remove from cart');
  newButton.appendChild(text);

  var theList = document.getElementById("cart");
  myDiv.appendChild(newButton);
  console.log("end of addButton");
}

function removeElement(idToRemove) {
  console.log("I am in removeElement with id " +idToRemove)
  var pToRemove = document.getElementById(idToRemove);
  var parent = pToRemove.parentNode;
  parent.removeChild(pToRemove);

}
