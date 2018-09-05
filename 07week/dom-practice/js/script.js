'use strict';
// used for question 1 & 2
document.addEventListener('DOMContentLoaded', () => {
alert ("You have " + document.querySelectorAll("li").length + " items in your shopping cart.");                                          
document.querySelector("h1").insertAdjacentHTML("afterend","<h2>You have " + document.querySelectorAll("li").length + " items in your shopping cart. </h2>");                                          
});

//used for questions 2,3,and 4

function updateListCountHeaderMessage (){
  let listAlert = setListMessage();
  let listHeading = document.getElementById("list-heading");
  listHeading.innerHTML = listAlert;
}

// Used for question 4

function addRemoveButtonstoExistingItems(){
  let list=document.getElementById("shopping-list");
  for (let i=0; i<list.children.length; i++){
    addRemoveButton(list.children[i]);
  }
}



function addRemoveButton (appendElement){
  console.log(appendElement);
  let removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";
  removeButton.onclick = deleteItem;
  appendElement.appendChild(removeButton);
  updateListCountHeaderMessage();
}



function createNewItemTextInput(){
  let textField = document.getElementById("item-text");
  textField.setAttribute("placeholder", "type item to add");
  let addButton = document.getElementById("add-button");
  addButton.innerHTML="Add Item";
  addButton.onclick=addItem;

  document.getElementById("add-item").appendChild(textField);
  document.getElementById("add-item").appendChild(addButton);
}

function addItem(event){
  event.preventDefault();

  let newItemText = document.getElementById("item-text").value;
  let newItem=document.createElement("li");
  newItem.innerHTML=newItemText;
  document.getElementById("shopping-list").appendChild(newItem);
  updateListCountHeaderMessage();

  addRemoveButton(newItem);
  document.getElementById('add-item').reset();
}

function deleteItem(){
  this.parentNode.remove(this);
  updateListCountHeaderMessage();
}