'use strict';
window.onload = function () {
// Add title to page
  var newtitle = document.createElement('title');
  var title = document.createTextNode("Manipulating the DOM!");
  newtitle.appendChild(title);
  document.head.appendChild(newtitle);
// Remove paragraph 4
  var div = document.getElementById('div');
  var p4 = document.getElementById('P4');
  div.removeChild(p4);
// Create a fifth list item
  var list = document.getElementById('list');
  var newli = document.createElement('li');
  var fifth = document.createTextNode("Fifth List Item");
  newli.appendChild(fifth);
  list.appendChild(newli);
//Alert user to number of list items
  var listItems = document.getElementsByTagName('li');
  alert('There are ' + listItems.length + ' list items.');
};
