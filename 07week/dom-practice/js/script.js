'use strict'
var shoppingCart = 4;
alert("There are " + shoppingCart + " list items on the page");

document.addEventListener('DOMContentLoaded', () => {
  let shoppingCartItems = document.querySelectorAll("li");
  let numberOfShoppingCartItems = shoppingCartItems.length;
  let message = "You have " + numberOfShoppingCartItems + " in your shopping cart.";
  console.log(message);
  document.getElementById('message').innerHTML = message;
});

function addItem(){
  let list = document.getElementById('shoppingCart');
  let newThing = prompt("please add an item");
  let newEntry = document.createElement('li');
  newEntry.appendChild(document.createTextNode(newThing));
  list.appendChild(newEntry);
}

var element = document.getElementById("element-id");
element.parentNode.removeChild(element);
