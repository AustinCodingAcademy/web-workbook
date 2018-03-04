'use strict';

let list = document.querySelectorAll('li');

// window.alert(list.length);

let ul = document.querySelector('ul');

var itemCount = 0
function addItem() {
    itemCount++
  document.querySelector('#item-counter').innerHTML = `
   <h2>You Have ${itemCount} items in your shopping cart</h2>
  `;
  console.log(itemCount);
}
