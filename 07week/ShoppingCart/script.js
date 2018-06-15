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

function addToCart(label) {
  var cartDiv = document.createElement("row");
  var cartText = document.createTextNode(label);
 
  cartDiv.appendChild(cartText);

  var cartList = document.getElementById("shoppingcart");
  cartList.appendChild(cartDiv);
  console.log("End of shopping cart");
}

function theory() {
  document.getElementById("test").innerHTML = "Goodbye World";
}

function tester() {
  var result =  document.getElementById("products").innerHTML; 
  console.log(result);
}


