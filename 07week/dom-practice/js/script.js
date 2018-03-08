'use strict';

document.addEventListener("DOMContentLoaded", function(event) {

  const liList = document.querySelectorAll("li");
  alert("There are " + liList.length + " list items on this page.");

  const itemsMessage = document.querySelector("#items-message");
  const items = liList.length;
  itemsMessage.innerHTML = `<h2>You have ${items} items in your shopping cart.</h2>`;

  // function addItem() {
  const itemNum = document.querySelector();
  const item = document.querySelector('#' + itemNum);
  const itemName = item.innerHTML.split(':')[0];
  const listItem = document.createElement('li');
  listItem.onclick = function(e) { this.parentNode.removeChild(this) }
  listItem.innerHTML = itemName;
  const unorderedList = document.querySelector('ul');
  unorderedList.appendChild(listItem);

    // }
});
