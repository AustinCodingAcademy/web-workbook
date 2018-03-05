'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
    // You code here
    alert("There are "+document.getElementsByTagName("li").length+" items in your cart.");
    var cartItems=document.getElementsByTagName("li").length;
    var node=document.createElement("h2");
    var textnode=document.createTextNode("You have "+cartItems+" items in your cart.")
    node.appendChild(textnode);
    document.getElementById('cartTitle').appendChild(node);

    
});
