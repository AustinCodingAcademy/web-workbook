'use strict';
window.onload = function() {

  var items = document.getElementsByTagName('ul');
  var count = 'You have '+items[0].children.length+' items in your cart.';
  // alert(count);

  var newElement = document.createElement('h2');
  newElement.innerHTML = count;
  document.body.appendChild(newElement);

}

function addItems() {

}

function removeItems() {

}
