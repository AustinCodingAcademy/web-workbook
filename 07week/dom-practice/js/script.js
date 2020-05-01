'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  // You code here
});
'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
 
  
// i do task number one  
let listCountmessage= listCount ();
alert (listCountmessage);


createElement ();
createMessage ();
itemText ();
addRemoveButtonToExisting ();


// used in task number one
function listCount(){

let listCount = document.getElementById("shopping-list");
return "This page has " + listCount.children.length + " items in your shopping cart";

}

function createElement (){

let listHeading = document.createElement("h2");
document.getElementsByTagName("h1")[0].appendChild (listHeading);
listHeading.setAttribute("id", "listHeading");

}

function createMessage (){

let listMessage = listCount ();
let messageHeading = document.getElementById ("listHeading");
messageHeading.innerHTML = listMessage;
}

function itemText (){

let itemText = document.getElementById("item-text");
itemText.setAttribute ("placeholder", "add item here");

let addButton = document.getElementById ("add-button");
addButton.onclick = addItem;

}

function deleteItem(){
this.parentNode.remove(this);
createMessage();

}





function addRemoveButton(value){
  // console.log("remove");
let removeButton = document.createElement("button");
removeButton.innerHTML = "remove";
value.appendChild(removeButton);
removeButton.onclick = deleteItem;

}

function addItem (event){
console.log ("test");
event.preventDefault();
let addItemText = document.getElementById("item-text").value;

let newItem = document.createElement("li");
newItem.innerHTML = addItemText;

document.getElementById("shopping-list").appendChild(newItem);
createMessage ();
addRemoveButton(newItem);

}

function addRemoveButtonToExisting (){
  // console.log("remove");

let list = document.getElementById("shopping-list");

console.log("list.length = " + list.children.length);

for(let i=0; i<list.children.length; i++){
  console.log(i);
addRemoveButton(list.children[i]);

}








/* commit */






}





});