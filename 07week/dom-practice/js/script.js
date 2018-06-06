'use strict';

var cart = [];
var items = [];

function countItems(){
  console.log("start countItems function");
  items = document.getElementsByClass("items");

  for (var i = 0; i < items.length; i++) {
    return i;
    }

function addDiv1(){
  console.log("start addDiv1 function");
  var newDiv = document.createElement("DIV");
  var itemName = document.getElementById("item-one").innerHTML;
  var text = document.createTextNode(itemName);
  newDiv.appendChild(text);

  cart = document.getElementById("cart");
  cart.appendChild(newDiv);
  console.log("end addDiv1 function");
}

function addDiv2(){
  console.log("start addDiv2 function");
  var newDiv = document.createElement("DIV");
  var itemName = document.getElementById("item-two").innerHTML;
  var text = document.createTextNode(itemName);
  newDiv.appendChild(text);

  cart = document.getElementById("cart");
  cart.appendChild(newDiv);
  console.log("end addDiv2 function");
}

function addDiv3(){
  console.log("start addDiv3 function");
  var newDiv = document.createElement("DIV");
  var itemName = document.getElementById("item-three").innerHTML;
  var text = document.createTextNode(itemName);
  newDiv.appendChild(text);

  cart = document.getElementById("cart");
  cart.appendChild(newDiv);
  console.log("end addDiv3 function");
}

function addDiv4(){
  console.log("start addDiv4 function");
  var newDiv = document.createElement("DIV");
  var itemName = document.getElementById("item-four").innerHTML;
  var text = document.createTextNode(itemName);
  newDiv.appendChild(text);

  cart = document.getElementById("cart");
  cart.appendChild(newDiv);
  console.log("end addDiv4 function");
}

function addDiv5(){
  console.log("start addDiv5 function");
  var newDiv = document.createElement("DIV");
  var itemName = document.getElementById("item-five").innerHTML;
  var text = document.createTextNode(itemName);
  newDiv.appendChild(text);

  cart = document.getElementById("cart");
  cart.appendChild(newDiv);
  console.log("end addDiv5 function");
}

function addDiv6(){
  console.log("start addDiv6 function");
  var newDiv = document.createElement("DIV");
  var itemName = document.getElementById("item-six").innerHTML;
  var text = document.createTextNode(itemName);
  newDiv.appendChild(text);

  cart = document.getElementById("cart");
  cart.appendChild(newDiv);
  console.log("end addDiv6 function");
}

function addDiv7(){
  console.log("start addDiv7 function");
  var newDiv = document.createElement("DIV");
  var itemName = document.getElementById("item-seven").innerHTML;
  var text = document.createTextNode(itemName);
  newDiv.appendChild(text);

  cart = document.getElementById("cart");
  cart.appendChild(newDiv);
  console.log("end addDiv7 function");
}

function addDiv8(){
  console.log("start addDiv8 function");
  var newDiv = document.createElement("DIV");
  var itemName = document.getElementById("item-eight").innerHTML;
  var text = document.createTextNode(itemName);
  newDiv.appendChild(text);

  cart = document.getElementById("cart");
  cart.appendChild(newDiv);
  console.log("end addDiv8 function");
}
