'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  let items = document.querySelectorAll(".paragraph");
  let headingtwo = document.querySelector("h1");
  headingtwo.insertAdjacentHTML('beforeend', `<h2 id="itemlist">There are ${items.length} items in the list!</h2>`);
  let newitem = document.querySelector("#results").string;
  let submit = document.querySelector("#submit");
  submit.addEventListener(click, function(event) {
    items.insertAdjacentHTML('afterend', 
  `<li>
    <span>${newitem}</span>
  </li>`)
  });
});

// document.addEventListener("DOMContentLoaded", function(event) {
//   let newitem = document.querySelector("#results").string;
//   let items = document.querySelectorAll(".paragraph");
//   let submit = document.querySelector("#submit");
//   submit.addEventListener(click, insertAdjacentHTML('afterend', 
//   `<li>
//     <span>${newitem}</span>
//   </li>`)
// });
