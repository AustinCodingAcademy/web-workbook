'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
window.onload = function(){

  var count = document.querySelectorAll('li')


  window.alert("There are " + count.length + " items on your list");

  var newh2 = document.createElement('h2')
  newh2.innerHTML = "You have " + count.length + " items in your shopping cart"
  document.querySelector('h1').insertAdjacentHTML('afterEnd', '<h2>You have ' + count.length + ' items in your shopping cart.')

});
