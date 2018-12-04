
var numberofitems = (dcoument.querySelectorAll('#shoppinglist li').length);

alert(numberofitems);

var newh2 = document.createElement("h2");
var node = document.createTextNode("You have "+ numberofitems + " items in your shopping cart");
newh2.appendChild(node);
var element = document.getElementById("theshoppinglist");
element.appendChild(newh2);

function addItemFunction() {

  var newitem = document.createElement("li");
  var node = document.createTextNode("test")
  newitem.appendChild(node);

  var element = document.getElementById("shoppinglist");
  element.appendChild(newitem);
}

function deleteItemFunction() {

  var shoppinglist = document.getElementById("shoppinglist");
  shoppinglist.removeChild(shoppinglist.childNodes[0]); 

}


