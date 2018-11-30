'use strict';
document.addEventListener("DOMContentLoaded", function(event){

  let num = document.querySelectorAll('li').length;
  let title = document.querySelector('h1');

  //Alert with number of items in cart on page load
  alert("There are" + " " + num + " " + "items in your cart.");

  //Insert html h2 with number of items in cart after h1
  title.insertAdjacentHTML('afterend', '<h2>There are' + ' ' + num + ' ' + 'items in your cart</h2>');

  //Function to update cart count:
  function updateCount() {
    document.querySelector('h2').innerHTML = 'There are' + ' ' + document.querySelectorAll('li').length + ' ' + 'items in your cart.';
  }

  //Add new items to cart from input field, clear field and update cart count
  document.querySelector('#add').onclick = function() {
    // Get text from input field:
    let text = document.querySelector('#addToCart').value;
    // Create new li string with text from input field:
    let li = '<li>' + text + '<span class="delete">&times;</span></li>';
    // Shorten query selector for ul so it's easier to read:
    let ul = document.querySelector('#cart');
    // Insert new html li string at the end of the ul, but not if text form is blank:
    if(text == '') {
    } else {
      ul.insertAdjacentHTML('beforeend', li);
      // Clear input form:
      document.querySelector('#addToCart').value = '';
      // Update h2 with new cart count:
      updateCount();
    }
  }

  //Clear entire cart function
  document.querySelector('#clear').onclick = function() {
    document.querySelector('ul').innerHTML = '';
    updateCount();
  }

/*
  //Trying to delete individual lines from list
  let del = document.querySelectorAll('#delete');
  let line = document.querySelectorAll('li');

  for(var i = 0; i < num; i++){
    console.log(i);
  }
*/
});