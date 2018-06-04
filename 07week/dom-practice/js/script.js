'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  // You code here
});

var count = document.getElementById("myList").childElementCount;

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

function createLi() {
  var creli = document.createElement('li');
  creli.innerHTML = "New Item";
  var addli = document.getElementById('myList');
  addli.appendChild(creli);
}


var imgli1 = document.getElementById("li1");
imgli1.onmouseover = function() {
  img1.style.display = "block";
}

imgli1.onmouseout = function() {
  img1.style.display = "none";
}
