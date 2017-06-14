var objective2 = document.title;
document.title = "Manipulating the DOM!";

var objective3 = document.createElement("li");
var node = document.createTextNode("Fifth List Item");
objective3.appendChild(node);

var element = document.getElementById("div1");
element.appendChild(objective3);

var objective1 = document.querySelectorAll("li");
alert(objective1.length);

var parent = document.getElementById("div");
var child = document.getElementById("P4");
parent.removeChild(child);
