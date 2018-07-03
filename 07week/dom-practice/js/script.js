'use strict';
// Create a JS file and write code the will do the following:
// Alert the user to how many list items there are on the page.
// Add a <h2> to the page under the title that says 'You have _ items in your shopping cart'.
//  Do not use html to do this. Use JavaScript.
// Create the ability to add more items to the list using JavaScript.
// Create the ability to remove an item from the shopping cart using javascript.
// Extension Challenge: Create the ability to display a picture of the product when the
//  mouse hovers over the name of the project.
window.onload = function(){
  alertMessage();

function alertMessage(){
  var list = document.getElementsByTagName ('ol')
  var message = 'You have ' + list [0].children.length + ' items in your shopping cart'
  document.getElementById('howManyItems').innerHTML= message

}


function sayHI (){
  console.log("SayingHi");
}

}
function addItem(){
  console.log('click')
  console.log("I am in add item")
  // the variable the list becomes equal to the ID my list
  var thelist= document.getElementById("mylist");

  var text= document.createTextNode("water");
  var newitem = document.createElement("Li");
  newitem.appendChild(text);
  var btn = document.createElement("BUTTON");
  var t = document.createTextNode("X");
  btn.onclick= function(){
  thelist.removeChild(newitem)
  alertMessage();
  }
  btn.appendChild(t);
  newitem.appendChild(btn)


thelist.appendChild(newitem);
console.log("end of addLi")
alertMessage();
}
function alertMessage(){
  var list = document.getElementsByTagName ('ol')
  var message = 'You have ' + list [0].children.length + ' items in your shopping cart'
  document.getElementById('howManyItems').innerHTML= message

}

document.addEventListener("DOMContentLoaded", function(event) {
console.log("The page has been loaded");
});

function removeItem(){
  console.log("deleted item");
  var btn = document.createElement("BUTTON");
  var t = document.createTextNode("X");
  btn.appendChild(t);


}
