'use strict';

document.addEventListener("DOMContentLoaded", alertFunction);
document.addEventListener("DOMContentLoaded", addH2);

function alertFunction() {
  var x = document.getElementsByTagName('LI');
  //alert (x.length);
}

function addH2() {
  var x = document.getElementsByTagName('LI').length;
  var para = document.createElement("H2");
  var node = document.createTextNode('You have _ items in your shopping cart');
  para.appendChild(node);

  var element = document.getElementById("header1");
  element.appendChild(para);
}
