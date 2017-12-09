'use strict';
// Alert the user to how many list items are one the page.
  window.onload = function(){
    var list = document.getElementsByTagName('ul');
    var count = 'You have ' + list[0].children.length + ' items in your shopping cart.';
// alert(count);
  console.log(count);
// Add a <h2> to the page under the title that says “You have ___ items in your shopping cart”.
  var newElement = document.createElement('h2');
  var dlist = document.getElementById('myList');
  newElement.innerHTML = 'You have ' + dlist.children.length + ' items in your shopping cart';
  document.getElementsByTagName('h1')[0].appendChild(newElement);
}
// Create the ability to add more items to the list.
  function newItem() {
    var listItem = document.createElement('li');
    var input = document.getElementById('add');
    listItem.innerHTML = input.value;
    input.value = '';
    document.getElementById('myList').appendChild(listItem);
};
// Create the ability to remove an item from the shopping cart using javascript.
  function deleteItem() {
    var listItem = document.getElementById('delete');
    var dlist = document.getElementById('myList');
    document.getElementById('myList').removeChild(dlist.lastChild);
};
 //Create the ability to display a picture of the product when the mouse hovers over the name of the project.
function pHover(){
var dlist = document.getElementById('myList');
  var newElement = document.createElement('h2');
  newElement.innerHTML = 'You have ' +dlist.children.length+ ' items in your shopping cart';
  document.getElementsByTagName('h1')[0].appendChild(newElement);
};
