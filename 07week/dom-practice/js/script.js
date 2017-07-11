function ThisIsCamsWorldNow() {

  var listItems = document.getElementsByTagName("li");
    alert("There are "+listItems.length+" list items on this page");

  document.title = "Manipulating the DOM!";

  var newList= document.getElementById("list");
  var newEntry = document.createElement("li");
  newEntry.appendChild(document.createTextNode("This is a new list item!"));
  newList.appendChild(newEntry);

  var paragraph = document.getElementById("P4");
  paragraph.parentNode.removeChild(paragraph);

}

ThisIsCamsWorldNow();
