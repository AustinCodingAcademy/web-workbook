'use strict';
document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let paragraphs = document.querySelectorAll(".subPara");
  console.log("<p> elements with class subPara: " + paragraphs.length);
  let list = document.querySelectorAll("li");
  console.log("<p> elements with li element: " + list.length);
});

function add(list) {
  console.log("h2 name");
  let div = document.createElement("div");
  let h2 = document.createElement("H2");
  let text = document.getElementById(list).innerHTML;
  let textNode = document.createTextNode(text);
  let test = "test";
  console.log(text);
  h2.appendChild(textNode);

  let h2div = document.getElementById("header2");
  h2div.appendChild(h2);
  console.log("what what");
}



function del() {
  var x = document.getElementById("items-listed <li>");
  x.remove();
}
