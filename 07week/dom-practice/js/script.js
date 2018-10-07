'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  // You code here
  let paragraphs = document.querySelectorAll(".paragraph");
  alert("Number of paragraphs: " + paragraphs.length);

  let title = document.getElementsByTagName('h1')[0];
  let shoppingList = document.getElementsByTagName('ul')[0].getElementsByTagName('li');
  title.insertAdjacentHTML('afterend', '<h2>You have ' + shoppingList.length + ' items in your shopping cart.</h2>');

  document.getElementById('btnadd').onclick = function addlistitem() {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    var children = ul.children.length + 1
    li.setAttribute("id", "element"+children)
    li.appendChild(document.createTextNode("Shopping Item "+children));
    ul.appendChild(li);
    let shop = document.getElementsByTagName('h2')[0];
    shop.textContent = 'You have ' + shoppingList.length + ' items in your shopping cart.';
  };

  document.getElementById('btndelete').onclick = function removelistitem() {
    let ul = document.getElementsByTagName('ul')[0];
    if (ul.hasChildNodes()) {
      ul.removeChild(ul.lastChild);
    }
    let shop = document.getElementsByTagName('h2')[0];
    shop.textContent = 'You have ' + shoppingList.length + ' items in your shopping cart.';
  };
});
