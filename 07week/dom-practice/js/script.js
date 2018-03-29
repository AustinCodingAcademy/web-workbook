'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  // line 3 listens to page to finish loading before running
  // alert("It's linked"); this is just the test

  alert("There are " + document.getElementsByTagName("li").length + " list items.");

  // document.appendChild("h2") = "You have _ items in your shopping cart";

  // var addH2 = document.createElement(h2["You have _ Items in your shopping cart"]);
  var h2Add = document.createElement("h2");
  var h2Text = document.createTextNode("You have _ items in your shopping cart."); // Create a text node
  h2Add.appendChild(h2Text); // Append the text to h2Add
  document.body.appendChild(h2Add);

});