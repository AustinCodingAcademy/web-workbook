'use strict';
/*Create a JS file and write code the will do the following:
Alert the user to how many list items there are on the page.
Add a <h2> to the page under the title that says 'You have _ items in your shopping cart'. Do not use html to do this. Use JavaScript.
Create the ability to add more items to the list using JavaScript.
Create the ability to remove an item from the shopping cart using javascript.
Extension Challenge: Create the ability to display a picture of the product when the mouse hovers over the name of the project.*/

window.alert( "Size: " + $( "li" ).length );

var t = document.createTextNode("You have" + $( "li" ).length "in your cart");
   para.appendChild(t);
   document.getElementById("myDIV").appendChild(para);

function adder(obj){
    var item = $(obj).prev().andSelf().add();
}

function remover(obj){
    var item = $(obj).prev().andSelf().remove();
}
