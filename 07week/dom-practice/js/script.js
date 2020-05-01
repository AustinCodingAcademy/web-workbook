'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  
  
  var lists = document.querySelectorAll('li');
listAlert(lists);
shoppingCart(lists)
clickAbility();
});


function listAlert(lists) {
  var listCount = lists.length;
  alert("There are " + listCount + " list items.");
}

function shoppingCart(lists) {
  var currentSubHeading = document.getElementById('subheading')
  console.log( currentSubHeading);
  if (currentSubHeading != null) {
  currentSubHeading.parentNode.removeChild(currentSubHeading);
  }
  var heading = document.getElementsByTagName("h1")[0];
  var cartItems = updateCart();
  heading.insertAdjacentHTML('afterend', '<h2 id="subheading">There are ' + cartItems + ' items in your cart</h2>');
}

function updateCart() {
  var items = document.querySelectorAll("li");
  return items.length;
}

function clickAbility() {
var pTags = document.getElementsByClassName("paragraph");

  for(var i = 0; i<pTags.length; i++){
    pTags[i].onclick = addItem;
  }

  var liTags = document.getElementsByTagName("li");

  for(var i = 0; i<pTags.length; i++){
    liTags[i].onclick = removeItem;
  }
}

function addItem() {
  var itemAdded = event.srcElement.innerHTML;
  itemAdded = itemAdded.substring(0, itemAdded.indexOf(':'));
  var currentShoppingCart = document.getElementsByTagName("ul")[0];
  currentShoppingCart.insertAdjacentHTML('beforeend', '<li onclick="removeItem()">' + itemAdded + '</li>');
  shoppingCart(document.querySelectorAll('li'));
}

function removeItem() {
var itemRemoved = event.srcElement;
itemRemoved.parentNode.removeChild(itemRemoved);
shoppingCart(document.querySelectorAll('li'));
}
