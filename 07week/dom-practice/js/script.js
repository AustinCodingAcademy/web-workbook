'use strict';


// let title = document.querySelector("h1");
let cart = document.querySelectorAll("li");
let n = 10;
// title.insertAdjacentHTML('afterend', `<h2>You have ${cart.length} items in your shopping cart</h2>`);
document.querySelector("h1").insertAdjacentHTML('afterend', `<h2>You have ${cart.length} items in your shopping cart</h2>`);
// remember you can stack these commands

if (cart.length < n) {
  document.querySelector("h2").insertAdjacentHTML('afterend', `<p class="shipping">${n-cart.length} Items to go for free shipping</p>`);
} else {
  document.querySelector("h2").insertAdjacentHTML('afterend', `<p class="shipping">Qualifies for free shipping!</p>`);
}

function remove(item) {
  let thisoldthing = document.querySelector(`#${item}`);
  thisoldthing.remove();
  update();
}

function add() {
  let itemname = document.querySelector('input').value;
  let itemdesc = document.querySelector('textarea').value;
  let newcart = document.querySelectorAll("li");
  document.querySelector("ul").insertAdjacentHTML('beforeend', `<li id="item${newcart.length+1}">${itemname}  <button onclick="remove('item${newcart.length+1}')">Remove</button></li>`);
  let descriptionlist = document.querySelectorAll(".paragraph");
  descriptionlist[descriptionlist.length - 1].insertAdjacentHTML('afterend', `<p class="pargraph" id="p${newcart}">${itemname}: ${itemdesc}</p>`);
  update();
}

function update() {
  let newcart = document.querySelectorAll("li");

  // This is wrong because of something with getElementByTagName.  Not really sure.  Just always use querySelector.  But it stops as soon as there's an error, so leading with a mistake is a problem.  When troubleshooting, be sure to comment things out.
  // document.getElementByTagName("h2").insertAdjacentHTML('afterend', `<h2>(Tag) - You have ${newcart.length} items in your shopping cart</h2>`);

  // This is wrong because I don't want to insert another line, I want to replace what I have, which is innerHTML.
  //document.querySelector("h2").insertAdjacentHTML('afterend', `<h2>(Query) - You have ${newcart.length} items in your shopping cart</h2>`);

  // This is wrong because innerHTML isn't a function, it's .. something else.   So don't use (); use =.
  //document.querySelector("h2").innerHTML(`<h2>You have ${newcart.length} items in your shopping cart</h2>`);

  document.querySelector("h2").innerHTML = `<h2>You have ${newcart.length} items in your shopping cart</h2>`;

  if (newcart.length < n) {
    document.querySelector(".shipping").innerHTML = `<p class="shipping">${n-newcart.length} Items to go for free shipping</p>`;
  } else {
    document.querySelector(".shipping").innerHTML = `<p class="shipping">Qualifies for free shipping!</p>`;
  }
}

//the rest is left as an exercise for the reader .....
