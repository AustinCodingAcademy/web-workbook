function Added() {
  console.log("Item Added To Cart");
}


function increment(num) {
  console.log("in increment");
  var node = document.getElementById("myCounter");
  console.log("the node i just fetched is ", node);
  var oldValue = parseInt(node.innerHTML);
  console.log("the old value is ", oldValue);
  var newValue = oldValue+1; 
  console.log("the new value is", newValue);
  node.innerHTML = newValue;

}

function addToCart() {
  var cartDiv = document.createElement("h4");
  var cartText = document.createTextNode("Item"); 

  cartDiv.appendChild(cartText);

  var cartList = document.getElementById("shoppingcart");
  cartList.appendChild(cartDiv);
  console.log("End of shopping cart");
}
