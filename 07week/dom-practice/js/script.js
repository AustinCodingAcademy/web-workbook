'use strict';

document.addEventListener("DOMContentLoaded", alertBox);
document.addEventListener("DOMContentLoaded", myFunction);
// You code here
function alertBox() {
var x = document.getElementsByTagName("LI").length;
alert("This list contains " + x + " items");
}
function myFunction() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Water");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
}
