'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  let listItems = document.querySelectorAll("li").length;
  //alert("There are " + listItems + " items on the page!");

  // let h1 = document.
  let h1 = document.querySelector("h1");
  h1.insertAdjacentHTML('afterend', "<h2>You have " + listItems + " items in your shopping cart</h2>");

  });

let inputBox = document.querySelector("ul");
  function newListItem(){
    event.preventDefault();
    let newLi = document.getElementById("insert").value;
    // alert(newLi);
    inputBox.insertAdjacentHTML('beforeend', "<li>"+newLi+"<div class='button' onclick='removeIt(this)'>x</div></li>");
  }

  function removeIt(elem){
    // alert(elem.innerHTML);
    elem.parentElement.remove();
  }

