'use strict'

window.onload = function(){
  itemAlert();
  insertItemCounter();
  insertAddItem();
  insertRemoveItemExistingItem();
}

function listCount(){
  let list = document.getElementsByTagName("ul");
      return list[0].children.length;
}

function itemAlert(){
  let list = document.getElementsByTagName("ul");
      alert("there are " + listCount() + " items in your shopping cart")
}

function insertItemCounter () {
  let newh2 = document.createElement('h2');
  let list = document.getElementsByTagName("ul");
  let listCount = list[0].children.length;
      newh2.innerHTML = 'You have ' + listCount + ' items in your shopping cart';
  let countMessage = document.getElementsByTagName("h1");
      countMessage[0].after(newh2);
      newh2.setAttribute("id", "item-count");
}

function insertAddItem(){
  var newInput = document.createElement('input');
      newInput.setAttribute("placeholder", "Type to add");
  let cart = document.getElementsByTagName("ul");
      cart[0].after(newInput);
      newInput.setAttribute("id", "input-text");

  let newButton = document.createElement('button');
      newButton.innerHTML ='Add Items';
      newButton.setAttribute("id","add-button");
  let nextButton = document.getElementsByTagName("input");
      nextButton[0].after(newButton);

      newButton.onclick = addItem;
}

function addItem(event){
  let newItemText = document.getElementById("input-text");
  let newItem = document.createElement("li");
      newItem.innerHTML= newItemText.value;
      document.getElementsByTagName("ul")[0].appendChild(newItem);
      document.getElementById('input-text').value='';

      insertRemoveItem(newItem);
      updateItemCounter();
}

function updateItemCounter(){
  let h2 = document.getElementById("item-count");
      h2.innerHTML = 'You have ' + document.getElementsByTagName('ul')[0].children.length + ' items in your shopping cart';
}

function insertRemoveItem(items){
  let removeButton= document.createElement('button');
      removeButton.innerHTML = "Remove";
      items.appendChild(removeButton);
      removeButton.onclick = eraseItem;
}

function eraseItem(){
      this.parentNode.remove();
      updateItemCounter();
}

function insertRemoveItemExistingItem(){
  let cart = document.getElementById("cart");
      for (let i = 0; i < cart.children.length; i++){
          insertRemoveItem(cart.children[i]);
          }
}
