'use strict';

// JOB 4 Create the ability to remove an item from the shopping cart using javascript.
// JOB 5 Extension Challenge: Create the ability to display a picture of the product when the mouse hovers over the name of the project.
document.addEventListener("DOMContentLoaded", function(event) {
  //creates a list of the items in the cart


  let list = document.getElementsByTagName('ul');
  var shoppingList = document.getElementsByTagName('ul')[0];
  document.getElementsByTagName("ul")[0].setAttribute("id", "shoppingCart");

  //JOB 1, the alert
  let message = "This page has " + shoppingList.children.length + " list items my dude";
  alert(message);

  //JOB 2
  //creates the h2 that will be inserted as the h1's child
  let cartcounter = document.createElement('h2');
  //adss html inside that h2 we just created

  updatecartcounter();


    function updatecartcounter() {
    cartcounter.innerHTML = "You have " + shoppingList.children.length + " items in your shopping cart, my dude";
    }

  //finds the h1 that we want the newh2 to go under, then we append it underneath
  document.getElementsByTagName('h1')[0].appendChild(cartcounter);


  //creates a text field
  let input_txt = document.createElement('input');
  input_txt.setAttribute("id", "item-text");
  input_txt.type = "text";
  document.getElementsByTagName('h1')[0].appendChild(input_txt);
  //creates "Add item" button next to text field
  let input_btn = document.createElement('button');
  input_btn.type = "button";
  input_btn.setAttribute("id", "item-button");
  input_btn.innerHTML="Add Item";
  document.getElementsByTagName('h1')[0].appendChild(input_btn);

  //JOB 3,4 Takes input from text field and adds it to a new li in the ul, then adds remove button
  input_btn.onclick = addLi;



  function addLi() {
    //creates the li
    let li = document.createElement("li");
    //grabs the text written in the field, calls it newItem
    let newItem = document.getElementById('item-text').value;
    //puts newItem into the li
    li.innerHTML = newItem;
    //appends it to shoppingList
    shoppingList.appendChild(li);

    //creating remove button

    addrembutton();

    function addrembutton() {
      let rembutton =  document.createElement('button');
      rembutton.type = "button";
      rembutton.setAttribute("id", "remove-button");
      rembutton.innerHTML="Remove";
      li.appendChild(rembutton);
      rembutton.onclick = deleteItem;

      function deleteItem() {
        this.parentNode.remove(this);
        updatecartcounter();
        }
      updatecartcounter();
    }

  }

    addrembuttonstoexistingitems();

  function addrembuttonstoexistingitems() {
  let cartstuff = document.querySelectorAll('li');
  for (let i = 0; i < cartstuff.length; i++) {
    let cartitems = document.getElementById('shoppingCart').getElementsByTagName("li")[i];
    let rembutton = document.createElement('button');
    rembutton.type = "button";
    rembutton.setAttribute("id", "remove-button");
    rembutton.innerHTML="Remove";
    cartitems.appendChild(rembutton);
    rembutton.onclick = deleteItem;

    function deleteItem() {
      this.parentNode.remove(this);
      updatecartcounter();
      }
    }
  }
});
