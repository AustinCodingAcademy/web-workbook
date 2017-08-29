'use strict'

$(document).ready(function(){

  var listItems = document.querySelectorAll('li').length;
  alert(listItems);

  document.querySelector('body').insertAdjacentHTML('beforebegin', '<h1>Manipulating the DOM!</h1>');

  document.querySelector('ul').insertAdjacentHTML('beforeend', '<li>Fifth List Item</li>');

  document.querySelector('#p4').remove();

})
/*

    -Alert the user to how many list items there are on the page.

    -Add a title to the page that says 'Manipulating the DOM!'. Do not use html to do this. Use JS.

    -Add 'Fifth List Item' to the list.

    -Remove 'Paragraph 4'.

*/
