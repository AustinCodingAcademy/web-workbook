'use strict';

document.addEventListener("DOMContentLoaded", function(){

  var shoppingItems = document.querySelectorAll('li')
  console.log(shoppingItems)

  var h1 = document.querySelector('h1');
  h1.insertAdjacentHTML('afterend','<h2>You have 4 items in your cart.</h2>');
  //The Other way to append subheader...
  // var subheader = document.createElement('h5');
  // subheader.innerText = "You have 4 items in your cart";
  //
  // var h1 = document.querySelector('h1');
  // h1.appendChild(subheader);

  var h2 = document.querySelector('h2');
  h2.insertAdjacentHTML('afterend','<input placeholder=\'Enter item\'/>')

  var input = document.querySelector('input');
  input.insertAdjacentHTML('afterend','<button>Add Item</button>')

  var button = document.querySelector('button')
  button.addEventListener("click", addItemToList);


  function addItemToList() {
    var inputValue = input.value;
    console.log(inputValue)

    var li = document.createElement('li')
    li.innerText=inputValue;

    var ul = document.querySelector('ul')
    ul.appendChild(li)

    updateSubheader();
    addDeleteLink();

  }
    function updateSubheader(){
      var listItems = document.querySelectorAll('li')
      var listLength = listItems.length;
      console.log(listLength)
      h2.innerText = 'You have ' + listLength + ' items in your cart.'

    }

    function addDeleteLink(){
      var listItems = document.querySelectorAll('li')
      for (var i = 0; i < listItems.length; i++) {
        if (listItems[i].children.length===0){

        var deleteLink = document.createElement('a')
        deleteLink.innerText = 'delete'
        deleteLink.setAttribute('href','#')
        deleteLink.addEventListener('click', removeItem)
        listItems[i].appendChild(deleteLink)
      }

      }
    }
    function removeItem(){

    }
})
