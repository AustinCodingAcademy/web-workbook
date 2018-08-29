'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  let totalListItems = document.querySelectorAll('li');
  let outputString = ''
  outputString = "You have " + totalListItems.length + " items in your shopping cart";
  document.querySelector('h1').insertAdjacentHTML('afterend', "<h2> "+ outputString + "</h2>")
});