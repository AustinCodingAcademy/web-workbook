'use strict';
document.addEventListener("DOMContentLoaded", function(event) {
    // You code here
var listOfItems = document.getElementsByTagName('li');
alert('Number of Items: ' + listOfItems.length );
var title = document.getElementsByTagName('h1');
var subtitle = '<h2>You have '+ listOfItems.length + 'items in your shopping cart</h2>';
var d1 = document.getElementByID('title');
d1.insertAdjacentHTML ('afterend', subtitle);
});
var list = document.getElementById("myList");
list.removeChild(list.childNodes[0]);
var node = document.createElement("LI");
var textnode = document.createTextNode("Water");
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);
