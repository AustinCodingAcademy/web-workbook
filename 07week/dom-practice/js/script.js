'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  // You code here
  var array = ["p1","p2","p3","p4"];
  
  for (var i=0; i < array.length; i++) {
      console.log(array[i]);
  }
  var h = document.getElementById("myH2");
  h.insertAdjacentHTML("beforebegin", "<h2>You have " +array.length+"  items in your shopping cart.</h2>");
  
});
