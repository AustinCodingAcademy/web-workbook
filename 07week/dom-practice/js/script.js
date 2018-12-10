'use strict';

window.onload = function(){

  let listCountMessage = setListMessage();
  alert(listCountMessage);
  createListCountHeaderElement();
  updateListCountHeaderMessage();
  createNewItemTextInput();
  addRomoveButtonsExistingItems();

}
function setListMessage(){
  let list = document.getElementById("shopping-list");
  return "this page has"= list.children=" items"
}
function
createListCountHeaderElement(message){
  let listHeading= document.createElement("h2");
  let h1 = document.getElementsByTagName("h1");
  let count = document.getElementById("shopping-list");
  listHeading.innerHTML=("there are"+ count.children.length + "items");

  h1[0].appendChild(listHeading);
}
function createNewItemTextInput(){
  let textField = document.getElementById("item-text");
  textField.setAttriubute("placeholdeer"),"type item to add")
  let Button =
  document.getElementById('add-button');
  addButton.innerHtml="Add Item";
  addButton.onclick=addItem;

  document.getElementById('add-item').appendChild(textField);
  document.getElementById('add-item').appendChild(addButton);
}

  function functionName() {

  }
