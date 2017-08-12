var myListItems= document.getElementsByTagName('li');
alert(myListItems.length);

var newTitle = document.createElement('title')
var node = document.createTextNode("Manipulating the DOM");
newTitle.appendChild(node);
var head = document.getElementsByTagName("head");
head[0].appendChild(newTitle);

var newListItem = document.createElement('li')
var listItem = document.createTextNode("Fifth List Item");
newListItem.appendChild(listItem);
var ul = document.getElementsByTagName("ul");
ul[0].appendChild(newListItem);

var element = document.getElementById("P4");
element.outerHTML = "";
delete element;
