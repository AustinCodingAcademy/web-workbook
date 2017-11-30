'use strict';

// document.addEventListener("DOMContentLoaded", () => {

window.onload = function() {
  var list = document.getElementById('list');
  var count = 'You have ' +list.children.length+ ' items in your shopping cart';
  window.alert(count);
  itemsInCart();
};

function addItem() {
  // var remove = document.getElementsByTagName('h2')[0];
  // document.body.removeChild(remove)
  var listItem = document.createElement('li');
  var input = document.getElementById('add');
  listItem.innerHTML = input.value;
  input.value = '';
  document.getElementById('list').appendChild(listItem);
  itemsInCart();
};

function deleteItem() {
  var listItem = document.getElementById('add');
  document.getElementById('list').removeChild(list.lastChild);
  itemsInCart();
};

function itemsInCart() {
  var list = document.getElementById('list');
  var newElement = document.createElement('h2');
  newElement.innerHTML = 'You have ' +list.children.length+ ' items in your shopping cart';
  document.getElementsByTagName('h1')[0].appendChild(newElement);
};

// });
