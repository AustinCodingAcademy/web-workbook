'use strict';
var shoppingList = document.querySelectorAll("li");
function checkList() {
window.alert('You have '+shoppingList.length +' items in your cart');
}
var h2Content = 'You have '+ shoppingList.length + ' items in your shopping cart';
var header1 = document.querySelector('h1');
header1.insertAdjacentHTML('afterend',`<h2>${h2Content}</h2>`);
