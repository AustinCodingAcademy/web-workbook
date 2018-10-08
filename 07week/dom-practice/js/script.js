"use strict";

document.addEventListener("DOMContentLoaded", function() {
  // Create a JS file and write code the will do the following:

  //  Alert the user to how many list items there are on the page.
  //   Add a <h2> to the page under the title that says 'You have _ items in your shopping cart'. Do not use html to do this. Use JavaScript.
  //   Create the ability to add more items to the list using JavaScript.
  //   Create the ability to remove an item from the shopping cart using javascript.
  //   Extension Challenge: Create the ability to display a picture of the product when the mouse hovers over the name of the project
  var mainTitle = document.getElementsByTagName("h1")[0];
  var list = document.getElementsByTagName("ul")[0];
  var button = document.getElementById("button");
  var buttonN = document.getElementById("buttonN");
  var listItems = document.getElementsByTagName("li");


  console.log(list.childNodes);
  console.log(mainTitle);
  mainTitle.insertAdjacentHTML("afterend", 
  '<h2 id= "items"> You have _ items in your shopping cart</h2>'
  );
  
  console.log(button);
  button.addEventListener("click", function() {
    list.insertAdjacentHTML("beforeend", '<li>Additional Items</li>');
  });
  console.log(buttonN);
  buttonN.addEventListener("click", function(){
    var lastItem = listItems[listItems.length -1];
    list.removeChild(lastItem);
  });
});
