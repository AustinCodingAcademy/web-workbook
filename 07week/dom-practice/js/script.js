'use strict';

document.addEventListener("DOMContentLoaded", function(event) {

  let num = document.querySelectorAll("li").length;

  alert ("There are" + " " + num  + " " + "items in your cart");

  let title = document.querySelector("h1");

  title.insertAdjacentHTML("afterend", "<h2> You have" + " " + num + " " + "items in your cart. </h2>");;

  function myFunction() {

    var x = document.getElementById("listItem");
    var node = document.createElement("li");
    var textnode = document.createTextNode("x")
    document.getElementById(myList).innerHTML = x;
  }

  function deleteItemOne() {
    document.getElementById("itemOne").innerHTML = " "
  }
});