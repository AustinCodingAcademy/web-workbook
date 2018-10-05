'use strict';

document.addEventListener("DOMContentLoaded", () => {
  // You code here
  const list = document.getElementsByTagName("ul")[0];
  const items = list.getElementsByTagName("li");
  
  var itemCount = getItemCount();
  // alert("You have " + itemCount + " items");
  
  insertItemCountMessage();
  
  var buttonAddItem = document.getElementById('btn-add-item');
  buttonAddItem.addEventListener("click", () => { 
    let item = prompt("What would you like to add?"); 
    list.insertAdjacentHTML("beforeend", '<li>'+item+'</li>');
  });
  
  var buttonRemoveItem = document.getElementById('btn-remove-item');
  buttonRemoveItem.addEventListener("click", () => {  
    let lastItem = items[items.length - 1];
    if(lastItem) list.removeChild(lastItem);
  });


  function getItemCount() {
    return list.children.length;
  }

  function insertItemCountMessage() {
    let itemCount = getItemCount();
    let mainTitle = document.getElementById('main-title');
    mainTitle.insertAdjacentHTML("afterend", '<h2 id="itemCount">You have ' + itemCount + ' items in your shopping cart.');
  }
    

});
