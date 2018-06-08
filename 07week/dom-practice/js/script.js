'use strict';

document.addEventListener('DOMContentLoaded', function() {
  //creating subheader
  var subheader = document.createElement('h5');
  subheader.innerText = 'You have 4 items in your cart';
  var h1 = document.querySelector('h1');
  h1.appendChild(subheader);

  //creating a form
  var listContainer = document.querySelector('ul');
  listContainer.insertAdjacentHTML('afterend', '<div id=\'form-container\'></div>');
  var formContainer = document.getElementById('form-container');
  //creating label
  var label = document.createElement('label');
  label.innerText = 'Add Item: ';
  formContainer.appendChild(label);
  //creating input
  var input = document.createElement('input');
  label.appendChild(input);
  //creating button
  var button = document.createElement('button');
  button.innerText = 'Add';
  button.style.marginLeft = '5px';
  formContainer.appendChild(button);
  button.addEventListener('click', addItemToList);
  //build addItemToList function
  //inside this function another function to update subheader
  function addItemToList() {
    var newListItem = document.createElement('li');
    var newValue = input.value;
    newListItem.innerText = newValue;
    listContainer.appendChild(newListItem);

    //changes the subheader to show how many things are on the list
    function updateSubheader() {
      var listLength = document.getElementsByTagName('li').length;
      subheader.innerText = `You have ${listLength} items in your cart.`
    }
    updateSubheader();

    function addDeleteLink() {
      var listItems = document.getElementsByTagName('li');
      for (var i = 0; i < listItems.length; i++) {
        if (listItems[i].children.length === 0) {
          var a = document.createElement('a');
          a.innerText = 'x';
          a.setAttribute('href', '#');
          a.addEventListener('click', deleteItem);
          listItems[i].appendChild(a);

        }
      }
    }
    addDeleteLink();
  }
  function deleteItem(e) {
    //console.log(e.target);
    //console.log(e.target.parentElement.tagName);
    if (e.target.parentElement.tagName === 'LI') {
      e.target.parentElement.remove();
      //console.log(listContainer.children.length);
      subheader.innerText = `You have ${listContainer.children.length} items in your cart.`
    }

  }


})
