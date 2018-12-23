'use strict';
document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let paragraphs = document.querySelectorAll("li");
  alert("You have " + paragraphs.length + " items in your cart.");
  var para = document.createElement("h2");
  var node = document.createTextNode("You have " + document.querySelectorAll("li").length + " items in your shopping cart.");
  para.appendChild(node);
  document.getElementsByTagName("h1")[0].appendChild(para);
  
  var itemslist = document.getElementById("itemslist");
  var submitbutton = document.getElementById("submit");
  submitbutton.addEventListener("click" , addNewItem);
  
  
  function addNewItem() {
    var newitem = document.getElementById("newlist").value;
    var li = document.createElement("li");
    var textnode = document.createTextNode(newitem); 
    itemslist.appendChild(li);
    li.appendChild(textnode);
    
    
    
    
    
    
  };
  
  
});

