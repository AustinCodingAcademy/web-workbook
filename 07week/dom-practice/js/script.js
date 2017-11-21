// 'use strict';
//
// document.addEventListener("DOMContentLoaded", () => {
//
window.onload = function() {
  var list = document.getElementsByTagName("ul");

  var count = "The cart has " + list[0].children.length + " items in it";

  alert(count);

  var newElement = document.createElement('h2');
  newElement.id = 'headTwo';
  newElement.innerHTML = 'You have ' + list[0].children.length + ' in your shopping cart';

  document.body.appendChild(newElement);

};

var listItem = document.getElementById('items');
var cartNum = document.getElementsByTagName('h2');

function changeText2() {

  var addItem = document.getElementById('addItem').value;
  var entry = document.createElement('li');
  entry.appendChild(document.createTextNode(addItem));
  listItem.appendChild(entry);

}

function removeItem() {
  listItem.removeChild(listItem.lastChild);
}

function cart() {
  var list = document.getElementsByTagName("ul");
  var head = document.getElementById("headTwo");
  var newHeader = document.createElement('h2');
  var textnode = document.createTextNode('You have ' + list[0].children.length + ' in your shopping cart');

  newHeader.appendChild(textnode);
  head.replaceChild(newHeader, head.childNodes[0]);
}

function counter() {
  var list = document.getElementsByTagName("ul");

  var count = "The cart has " + list[0].children.length + " items in it";

  alert(count);
}
//
//
//
//
// });
