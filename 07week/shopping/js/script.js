window.onload = function() {
  var liCount = document.getElementsByTagName('ul');
  var cartItems = document.createElement('h2');
  cartItems.innerHTML = "You have " + liCount[0].children.length + " items in your cart";
  document.getElementById('theCart').insertBefore(cartItems, document.getElementById('theCart').childNodes[2]);
}

function itemAdd() {
  var newItem = document.createElement('li');
  var newButton = document.createElement('button');

  newItem.innerHTML = document.getElementById('newItemField').value;

  // newButton.className = remove;
  // newButton.onclick = removeItem;
  // newButton.innerHTML = Remove;

  document.getElementById('cartList').appendChild(newItem);
  newItem.appendChild(newButton);
}

function removeItem() {
  alert("okay");
}
