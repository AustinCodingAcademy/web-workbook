document.title='Manipulating the DOM';

window.onload = function() {
  document.getElementById("P4").innerHTML = "";
alert(document.getElementsByTagName('li').length);

var ul = document.getElementById("unorderedList");
var newLI = document.createElement("LI");
ul.appendChild(newLI);
newLI.innerHTML = "Fifth List Item";
}
