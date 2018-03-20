'use strict';

let items = document.querySelectorAll('li')

alert(items.length)

// document.querySelector('h1').insertAdjacentHTML('afterend',)
  <h2>You have ${items.length} items in your shopping cart<h2>

function addItem() {
  let itemName = document.querySelector('input').value
  let itemDescription = document.querySelector('textarea').value;
  document.querySelector('ul').insertAdjacentHTML('beforeend',)
  <li><li>
}
