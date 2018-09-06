'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  let items = document.querySelectorAll(".paragraph");
  let headingtwo = document.querySelector("h1");
  headingtwo.insertAdjacentHTML('beforeend', `<h2 id="itemlist">There are ${items.length} items in the list!</h2>`);
});

document.addEventListener("DOMContentLoaded", function(event) {
  let newitem = document.querySelector("#results").string;
  let items = document.querySelectorAll(".paragraph");
});
