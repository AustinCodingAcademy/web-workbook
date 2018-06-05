'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  // You code here
});

var count = document.getElementById("myList").childElementCount;

// Alert and insert h2

function myAlert() {
  alert("There are " + count + " list items on the page!");
}

function insertH2() {
  var varh2 = document.createElement('h2');
  varh2.innerHTML = "You have "+ count +" items in your shopping cart.";
  var varcontainer = document.getElementById('container');
  varcontainer.appendChild(varh2);
}

function onStart() {
  insertH2();
  myAlert();
}

window.onload = function(){
  onStart();
}

// delete items

function removeLi1() {
  var remli1 = document.getElementById("li1");
  remli1.remove();
}

function removeLi2() {
  var remli2 = document.getElementById("li2");
  remli2.remove();
}

function removeLi3() {
  var remli3 = document.getElementById("li3");
  remli3.remove();
}

function removeLi4() {
  var remli4 = document.getElementById("li4");
  remli4.remove();
}

// move to cart

// function moveLi1() {
//   var mvli1 = document.getElementById("item1").textContent;
//   document.getElementById("cart1").innerHTML = mvli1;
// }

function moveLi(item, cart) {
  var mvli = document.getElementById(item).textContent;
  document.getElementById(cart).innerHTML = mvli;

  // moveLi("item1");
  // moveLi("item2");
  // moveLi("item3");
  // moveLi("item4");

}

// Delete From Cart

// function removeLi1() {
//   var rmli1 = document.getElementById("cart1").textContent;
//   document.getElementById("cart1").innerHTML = ""
// }

function removeLi1() {
  var rmli1 = document.getElementById("cart1");
  rmli1.onclick = function() {
    cart1.style.display = "none";
  }
}

// add item to inventory

function createLi() {
  var creli = document.createElement('li');
  creli.innerHTML = "New Item";
  var addli = document.getElementById('myList');
  addli.appendChild(creli);
}

// image hover

var imgli1 = document.getElementById("li1");
imgli1.onmouseover = function() {
  img1.style.display = "block";
}

imgli1.onmouseout = function() {
  img1.style.display = "none";
}
