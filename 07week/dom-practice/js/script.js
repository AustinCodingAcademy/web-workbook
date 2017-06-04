function IamTheDOM () {

  var listItems = document.getElementsByTagName("li");
  alert("There are "+ listItems.length + " <li> elements");

  // var Title = document.createTextNode("World");
  document.title = "Manipulating the DOM!";
  // appendChild(worldText)

  var craigsList = document.getElementById("myList");
  var newEntry = document.createElement("li");
  newEntry.appendChild(document.createTextNode("Check me out.  New entry!"));
  craigsList.appendChild(newEntry);

  // craigsList.appendChild(newEntry.appendChild(document.createTextNode("Check me out.  New entry!")));


  var paragraph = document.getElementById('P4');
  paragraph.parentNode.removeChild(paragraph);

  // var firstNames("Popcorn", "Snorkle", "Foot")

}

IamTheDOM ();
