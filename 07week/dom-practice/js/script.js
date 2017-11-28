'use strict';

// document.addEventListener("DOMContentLoaded", function(event) {
// Alert the user to how many list items there are on the page.
window.onload = function() {
  var list = document.getElementsByTagName('ul');
  var count = list[0].children.length
  var textMsg = "You have " + count + " items in your shopping cart."
  alert(count);

  // Add a <h2> to the page under the title that says 'You have _ items in your shopping cart'. Do not use html to do this. Use JavaScript.
  var whereIsH = document.body.childNodes[0];
  var addMsg = document.createElement('h2');
  addMsg.innerHTML = textMsg;
  whereIsH.appendChild(addMsg);
  addListButtons();

  // Create the ability to add more items to the list using JavaScript.
  // Create the ability to remove an item from the shopping cart using javascript.
  function addListButtons() {
    var theList = document.body.children[1];
    var listEnd = theList.children.length - 1;
    var addButton = document.createElement('button');
    addButton.innerHTML = "Add to Your Cart";
    addButton.onclick = addStuff;


    document.body.children[0].append(addButton);
    // console.log(listCollection);
    var listCollection = Array.from(document.getElementsByTagName('li'));
    for (var i = 0; i < listCollection.length; i++) {
      var removeButton = document.createElement('button');
      removeButton.id = "removeBttn";
      removeButton.innerHTML = "x";
      removeButton.onclick = removeStuff;
      listCollection[i].append(removeButton);
    }
    //This function will remove the line of which the x button is positioned
    function removeStuff() {
      var parentLi = this.parentNode
      parentLi.remove();
    }

    function addStuff() {
      var response = prompt("What do you want to add");
      var newItem = document.createElement('li');
      newItem.id = "newLi";
      newItem.innerHTML = response;
      theList.append(newItem);
      newItemRemove();
    }

    function newItemRemove() {
      var listCollection = Array.from(document.getElementsByTagName('li'));
      var x = listCollection.length-1;
      var newRemoveButton = document.createElement('button');
      newRemoveButton.id = "removeBttn";
      newRemoveButton.innerHTML = "x";
      newRemoveButton.onclick = removeStuff;
      listCollection[x].append(newRemoveButton);
    }

  }
  // Extension Challenge: Create the ability to display a picture of the product when the mouse hovers over the name of the project


};
// });
