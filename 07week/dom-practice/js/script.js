'use strict';

// document.addEventListener("DOMContentLoaded", () => {

window.onload = function() {
  var list = document.getElementById('list');
  // list.insertAdjacentHTML('beforeend', '<li>List Item</li>');

  var count = 'You have ' +list.children.length+ ' items in your shopping cart';
  window.alert(count);


};

function addItem() {
  var listItem = document.createElement('li');
  var input = document.getElementById('add');
  listItem.innerHTML = input.value;
  input.value = '';
  document.getElementById('list').appendChild(listItem);
  var newElement = document.createElement('h2');
  newElement.innerHTML = 'You have ' +list.children.length+ ' items in your shopping cart';
  document.getElementsByTagName('h1')[0].appendChild(newElement);
};



// });



// Alert the user to how many list items there are on the page.

// Add a <h2> to the page under the title that says 'You have _ items in your
// shopping cart'. Do not use html to do this. Use JavaScript.

// Create the ability to add more items to the list using JavaScript.

// Create the ability to remove an item from the shopping cart using javascript.

// Extension Challenge: Create the ability to display a picture of the product
// when the mouse hovers over the name of the project.
