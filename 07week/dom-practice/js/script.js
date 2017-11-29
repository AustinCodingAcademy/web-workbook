'use strict';

// document.addEventListener("DOMContentLoaded", () => {

window.onload = function() {
  var list = document.getElementById('list');
  var newElement = document.createElement('h2');
  var header = document.getElementsByTagName('h2');
  newElement.innerHTML = 'You have ' +list.children.length+ ' items in your shopping cart';
  document.getElementsByTagName('h1')[0].appendChild(newElement);
  var count = 'You have ' +list.children.length+ ' items in your shopping cart';
  window.alert(count);
};

function addItem() {
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
  var header = document.getElementsByTagName('h2');
  header[0].innerHTML = "";
  header[0].innerHTML = 'You have ' +list.children.length+ ' items in your shopping cart';
};

// });
