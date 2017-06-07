// alert the user to the number of list items
window.onload = function() {
  var listItems = document.getElementsByTagName('LI');
  alert('Number of list items: ' + listItems.length);
}

// remove the fourth paragraph
function removeFourth() {
  var list = document.getElementById('P4');
  list.remove();
}

// add fifth item
function addFifth() {
  var newItem = document.createElement('LI');
  var textnode = document.createTextNode('Fifth List Item');
  newItem.appendChild(textnode);

  var list = document.getElementById('myList');
  list.appendChild(newItem);
}

function header() {
  var heading = document.createElement('h1');
  return ('Manipulating the DOM!')
}

document.getElementById("h1").innerHTML = header();
