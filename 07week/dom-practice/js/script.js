'use strict';

var cart = [];

function countItems(){
  console.log("start countItems function");
  var cart = document.querySelectorAll(".cart");
  displayCount(cart.length);
  console.log("end countItems function");
}

function displayCount(items){
  console.log("start displayCount")
  var node = document.getElementById("itemCounter");
  console.log("the node I just fetched is", node);
  var i = parseInt(node.innerHTML);
  console.log("the old value is", i);
  var n = items;
  console.log("the n value is", n);
  node.innerHTML = n;
}

function addDiv(itemNum){
  console.log("start addDiv function");
  var parentDiv = document.createElement("DIV");
  var id = addID();
  console.log("the id I just added is", id);
  parentDiv.setAttribute("id", id);
  parentDiv.setAttribute("class", "cart");
  var newDiv = document.createElement("DIV");
  var itemName = document.getElementById(itemNum).innerHTML;
  var text = document.createTextNode(itemName);
  newDiv.appendChild(text);
  cart = document.getElementById("cart");
  parentDiv.appendChild(newDiv);

  var newButton = document.createElement("BUTTON");
  var value = document.createTextNode("remove from cart");
  newButton.setAttribute("onclick", "removeItem("+id+")")
  newButton.appendChild(value);
  parentDiv.appendChild(newButton);
  cart.appendChild(parentDiv);
  countItems();
  console.log("end addDiv function");
}

function addID(){
  var node = document.getElementById("cart");
  console.log("I just fetched this node:", node);
  return node.childNodes.length;
}

function removeItem(id){
  var item = document.getElementById(id);
  var parent = item.parentNode;
  parent.removeChild(item);
  countItems();
}
