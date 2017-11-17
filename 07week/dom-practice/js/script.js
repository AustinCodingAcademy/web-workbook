'use strict';
//
// document.addEventListener("DOMContentLoaded", function(event) {
// window.onload = function() {

// }
// )};

setCounter();

function setCounter() {
var items = document.querySelectorAll("li").length;
var newH = document.createElement("h3");
newH.id = 'feedback';
var newText = document.createTextNode("You have " + items + " items in your shopping cart.");
newH.appendChild(newText);
var element = document.getElementById("shop");
element.appendChild(newH);
};


function updateCounter() {
  var cancel = document.getElementById('feedback');
  cancel.remove(); // Removes the h3 counter
  setCounter(); //Re-adds the h3 counter with new value
};

function userAdd(){

var text = document.getElementById("userText").value;
var newElement = document.createElement('li');
newElement.id = ('newLi');
newElement.innerHTML = text + '&nbsp;<input id=removeButton onclick="userRemove()" type=submit value="Remove"/>';
document.getElementsByTagName('ul')[0].appendChild(newElement);
updateCounter();
userText.value = ''; //clears user input field
}

function userRemove () {
  var element = document.getElementById('newLi');
  element.parentNode.removeChild(element);
  // document.getElementsByTagName('ul')[0].removeChild(element);
  updateCounter();
}

// alert(newElement);
