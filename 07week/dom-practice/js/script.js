'use strict';
document.addEventListener('DOMContentLoaded', () => {
  var listicles = document.getElementsByTagName("li");
  console.log("number of <li> elements: " + listicles.length);
});

var para = document.createElement("li");
var node = document.createTextNode("Fifth List Item");
para.appendChild(node);
var element = document.getElementById("lists");
element.appendChild(para);

var parent = document.getElementById("div2");
var child = document.getElementById("P4");
parent.removeChild(child);

var para = document.createElement("p");
var node = document.createTextNode("Manipulating the DOM!");
para.appendChild(node);

var element = document.getElementById("div1");
var child = document.getElementById("lists");
element.insertBefore(para,child);
