'use strict';

document.addEventListener("DOMContentLoaded", function(event) {

  var listItems = document.querySelectorAll('li');

    console.log(listItems.length);



        var h = document.createElement("H2");
        var t = document.createTextNode("You have _ items in your shopping cart");
        h.appendChild(t);
        document.body.appendChild(h);

function addItem() {
  var ul = document.targetElementById("dynamic-list");
  var candidate = document.targetElementById("candidate");
  var li = document.createElement("li");
  li.setAttribute('id',candidate.value);
  li.appendChild(document.createTextNode(candidate.value));
  ul.appendChild(li);
}

function removeItem(){
	var ul = document.getElementById("dynamic-list");
  var candidate = document.getElementById("candidate");
  var item = document.getElementById(candidate.value);
  ul.removeChild(item);
}

window.onload = function() {
   init();
  
}

function init() {
   document.getElementById("P1").onmouseover = function() {
      this.className = "paragraph";
   }
   document.getElementById("P1").onmouseout = function() {
      this.className = "";
   }
}


});
