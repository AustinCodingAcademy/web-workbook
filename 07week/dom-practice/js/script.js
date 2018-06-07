'use strict';

var cart = [];

function countItems(){
  console.log("start countItems function");
  var items = document.querySelectorAll(".items");
  displayCount(items.length);
  console.log("end countItems function");
}

countItems();

function displayCount(items){
  console.log("start displayCount")
  var node = document.getElementById("itemCounter");
  console.log("the node I just fetched is", node);
  var i = parseInt(node.innerHTML);
  console.log("the old value is", i);
  var n = i + items;
  console.log("the n value is", n);
  node.innerHTML = n;
}


function addDiv(itemNum){
  console.log("start addDiv1 function");
  //need to create a div that will wrap around the div below and the button and give it a unique id
  var newDiv = document.createElement("DIV");
  var itemName = document.getElementById(itemNum).innerHTML;
  var text = document.createTextNode(itemName);
  newDiv.appendChild(text);
  var id = 3 // going to figure out how to make this unique for each one
  cart = document.getElementById("cart");
  cart.appendChild(newDiv);

  var newButton = document.createElement("BUTTON");
  var value = document.createTextNode("remove from cart");
  newButton.setAttribute("onclick", "removeItem("+id+")")
  newButton.appendChild(value);
  cart.appendChild(newButton);

  console.log("end addDiv1 function");
}

function removeItem(id){
  
}
