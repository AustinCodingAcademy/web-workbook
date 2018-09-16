'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
window.onload = function(){

  var count = document.querySelectorAll('li')


  window.alert("There are " + count.length + " items on your list");

  var newh2 = document.createElement('h2')
  newh2.innerHTML = "You have " + count.length + " items in your shopping cart"
  document.querySelector('h1').insertAdjacentHTML('afterEnd', '<h2>You have ' + count.length + ' items in your shopping cart.')

  function insertAddItem () {
    var newInput = document.createElement('input');
    newInput.setAttribute("placeholder", "Type to add");
    let cart = document.getElementsByTagName("ul");
    cart[0].after(newInput);
    newInput.setAttribute("id", "input-text");

    let newButton = document.createElement('button');
    newButton.innerHTML = 'Add Items';
    newButton.setAttribute("id", "add-button")
    let nextButton = document.getElementsByTagName("input");
    nextButton[0].after(newButton);

    newButton.onclick = addItem;
  }

});
