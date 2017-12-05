'use strict';

document.addEventListener("DOMContentLoaded",() => {
    // You code here
  //  window.onload = function() {
    var list = document.getElementsByTagName('ul');
  //  list.insertAdjacentHTML('beforeend', '<li> fifth list item </li>')

    var count = 'This page has ' + list[0].children.length + 'list items';
  //  alert(count);

    var newElement = document.createElement('h2');
    newElement.innerHTMl="You have items in your shopping cart.";

    var h2 = document.createElement('H2');
    var text1 = document.createTextNode('You have');
    var text2 =  list[0]children.length;
    var text3 =  document.createTextNode('items in your shopping cart');
    h2.appendChild(text1);
    h2.appendChild(text2);
    h2.appendChild(text3);
    document.getElementsByTagNAme("h1").appendChild(h2);
  //  var listTag = document.getElementsByTagName('ul');
  //  listTag.insertBefore(text, listTag);
    //document.getElementsByTagName
  //  }
});
