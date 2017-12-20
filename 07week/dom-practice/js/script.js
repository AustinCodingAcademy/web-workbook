'use strict';

document.addEventListener("DOMContentLoaded", alertFunction);

function alertFunction() {
  var x = document.getElementsByTagName('LI');
  alert (x.length);
}
var para = document.createElement("H2");
var node = document.createTextNode("'You have _ items in your shopping cart'");
para.appendChild(node);

var element = document.getElementById("Important");
element.appendChild(para,"Important");
