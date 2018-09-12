'use strict';

// document.addEventListener("DOMContentLoaded", function(event) {
  // You code here
  
  // var list = document.getElementsByTagName("li").length;
  // var listItems = document.getElementById("our-list").getElementsByTagName("li");
  // var btn = document.createElement("BUTTON");
  // var btnText = document.createTextNode("Add Item");

  // btn.appendChild(btnText);
  // document.body.appendChild(btn);
  
  // alert("You have " + list + " items in your shopping cart");
  // element.insertAdjacentHTML();
window.onload=function(){


  var listAlert = listHeader();
  alert(listAlert);


  createHeaderElement();
  updateHeaderMessage();
  getText();

  function listHeader (){
    var listHeading = document.getElementById("our-list");
    return "This page has " + listHeading.children.length + " items in your shopping cart.";
    console.log ("test2");
  }

  function createHeaderElement () {
    var listHeading = document.createElement("h2");
    document.getElementsByTagName("h1")[0].appendChild(listHeading);
    listHeading.setAttribute("id", "listHeading");
  }

  function updateHeaderMessage (){
    var listAlert = listHeader();
    var listHeading = document.getElementById("listHeading");
    listHeading.innerHTML = listAlert;
    console.log("Test update");
  }

  function getText (event){
    var textField = document.getElementById("shoppingItems");
    var addButton = document.getElementById("shoppingButton");
    addButton.onclick = addListItem;
    console.log(textField);
  }

  function addListItem () {
    event.preventDefault();
    var textField = document.getElementById("shoppingItems").value;
    var newItem = document.createElement("li");
    newItem.innerHTML = textField;
    document.getElementById("our-list").appendChild(newItem);
    updateHeaderMessage();
    listHeader();
    console.log('am i there');
  }

  function deleteItem () {
    event.preventDefault();
    var newItem = document.createElement("li");
    newItem.innerHTML = textField;
    document.getElementById("our-list").prependChild(newItem);
    updateHeaderMessage();
    listHeader();
    console.log('am i removed')
  }

}

  // function createNewItem () {
  //   addToList.innerHTML += push."<li>New Item</li>";
  //   btn.addEventListener("click", createNewItem);
  //  }
  
  
  /*
  function createNewItem () {
  for(i=0; i<listItems.length; i++){
    addToList[i].addEventListener("click", createNewItem);
    }
  }
  */
  
// });



