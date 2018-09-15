'use strict';

// document.addEventListener("DOMContentLoaded", function(event) {
//   // You code here
// });


// Alert the user to how many list items there are on the page.

// window.onload=function () {
//   var listCountMessage = lstMsg ();
//   alert (listCountMessage);
// }

// function lstMsg () {
//   var list = document.getElementById("shoppingList");
//   return"You have" + list.children.length + "items in your shopping cart";
// }

// function lstCountMsg () {
//   var heading = document.createElement("h2");
//   document.getElementsByTagName("h1")[0].appendChild(heading);
//   heading.setAttribute("id", "list-heading");
// }

// function updateLst (){
//   let listAlert = setListmessage ()  
// }

let h1 = document.querySelector('h1');
h1.insertAdjacentHTML('afterend', '<h2>You have ' + countItems() + ' items in your cart!</h1>');

function countItems(){
  let listItems = document.querySelectorAll('li').length;
  return listItems;
}
function addItem(){
  let unList = document.querySelector('ul');
  let stuff = document.querySelector('div');
  let item = document.querySelector('#itemEntry').value;
  let h2 = document.querySelector('h2').value;
  if (document.querySelector('#itemEntry').value !== ""){
  unList.insertAdjacentHTML('beforeend', '<li>' + item + '</li>');
  document.querySelector('#itemEntry').value = "";
  stuff.insertAdjacentHTML('beforeend', '<p> stuff stuff stuff </p>');
 document.querySelector('h2').innerHTML = "You have " + countItems() + " in your cart!";
  }
function removeItem(){
document.querySelector('ul li:last-child').remove();
  }
  
}