window.onload = function() {
  var liCount = document.getElementsByTagName('ul');
  var cartItems = document.createElement('h2');
  cartItems.innerHTML = "You have " + liCount[0].children.length + " items in your cart";
  document.getElementById('theCart').insertBefore(cartItems, document.getElementById('theCart').childNodes[2]);
}

function itemAdd() {
  var newItem = document.createElement('li');
  newItem.innerHTML = document.getElementById('newItemField').value;
  newItem.onclick = removeItem();
  document.getElementById('cartList').appendChild(newItem);
}

function removeItem() {
  alert("okay");
}
