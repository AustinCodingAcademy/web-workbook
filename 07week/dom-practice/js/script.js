'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  // You code here    

  //requirement 1
  let matches = document.querySelectorAll("p.paragraph");
  alert("There are " + matches.length + " items in the store.");
  //requirement 2
  let title = document.querySelector('h1');  
  title.insertAdjacentHTML('afterend', '<h2>You have items ' + matches.length + ' in your shopping cart.</h2>');

  //requirement 3 & 4
  let btnItem = document.getElementById('addItem'); 
  let itemList = document.getElementById('items');  
  //item event add
  btnItem.addEventListener('click', newItem);
  //item event delete
  itemList.addEventListener('click', removeItem);
  //add item 
  function newItem(e) {
    //get input value
    let liItem = document.getElementById('item').value;
    //create new li element
    let li = document.createElement('li');
    //add text node with input value
    li.appendChild(document.createTextNode(liItem));
      //Create del button
  let delBtn = document.createElement('button');
  //add classes to del button
    delBtn.className = 'btn';
    //append text node
    delBtn.appendChild(document.createTextNode('del'));
    //append button to li
    li.appendChild(delBtn);
    //append li
    itemList.appendChild(li);
  }
  //remove item paramater is event
  function removeItem(e) {
    //confirms removal of List item
    confirm('Are you sure?');
    //removes by targeting parent element of del button
    let deleteLi = e.target.parentElement;
    itemList.removeChild(deleteLi);    
  } 
});
