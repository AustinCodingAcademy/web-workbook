'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  let listItems = document.querySelectorAll("li").length;
    alert("You have " + listItems + " items in your shopping cart.");

  let h1 = document.querySelector("h1");
  h1.insertAdjacentHTML("afterend", "<h2>You have " + listItems + " items in your shopping cart</h2>");

  
  // inputField.insertAdjacentHTML("afterend", "<input type='text' onclick='newListItem()'>" + "<input type='submit'>");



});

let inputBox = document.querySelector("ul");
function newListItem(){
  event.preventDefault();
  let newLi = document.getElementById("insert").value;
  inputBox.insertAdjacentHTML('beforeend', "<li>"+newLi+"</li>");
}

