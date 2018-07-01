'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  // You code here
});

var count = document.getElementById("cart").childElementCount;

// Alert and insert h2

function myAlert() {
  alert("There are " + count + " list items on the page!");
}

function insertH2() {
  var newH2 = document.createElement('h2');
  newH2.innerHTML = "You have "+ count +" items in your shopping cart.";
  var varcontainer = document.getElementById('container');
  varcontainer.appendChild(newH2);
}

function onStart() {
  insertH2();
  myAlert();
}

window.onload = function(){
  onStart();
}

// Copy From Cart

// function addToCart(item, cart){
//   var additem = document.getElementById(item).cloneNode(true);
//     document.getElementById(cart).appendChild(additem);
// }

// Add to Cart

function addToCart(item) {
  var select = document.getElementById(item).textContent;
  var create = document.createElement('div');
  create.innerText = select;
  var button = document.createElement('button');
  button.setAttribute("class", "deleteitem");
  button.setAttribute("onclick", "deleteItem(this);updateH2()");
  button.textContent = "delete item";
  create.appendChild(button);
  document.getElementById('cart').appendChild(create);
}

// Delete from cart

function deleteItem(item){
  item.onlick = item.parentNode.remove();
}

// update cart count

function updateH2() {
  var updatedCount = document.getElementById("cart").childElementCount;
  var newH2 = document.querySelector("h2");
  newH2.innerHTML = "You have "+ updatedCount +" items in your shopping cart.";
}

// add item to inventory

function createLi() {
  var creli = document.createElement('li');
  creli.innerHTML = "New Item";
  var addli = document.getElementById('myList');
  addli.appendChild(creli);
}

// image hover

var imgli1 = document.getElementById("li1");
imgli1.onmouseover = function() {
  img1.style.display = "block";
}

imgli1.onmouseout = function() {
  img1.style.display = "none";
}
