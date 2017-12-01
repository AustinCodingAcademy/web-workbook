'use strict';


// window.onload = function() {
//   var list = document.getElementsByTagName('ul');
//   var count = 'This page has ' + list[0].children.length + ' list items';
//   alert(count);
//
//   var newElement = document.createElement('h2');
//   newElement.innerHTML = "You have " + list[0].children.length + " items in your shopping cart.";
//   document.getElementsByTagName('h1')[0].appendChild(newElement);
// }


window.onload = function() {
  //TASK 1:  Alert the user to how many list items there are on the page.
  let listCountMessage = setListMessage();
  alert(listCountMessage);

  //TASK 2:  Add a <h2> to the page under the title that says 'You have _ items in your shopping cart'. Do not use html to do this. Use JavaScript.
  createListCountHeaderElement();
  updateListCountHeaderMessage();

  //Part of Task 4
  addRemoveButtonsToExistingItems();

  //Used to implement task 3
  createNewItemTextInput();

}

//Used for task 1 & 2
function setListMessage() {
  let list = document.getElementById("shopping-list");
  return "This page has " + list.children.length + " items in the shopping cart.";
}

//Used for task 2
function createListCountHeaderElement(message) {
  let listHeading = document.createElement("h2");
  document.getElementsByTagName("h1")[0].appendChild(listHeading);
  listHeading.setAttribute("id", "list-heading");
}

//Used for task 2, 3, & 4
function updateListCountHeaderMessage() {
  let listAlert = setListMessage();
  let listHeading = document.getElementById("list-heading");
  listHeading.innerHTML = listAlert;
}

//Used for task 4
function addRemoveButtonsToExistingItems() {
  let list = document.getElementById("shopping-list");
  for (let i = 0; i < list.children.length; i++) {
    addRemoveButton(list.children[i]);
  }
}

//Used for task 3 & 4 ()
function addRemoveButton(appendElement) {
  let removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";
  removeButton.onclick = deleteItem;
  appendElement.appendChild(removeButton);
  updateListCountHeaderMessage();
}

//Used for task 3
function createNewItemTextInput() {
  let textField = document.getElementById("item-text");
  textField.setAttribute("placeholder", "type item to add");

  let addButton = document.getElementById("add-button");
  addButton.innerHTML = "Add Item";
  addButton.onclick = addItem;

  document.getElementById("add-item").appendChild(textField);
  document.getElementById("add-item").appendChild(addButton);
}

//TASK 3:  Create the ability to add more items to the list using JavaScript.
function addItem(event) {
  event.preventDefault();

  let newItemText = document.getElementById("item-text").value;
  let newItem = document.createElement("li");
  newItem.innerHTML = newItemText;
  document.getElementById("shopping-list").appendChild(newItem);
  updateListCountHeaderMessage();

  addRemoveButton(newItem);
  document.getElementById('add-item').reset();
}

//TASK 4: Create the ability to remove an item from the shopping cart using javascript.
function deleteItem() {
  this.parentNode.remove(this);
  updateListCountHeaderMessage();
}
