'use strict';

window.onload = function() {

  // How many lists
  var list = document.getElementsByTagName("li");
  alert("There are " + list.length + " list items on this page");

  //Manipulating the DOM
  var newelement = document.createElement('h1');
  newelement.innerHTML = 'Manipulating the DOM!';
  document.body.appendChild(newelement);

  //Add fifth list item
  var newElement = document.createElement('li');
  newElement.textContent = "Fifth List Item";
  var list = document.getElementById('my-list');
  list.appendChild(newElement);

  var paragraph = document.getElementById("P4");
  paragraph.parentNode.removeChild(paragraph);

}





// Dinh's List

// 'use strict'
//
// window.onload = function() {
//   var list =
//     document.getElementByTagName('ol');
//   var message = 'this page has' = list[0].child.length + 'list items';
//
// var newelement = document.createElement('h1');
// newelement.innerHTML = 'Javascript';
// document.body.appendChild(newelement);
//
// }


// Create a JS file and write code the will do the following:
// Alert the user to how many list items there are on the page.
// Add a title to the page that says 'Manipulating the DOM!'. Do not use html to do this. Use JS.
// Add 'Fifth List Item' to the list.
// Remove 'Paragraph 4'.
