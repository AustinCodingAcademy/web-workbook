'use strict'

document.addEventListener("DOMContentLoaded", function() {
  var list = document.getElementsByTagName('ul');
  var message = 'This page has ' + list[0].children.length + ' list items';

  alert(message);

  document.title = 'Manipulating the DOM!';

  document.querySelector('body').insertAdjacentHTML ('beforeBegin', '<h3>Title Has Been Changed</h3>');

  document.querySelector('ul').insertAdjacentHTML('beforeEnd', '<li>Fifth List Item</li>');

  var last = document.getElementById('P4');
  last.remove();
})
