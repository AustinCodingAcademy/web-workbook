document.getElementById("start").addEventListener("click", jsDoms);

function jsDoms(){

  alert("There are " + document.getElementsByTagName("LI").length + " list items on the page");

  var titleElement = document.createElement("title");
  var parent = document.getElementById("head");
  parent.appendChild(titleElement);
  titleElement.innerHTML = "Manipulating the DOM!";

  var listElement = document.createElement("li");
  var parent = document.getElementById("ul");
  parent.appendChild(listElement);
  listElement.innerHTML = "Fifth List Item";


  var oldButton = document.getElementById("start");
  oldButton.parentNode.removeChild(oldButton);

  var newButton = document.createElement("button");
  newButton.innerHTML = "REMOVE 4th Paragraph";
  newButton.setAttribute("id","remove")

  var buttonParent = document.getElementById("button-parent");
  buttonParent.appendChild(newButton);
  document.getElementById("remove").addEventListener("click", jsRemove);

  function jsRemove() {
    var element = document.getElementById("p4");
    element.parentNode.removeChild(element);
    newButton.parentNode.removeChild(newButton);
  }

};
