'use strict';

// var itemAmount = document.getElementsByTagName('li').length;

// document.addEventListener("DOMContentLoaded", function(event) {
//     alert('There are ' + itemAmount + ' items on this page.');
// });


// alert user how many list items there are on the page
window.onload = function() {
    let listItems = setListMessage();
    alert(listItems);

    // adding <h2> tag to page w/ title " You have ___ items in your shopping cart"

    // function for creating an item
    createListCount();
    // function for updating list
    updateListCount();
    //function for removing item
    removeItemCount();
}

function setListMessage() {
    let list = document.getElementById("shopping-cart");
    return "You have " + list.children.length + " in your shopping cart.";
}

function createListCount() {
    let listHeading = document.createElement("h2");
    document.getElementsByTagName("h1")[0].appendChild(listHeading);
    listHeading.setAttribute("id","list-heading");
}
function updateListCount() {
    let listAlert = setListMessage();
    let listHeading = document.getElementById("list-heading");
    listHeading.innerHTML = listAlert;
}

// remove functions
function removeItemCount() {
    let list = document.getElementById("shopping-cart");
    for(let i=0; i<list.children.length; i++) {
        removeItemButton(list.children[i]);
    }
}
function removeItemButton(appendElement) {
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "remove";
    removeButton.onclick = deleteItem;
    appendElement.appendChild(removeButton);
    updateListCount();
}

function deleteItem() {
    this.parentNode.remove(this);
    updateListCount();
}
/////////


function createNewItemTextInput() {
    let textField = document.getElementById("itemText");
    textField.setAttribute("placeHolder", "itemToAdd");

    let addItem = document.getElementById("addButton");
    addItem.innerHTML = "add-Item";
    addItem.onclick = addItem;

    document.getElementById("add-Item").appendChild(textField);
    document.getElementById("add-Item").appendChild(addItem);
}

function addItem(event) {
    event.preventDefault();

    let newItemText = document.getElementById("itemText").value;
    let newItem = document.createElement("li");
    newItem.innerHTML = newItemText;
    document.getElementById("shopping-cart").appendChild(newItem);
    updateListCount();

    removeItemButton(newItem);
    document.getElementById("add-Item").reset();
}