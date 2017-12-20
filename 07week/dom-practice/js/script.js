'use strict';

document.addEventListener("DOMContentLoaded", alertFunction);
    // You code here

function alertFunction() {
  var x = document.getElementsByTagName('LI');
  alert("List items on this page: " + x.length);
}

var hey = document.createElement("H2");
