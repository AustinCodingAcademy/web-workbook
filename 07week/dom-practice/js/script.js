'use strict'

window.onloud = function() {
  var list = document.getElementByTagName('ol');
  var message = 'this page has ' + list[0].child.length + 'list items';

  alert(message);
  var newelement = document.createElement('h1');
  newelement.innerHTML = 'JavaScript';
  document.body.appendChild(newelement);

  var $p =
      document.getElementById('P4');

  $p.remove();
}
