// Remember to save this

window.onload = function () {


    var paragraphs = document.getElementsByClassName("paragraph");
   alert("there are 4 List item on this page Manipulating the DOM!': " + paragraphs.length);
  changeTitle('Manipulating the DOM!');
  addListItem();
  removeParagraph('P4');
}
function changeTitle(newTitle) {
  // array of elements
  var elems = document.getElementsByTagName('title')[0];
  elems.innerHTML = newTitle;
}

function addListItem(){
  // will contain an array with 1 element
  var elems=document.getElementsByTagName ('ul') [0]; // acces the ul elemtn
  // this will create an li element unbound
var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode("Fifth List Item");         // Create a text node
node.appendChild(textnode);
elems.appendChild(node);
}

function removeParagraph (itemNumber){
  // save a reference to the parent element
var par = document.getElementById ('div');
// this is the element we actually want to remove
var paragraphToRemove = document.getElementById (itemNumber);
par.removeChild(paragraphToRemove);

}
