'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  var shoppingCount = document.getElementsByTagName("li");
  alert(shoppingCount.length);
  var element = document.createElement("h2");
  var text = document.createTextNode("You have " + shoppingCount.length + " items in your shopping cart");
  element.appendChild(text);
  var shopping = document.getElementsByTagName("h1")

  text.appendChild(element);

});