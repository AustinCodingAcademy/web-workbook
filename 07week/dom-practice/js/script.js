'use strict';
document.addEventListener("DOMContentLoaded", function(event){
  let num = document.querySelectorAll('li');
  let title = document.querySelector('h1');
  let div = document.querySelector('#div');

  //Alert with number of items in cart on page load
  alert("There are" + " " + num.length + " " + "items in your cart.");

  //Insert html h2 with number of items in cart after h1
  title.insertAdjacentHTML('afterend', '<h2>There are' + ' ' + num.length + ' ' + 'items in your cart</h2>');

  //Function to update cart count:
  function updateCount() {
    document.querySelector('h2').innerHTML = 'There are' + ' ' + document.querySelectorAll('li').length + ' ' + 'items in your cart.';
  }

  let text = document.querySelector('#addToCart');
  let ul = document.querySelector('#cart');
  //Add new items to cart from input field, clear field and update cart count
  document.querySelector('#add').onclick = function() {
    //create li element and add text from input with span:
    let li = document.createElement('LI'); 
    li.innerHTML = text.value + '<span class="delete">&times;</span>';
    //create paragraph element and text from input, define div selector:
    let para = document.createElement('P');
    para.innerHTML = text.value;
    para.setAttribute('class', 'paragraph');
    // Insert new html li string at the end of the ul, but not if text form is blank:
    if(text.value !== '') {
      ul.appendChild(li);
      div.appendChild(para);
      // Clear input form:
      text.value = '';
      // Update h2 with new cart count:
      updateCount();
    }
    addEvent();
  }

  //Clear entire cart function
  document.querySelector('#clear').onclick = function() {
    ul.innerHTML = '';
    div.innerHTML = '';
    updateCount();
  }

// working delete button:
  function addEvent() {
    let del = document.querySelectorAll('.delete');
    for(let i = 0; i < del.length; i++) {
      del[i].addEventListener('click', function(e){
        this.parentNode.parentNode.removeChild(this.parentNode);
      }, false);
    }
  }
  addEvent();

/*
  // loop thru the li array and assign each span an id based on its parent li's position:
  function updateId() { 
    let del = document.querySelectorAll('.delete');
    for(var i = 0; i < num.length; i++) {
      del[i].setAttribute('id', i);
  //  delete the ul child node which corresponds with the id number of the span clicked, generated by the above for loop; can't figure out why the onclick event only occurs with two clicks:
      del[i].addEventListener('click', function() {
        ul.removeChild(ul.childNodes[this.id]);
        div.removeChild(div.childNodes[this.id]);
        updateCount();
      });
    }
  }
  updateId();
*/
});