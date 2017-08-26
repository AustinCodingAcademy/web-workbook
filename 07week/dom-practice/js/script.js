'use strict';

window.onload = function() {

  console.log(document.title = "I love OctoCat");

  console.log(document.querySelectorAll('li').length);

  document.querySelector('ul').insertAdjacentHTML('beforeend', '<li>Fifth list item</li');

  document.querySelector('#P4').remove();

  alert("There is five list items on this page!")









}









// Create a JS file and write code the will do the following:
// Alert the user to how many list items there are on the page.
// Add a title to the page that says 'Manipulating the DOM!'. Do not use html to do this. Use JS.
// Add 'Fifth List Item' to the list.
// Remove 'Paragraph 4'.
