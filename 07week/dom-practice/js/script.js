'use strict';

// document.addEventListener("DOMContentLoaded", function(event) {
window.onload = function() {
  setCounter();
  focusInput();
  disableButton()
}
// )};

function enterKey() {
  if (event.keyCode == 13 && userText.value.length > 0)  userAdd();
}

function disableButton() { //only enable button if there is text in input box
  if (userText.value.length > 0) {
    document.getElementById('addButton').disabled = false;
  } else {
    document.getElementById('addButton').disabled = true;
  }
}

function focusInput() {
  document.getElementById("userText").focus();
}

function setCounter() {
  var items = document.querySelectorAll("li").length;
  var newH = document.createElement("h3");
  newH.id = 'feedback';

  if (items === 1) //make it so if there is only one item it says "item" instead of "items"
  {
    var newText = document.createTextNode("You have " + items + " item in your shopping cart.");
    // alert("You have " + items + " item in your cart!");
  } else {
    var newText = document.createTextNode("You have " + items + " items in your shopping cart.");
    // alert("You have " + items + " items in your cart!");
  }

  newH.appendChild(newText);
  var element = document.getElementById("shop");
  element.appendChild(newH);

}

function updateCounter() {
  var cancel = document.getElementById('feedback');
  cancel.remove(); // Removes the h3 counter 'feedback'
  setCounter(); //Re-adds the h3 counter with new value

}

function userAdd() {
  var text = document.getElementById("userText").value; //get user text input
  var list = document.getElementById("list"); //getting element <ol> to add element to
  var li = document.createElement("li"); //create li element to add
  li.innerHTML = text + '&nbsp;<input type=submit value="Remove"/>'; //inserting text & button into newly created li
  li.onclick = function() { //click on li element to remove it
    this.parentNode.removeChild(this); //reference itself to remove
    updateCounter();
    focusInput();
  }

  list.appendChild(li);
  updateCounter();
  focusInput();
  userText.value = ''; //clear text field
  disableButton();

}
