var title = document.title
document.title = "Manipulating the Dom!";

var list = document.querySelectorAll('li');
alert(list.length);

var node = document.createElement ("Li");
var textnode = document.createTextNode ("Fifth List Item");
node.appendChild(textnode);
document.getElementById("InventoryList").appendChild(node);

var parent = document.getElementById("div");
var child = document.getElementById("P4");
parent.removeChild(child);
