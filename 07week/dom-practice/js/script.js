'use strict';

document.addEventListener("DOMContentLoaded", alertfunction);

function alertfunction() {
  var x = document.getElementsByTagName('LI');
  alert(x.length);
}
var para = document.createElement("h2");
var node = document.createTextNode("There are items in your cart."); para.appendChild(node);

var element = document.getElementById("listy");
var child = document.getElementById("list");
element.insertBefore(para,child);
