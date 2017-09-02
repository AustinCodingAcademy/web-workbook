'use strict';

window.onload = function() {
  // creating title of webpage
  var newelement = document.createElement('title');
  newelement.innerHTML = 'Manipulating the DOM!';
  document.head.appendChild(newelement);

  //removing paragraph four
  var $p = document.getElementById('p4');
  $p.remove();

  //adding fifth list item
  var li = document.createElement('li')
  li.innerText = 'Fifth List Item';
  document.getElementsByTagName('ul')[0].appendChild(li);

  //the alert message with number of list items
  var list = document.getElementsByTagName('li');
  var message = 'this page has: ' + list.length + ' list items';
  window.alert(message);

}
