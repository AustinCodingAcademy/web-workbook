window.onload = function () {
  var listItems = document.getElementsByTagName("li");
  alert("<li> elements: " + listItems.length);
}

// remove fourth paragraph{
function removePar() {
  var parent = document.getElementById('par');
  var child = document.getElementById("P4");
  parent.removeChild(P4);
}

// add fifth list item
var button = document.getElementById('addLi');
var ul = document.getElementById('listItems');

var makeLi = document.createElement('li');
var makeText = document.createTextNode('Fifth List Item');

button.addEventListener('click', function(){
  ul.appendChild(makeLi).appendChild(makeText);
}, false);

// page title
document.title = "Manipulating the DOM";
