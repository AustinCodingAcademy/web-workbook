'use strict';




  
  let num = document.querySelectorAll("li").length;

  alert ("There are" + " " + num  + " " + "items in your cart");

  let title = document.querySelector("h1");

  title.insertAdjacentHTML("afterend", "<h2> You have" + " " + num + " " + "items in your cart. </h2>");

  function itemList() {
    var item = document.getElementById("addItemInput").value;
    var text - document.createTextNode(item)
    var newItem = document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("myList").appendChild(newItem)
  }


);