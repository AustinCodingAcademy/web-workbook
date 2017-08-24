alert("There are five list items on this page");

document.title='Manipulating the DOM';

alert(document.getElementsByTagName("li").length);

window.onload = function() {
  document.getElementById("P4").innerHTML = "";
}
