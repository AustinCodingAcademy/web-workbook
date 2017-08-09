var myListsItems = document.getElementsByTagName('li');
alert(myListsItems.length);

var title = document.createElement('title');
var content = document.createTextNode("Manipulating The Dom!");
title.appendChild(content);
var head = document.getElementsByTagName('head');
head[0].appendChild(title);

function addElement (){
  var newli = document.createElement("li");
  var newContent = document.createTextNode("fifth list item");
  newli.appendChild(newContent);
var ul = document.getElementsByTagName('ul');
ul[4].appendChild(li);
}

function  removeChild(){
var toBeDeleted = document.getElementById("P4");
toBeDeleted.parentNode.removeChild(toBeDeleted);
}
