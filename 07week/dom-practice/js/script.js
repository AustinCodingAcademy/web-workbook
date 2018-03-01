'use strict';


// let title = document.querySelector("h1");
let cart = document.querySelectorAll("li");
// title.insertAdjacentHTML('afterend', `<h2>You have ${cart.length} items in your shopping cart</h2>`);
document.querySelector("h1").insertAdjacentHTML('afterend', `<h2>You have ${cart.length} items in your shopping cart</h2>`);
// remember you can stack these commands


function remove(item) {
  let thisoldthing = document.querySelector(`#${item}`);
  thisoldthing.remove();
}

function add() {
  let itemname = document.querySelector('input').value;
  let itemdesc = document.querySelector('textarea').value;
  document.querySelector("ul").insertAdjacentHTML('beforeend', `<li>${itemname}</li>`);
  let descriptionlist = document.querySelectorAll(".paragraph");
  let newcart = document.querySelectorAll("li");
  descriptionlist[descriptionlist.length - 1].insertAdjacentHTML('afterend', `<p class="pargraph" id="p${newcart}">${itemname}: ${itemdesc}</p>`);
  console.log(`<p class="pargraph" id="p${newcart.length}">${itemname}: ${itemdesc}</p>`);

}

document.querySelector("h1").insertAdjacentHTML('afterend', `<h2>You have ${cart.length} items in your shopping cart</h2>`);


//the rest is left as an exercise for the reader .....
