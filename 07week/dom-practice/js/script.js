

'use strict'

window.onload = function() {

  cartCount();
  insertAddItem();
  insertRemoveItem();

  function cartCount() {
    let list = document.getElementsByTagName('ul');
    var count = document.querySelectorAll('li');
    document.querySelector('h1').insertAdjacentHTML('afterEnd', '<h2>You have ' + count.length + ' items in your shopping cart.');
  }

  function insertAddItem() {
    var newInput = document.createElement('input');
    newInput.setAttribute("placeholder", "Type to add");
    let cart = document.getElementsByTagName("ul");
    cart[0].after(newInput);
    newInput.setAttribute("id", "input-text");

    let newButton = document.createElement('button');
    newButton.innerHTML = 'Add Items';
    newButton.setAttribute("id", "add-button")
    let nextButton = document.getElementsByTagName("input");
    nextButton[0].after(newButton);

    newButton.onclick = addItem;
  }

  function addItem(event){
    let newItemText = document.getElementByID("input-text");
    let newItem = document.createElement("li");
    newItem.innerHTML = newItemText.value;
    document.getElementsByTagName("ul")[0].appendChild(newItem);
    document.getElementByID('input-text').value='';
    cartCount();
  }

}
