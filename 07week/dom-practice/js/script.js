alert("There are " + document.getElementsByTagName("LI").length + " list items on the page");

var titleElement = document.createElement("title");
var parent = document.getElementById("head");
parent.appendChild(titleElement);
titleElement.innerHTML = "Manipulating the DOM!";

var liElement = document.createElement("li");
var parent = document.getElementById("ul");
parent.appendChild(liElement);
titleElement.innerHTML = "Fifth List Item";
