'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  // You code here
  let listLength = document.getElementsByTagName('li').length;
  // alert("There are " + listLength + " items in your cart.");
  var h = document.createElement("H2");
  var t = document.createTextNode("You have " + listLength + " items in your shopping cart.");
  h.appendChild(t);
  var element = document.getElementById("h1");
  element.appendChild(h);

  // add new items
  var node = document.createElement("LI");
  var textnode = document.createTextNode("Something new");
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);

  //remove items
  var list = document.getElementById("myList");
  list.removeChild(list.childNodes[1]);

});