// 1. SOLVED Alert the user to how many list items there are on the page.

// 2. SOLVED Add a <h2> to the page under the title that says 'You have _ items
//    in your shopping cart'. Do not use html to do this. Use JavaScript.

// 3. Create the ability to add more items to the list using JavaScript.

// 4. Create the ability to remove an item from the shopping cart using
//    javascript.

// 5. Extension Challenge: Create the ability to display a picture of the
//    product when the mouse hovers over the name of the project.

'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
    // You code here

    // Adds an alert that tells the user how many list items there are on load
    var count = 'This page has '+ list.children.length + ' list items';
    alert(count);

    //Adds an h2 tag under the h1 tag
    var newElement = document.createElement('h2');
    newElement.innerHTML = 'You have ' + list.children.length + ' items in your shopping cart.'
    document.getElementById('h1').appendChild(newElement);

    //Trying to allow user to add more items to the addEventListener
    //IT DOESN'T WORK RIGHT NOW
    function addInput(input){
      var newDiv = document.createElement('newInput')
      newDiv.innerHTML = "<input type='text' name='inputs[]'>";
      document.getElementById('input').appendChild(newInput);
    }

});
