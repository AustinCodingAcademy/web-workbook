function myFunction() {

  document.title = 'Manipulating the DOM!';

  alert("There are 4 items on this page!");

  var parent = document.getElementById("div");
  var child = document.getElementById("P4");
  parent.removeChild(child);

  var myList = document.getElementById('myList');
  var newEntry = document.createElement("li");
  newEntry.appendChild(document.createTextNode("This is new."));
  myList.appendChild(newEntry);
}

//Alert the user to how many list items there are on the page.
//Add a title to the page that says 'Manipulating the DOM!'. Do not use html to do this. Use JS.
//Add 'Fifth List Item' to the list.
//Remove 'Paragraph 4'.

myFunction();
