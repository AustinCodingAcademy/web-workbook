'use strict';
document.addEventListener("DOMContentLoaded", function(event){
  //You code here
  let num = document.querySelectorAll('li').length;
  let title = document.querySelector('h1');
  
  alert("There are" + " " + num + " " + "items in your cart.");

  title.insertAdjacentHTML('afterend', '<h2>There are' + ' ' + num + ' ' + 'items in your cart</h2>');

});

function addListItem() {
  let text = document.querySelector('#addToCart').value;
  let li = '<li>' + text + '</li>';
  let ul = document.querySelector('#cart');
  ul.insertAdjacentHTML('beforeend', li);
  console.log(text);
  console.log(li);
}
