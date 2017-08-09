window.onload = function () {
 var myListItems = document.getElementsByTagName("li");
 alert("<li> elements:" + myListItems.length);

 createTitle();

 createListItem ();

 removeParagraphFour ();
}

function createTitle() {
  var newTitle = document.createElement("title"); //this creates <title></title>
  var titleContent = document.createTextNode("Manipulating the DOM!"); //this creates Manipulating the DOM!
    newTitle.appendChild(titleContent); //this creates <title>Manipulating the DOM!</title>
  var head = document.getElementsByTagName("head"); //this targets <head></head> in html
    head[0].appendChild(newTitle); //this puts everything into the <head></head>
}

function createListItem () {
  var newListItem = document.createElement("li");
  var listItemContent = document.createTextNode("Fifth List Item");
    newListItem.appendChild(listItemContent);
  var ul = document.getElementsByTagName("ul");
    ul[0].appendChild(newListItem);
}

function removeParagraphFour () {
  var parent = document.getElementById("div")
  var child = document.getElementById("P4")
  parent.removeChild(child);
}
