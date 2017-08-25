'use strict'

window.onload = function() {
  var list = document.getElementByTagName('ul');
  var message = 'This page has ' + list[0].children.length + ' list items';

  alert(message);

  document.title = 'Manipulating the DOM!';

  document.querySelector('body').insertAdjacentHTML ('beforebegin', '<h3>Title Has Been Changed</h3>')

  li.insertAdjacentHTML(afterend, 'Fifth List Item');

  // var parent = document.getElementById("div");
  // var child = document.getElementById("p4");
  // parent.removeChild(parent.childNodes[3]);

  // parent.removeChild(list.childNodes[3]);

  // $("#div > p4").remove();

  document.remove(#p4);
}


// var list = document.getElementByTagName('ul');
// var message = 'This page has ' + list[0].children.length + ' list items';
//
// alert(message);
