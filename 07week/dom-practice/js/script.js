'use strict';
document.addEventListener('DOMContentLoaded', () => {

  alert("You have " + document.querySelectorAll("li").length + " items in your shopping cart.");
  document.querySelector("h1").insertAdjacentHTML('afterend',"<h2 id='cart'>You have " + document.querySelectorAll("li").length + " items in your shopping cart. </h2>");
});

function addItem(){
  // grabbing value that was put in searchBar
  var box = document.getElementById("searchBar").value;
  // creating new list item
  var node = document.createElement("LI");
  // creating delete button
  var textnode = document.createTextNode(box);
  var deleteButton = document.createElement("button");
  // adding class to delete button when it's created
  deleteButton.setAttribute('class', 'deleteButton');
  // adding delete button onto all list items
  node.appendChild(deleteButton);
  // creating text for delete button
  var buttonNode = document.createTextNode("-");
  // adding text to delete button
  deleteButton.appendChild(buttonNode);
  // adding text from searchBar to list item
  node.appendChild(textnode);
  // adds list item to list
  document.getElementById("myList").appendChild(node);
  // telling computer to listen for click
      deleteButton.addEventListener("click", function(){
        // saving list in a variable
        var list = document.getElementById('myList')
        // removing list item from list
        list.removeChild(node)
        updateList()
        
  });

  function updateList(){
  var list = document.getElementById('myList')
  console.log(list)
  var listLength = list.children.length
  console.log(listLength)
  document.getElementById('cart').innerHTML = "The Shopping Cart has " +listLength+ " items in the cart"
  }

  function deleteText(){
    document.getElementById("searchBar").value = ""
  }
  updateList()
  deleteText()
}


