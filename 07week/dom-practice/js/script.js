'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  // You code here
  //Alert the user to how many list items there are on the page
  var listLength = document.byTagName("li").length
  alert('there are'+listLength+'item in your cart');
  var h = document.createElement("h2");
  var t = document.createTextNode("you have"+listLength+"items in your shopping cart");
  h.appendChild(node);


  var newElement = document.createElement("ul");
  element.appendChild(h);
});
