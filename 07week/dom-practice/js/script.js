// Alert the user to how many list items there are on the page.
// Add a title to the page that says 'Manipulating the DOM!'. Do not use html to do this. Use JS.
// Add 'Fifth List Item' to the list.
// Remove 'Paragraph 4'.

'use strict'
window.onload = function(){
 var list = document.getElementsByTagName('ol');
  var message = 'this page has ' + list [0].child.length + 'list items';
alert(message);
}
var newelement = document.createElement('h1');
newelement.innerHTML = 'Manipulating th DOM';
document.body.appendChild(newelement);
document.querySelector('#P4').remove();
document.querySelector('ul').insertAdjacentHTML('afterend','<li>Fifth List Item</li>')
