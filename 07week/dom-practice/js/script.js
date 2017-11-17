'use strict';

// document.addEventListener("DOMContentLoaded", function(event) {
// Alert the user to how many list items there are on the page.
  window.onload = function(){
    var list = document.getElementsByTagName('ul');
    var count = "You have " + list[0].children.length + " items in your shopping cart."
    // alert(count);

  // Add a <h2> to the page under the title that says 'You have _ items in your shopping cart'. Do not use html to do this. Use JavaScript.
    var whereIsH = document.body.childNodes[0];
    var addMsg = document.createElement('h2');
    addMsg.innerHTML = count;

    whereIsH.appendChild(addMsg);


  // Create the ability to add more items to the list using JavaScript.

    var theList = document.body.children[1];
    var listEnd = theList.children.length-1;
    var theButton = document.createElement('button');
    theButton.innerHTML = "Add to Your Cart";


    theButton.onclick = addStuff;

    function addStuff(){
      var response = prompt("What do you want to add");
      var newItem = document.createElement('li');
      newItem.innerHTML = response;

      theList.append(newItem);
    }

    document.body.children[0].append(theButton);

  // Create the ability to remove an item from the shopping cart using javascript.


  // Extension Challenge: Create the ability to display a picture of the product when the mouse hovers over the name of the project


};
// });
