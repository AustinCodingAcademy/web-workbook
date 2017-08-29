'use strict';

// Alert the user to how many list items there are on the page.

var myNodelist = document.querySelectorAll("li");

alert(myNodelist.length);
alert("list items on this page.");

// Add a title to the page that says 'Manipulating the DOM!'. Do not use html to do this. Use JS.

document.title = "Manipulating the DOM!";

// Add 'Fifth List Item' to the list.

var newLi = document.createElement("li");
var menu = document.getElementById("list");

menu.appendChild(newLi);

newLi.innerHTML = "Fifth List Item"

// Remove 'Paragraph 4'.

var parent = document.getElementById("div");

var child = parent.getElementsByTagName("p")[3];

parent.removeChild(child);
