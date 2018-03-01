'use strict';

var totalItems = document.querySelectorAll("li").length;

function recountItems () {
  totalItems = document.querySelectorAll("li").length;
};

function alertTotalItems () {
  window.alert("There are " + totalItems + " items on the page.");
}
alertTotalItems();

//Add a <h2> to the page under the title that says
//'You have _ items in your shopping cart'. Do not use html to do this.
//Use JavaScript.

function cartHeader (total) {
  document.querySelector('#title').insertAdjacentHTML('beforeend',
  `<h5 id="cart-header">You have ${total} items in your shopping cart.</h5>`);
};

function updateHeader () {
  var currentHeader = document.getElementById("cart-header");
  var newHeader = document.createElement("h5");
  currentHeader.innerHTML = "replaced anchor!";
  myAnchor.parentNode.replaceChild(mySpan, myAnchor);
}
cartHeader(totalItems);

function addItem () {
  let itemName = document.querySelector('input').value
  let itemDescription = document.querySelector('textarea').value;
  document.querySelector('ul').insertAdjacentHTML('beforeend',`<li>${itemName}</li>`);
  document.querySelector('ul').insertAdjacentHTML('beforeend',`<p>${itemDescription}</p>`);
}

function removeItem (link) {
    link.parentNode.parentNode.removeChild(link.parentNode);
    recountItems ();
    cartHeader (totalItems);
}
