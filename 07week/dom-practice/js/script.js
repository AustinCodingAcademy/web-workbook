// 'use strict';
//
// document.addEventListener("DOMContentLoaded", () => {
//
window.onload = function() {
  var list = document.getElementsByTagName("ul");

  var count = "The cart has " + list[0].children.length + " items in it";

  // alert(count);

  // var newListItem = document.createElement('li');
  // newListItem.innerHTML='Coleman campin stove';

  var newElement = document.createElement('h2');
  newElement.innerHTML = 'You have ' + list[0].children.length + ' in your shopping cart';

  document.body.appendChild(newElement);

};

var listItem = document.getElementById('items');

function changeText2() {

  var addItem = document.getElementById('addItem').value;
  var entry = document.createElement('li');
  entry.appendChild(document.createTextNode(addItem));
  listItem.appendChild(entry);

}
//
//
//
//
// });
