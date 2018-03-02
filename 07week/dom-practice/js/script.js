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
cartHeader(totalItems);


function updateHeader () {
  recountItems ();
  document.getElementById("cart-header").innerHTML =
  `<h5 id="cart-header">You have ${totalItems} items in your shopping cart.</h5>`;
};

// var lastParID = document.getElementByID('p').lastChild.id;
// function updateLastParId () {
//   var
// };


function addItem () {
  let itemName = document.querySelector('input').value
  let itemDescription = document.querySelector('textarea').value;
  document.querySelector('ul').insertAdjacentHTML('beforeend',`<li>${itemName}<a href="#" onclick="removeItem(this)">[X Remove From Cart]</a></li>`);
  document.querySelector('p').insertAdjacentHTML('beforeend',`<p>${itemDescription}</p>`);
  updateHeader ();
};

function removeItem (link) {
    link.parentNode.parentNode.removeChild(link.parentNode);
    updateHeader ();
};
