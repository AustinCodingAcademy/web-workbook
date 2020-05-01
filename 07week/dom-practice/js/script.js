'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  // You code here
  var h = document.getElementById("myh2");
  h.insertAdjacentHTML("beforebegin", "<h2>You have " +Array.length+ " items in your shopping cart.</h2>");

  /* 
  list = document.getElementsByTagName('ul')[0];
  newItem = document.createElement('li');
  newText = document.createTextNode('Five');
  newItem.appendChild(newText);
  list.appendChild(newItem); 
  list.insertAdjacentHTML("beforebegin", "<ul>You have " +Array.length+ " items in your shopping cart.</ul>");*/

  var uli = ["All-New Fire 7 Tablet","Flash Furniture Yellow Metal Indoor-Outdoor Chair with Arms","Amazon Echo","Coleman Lay Z Spa Inflatable Hot Tub"];
  for (var i=0; i < Array.length; i++){
    console.log(li[i]);
  }

});