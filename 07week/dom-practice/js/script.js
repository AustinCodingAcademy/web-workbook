'use strict';
 document.addEventListener("DOMContentLoaded", function(event) {
  // You code here
let num = document.querySelectorAll("li").length;
   alert ("There are" + " " + num  + " " + "items in your cart");
   let title = document.querySelector("h1");
   title.insertAdjacentHTML("afterend", "<h2> You have" + " " + num + " " + "items in your cart. </h2>");

   function deleteItem(id) {
    id.style.display = "none";
  }

  function deleteItem(id) {
    id.style.display = "none";
}

  function addItem() {
    var ul = document.getElementById("myList");
    var listItem = document.getElementById('listItem');
    var li = document.createElement("li");
    li.setAttribute('id'.listItem.value);
    li.appendChild(document.createTextNode(listItem.value));
    ul.appendChild(li);
}


  function deleteItem(id) {
    id.style.display = "none";
  }


  
})