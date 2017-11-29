'use strict';

// document.addEventListener("DOMContentLoaded", () => {
// You code here
window.onload = function() {
  var list = document.getElementsByTagName('ul');

  var count = 'this page has ' + list[0].children.length + ' list items';
  alert(count);
}
var list = document.getElementsByTagName('ul');

function addH2() {
  var itemsInCart = document.createElement("h2");
  var itemsInCartText = document.createTextNode("You have " +
    list[0].children.length + " items in your shopping cart.");
  itemsInCart.appendChild(itemsInCartText);
  document.getElementsByTagName('h1')[0].appendChild(itemsInCart);
};
addH2();

function addToCart() {
  var textBox = document.getElementById('typeItem');
  var addToList = document.createElement('li');
  var listText = document.createTextNode(textBox.value);
  addToList.appendChild(listText);
  document.getElementsByTagName('ul')[0].appendChild(addToList);
  var itemsInCart = document.createElement("h2");
  var itemsInCartText = document.createTextNode("You have " +
    list[0].children.length + " items in your shopping cart.");
  itemsInCart.appendChild(itemsInCartText);
var parent = document.getElementsByTagName('h1')[0];
var child = document.getElementsByTagName('h2')[0];
parent.replaceChild(itemsInCart, child);
}

// create button to remove items from cart
function addRemoveButton() {
  var removeBtn = document.createElement('button');
  removeBtn.id = 'remove';
  var btnText = document.createTextNode('Remove Item');
  removeBtn.appendChild(btnText);
  document.getElementsByTagName('ul')[0].appendChild.removeBtn;
  console.log('test');
}

document.getElementsByTagName('ul')[0].addEventListener('click', addRemoveButton);


// });
