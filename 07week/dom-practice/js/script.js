'use strict';

// document.addEventListener("DOMContentLoaded", () => {
    // You code here
    window.onload=function(){

//Job number 1: Alert the user to how many list items there on the page

    let listCountMessage = setListMessage();
    alert(listCountMessage);

// Job number 2: Add a <h2> under the title that says 'You have _ items in your shopping cart'

createListCountHeaderElement();
updateListCountHeaderMessage();


//Job 3
createNewItemTextInput();


// part of Job 4

addRemoveButtonstoExistingItems();


  }





// used for Job 1 and 2

    function setListMessage(){
      let list = document.getElementById("shopping-list");
      return "This page has "+ list.children.length + " items in the shopping cart.";
    }

// used for Job 2

function createListCountHeaderElement(message){
  let listHeading= document.createElement("h2");
  document.getElementsByTagName("h1")[0].appendChild(listHeading);
  listHeading.setAttribute("id", "list-heading");
}

//used for job 2,3,and 4

function updateListCountHeaderMessage (){
  let listAlert = setListMessage();
  let listHeading = document.getElementById("list-heading");
  listHeading.innerHTML = listAlert;
}

// Used for job 4

function addRemoveButtonstoExistingItems(){
  let list=document.getElementById("shopping-list");
  for (let i=0; i<list.children.length; i++){
    addRemoveButton(list.children[i]);
  }
}

//used for jobs 3 & 4

function addRemoveButton (appendElement){
  console.log(appendElement);
  let removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";
  removeButton.onclick = deleteItem;
  appendElement.appendChild(removeButton);
  updateListCountHeaderMessage();
}

//used for job 3

function createNewItemTextInput(){
  let textField = document.getElementById("item-text");
  textField.setAttribute("placeholder", "type item to add");
  let addButton = document.getElementById("add-button");
  addButton.innerHTML="Add Item";
  addButton.onclick=addItem;

  document.getElementById("add-item").appendChild(textField);
  document.getElementById("add-item").appendChild(addButton);
}

// job 3 Create the ability to add more items to the list using JS

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

// job 4 Create the ability to remove an item from the cart using js

function deleteItem(){
  this.parentNode.remove(this);
  updateListCountHeaderMessage();
}
