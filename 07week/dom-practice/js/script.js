'use strict';
document.addEventListener("DOMContentLoaded", function(event) {
    // You code here
var listOfItems = document.getElementsByTagName('li');
alert('Number of Items: ' + listOfItems.length );
var title = document.getElementsByTagName('h1');
var subtitle = '<h2>You have '+ listOfItems.length + 'items in your shopping cart</h2>';
var d1 = document.getElementByID('title');
d1.insertAdjacentHTML ('afterend', subtitle);

});
function addItem() {
var newitem=prompt ('Enter new item');
//format my newitem as a list item element
newitem='<li>' + newitem + '</li>';
var list=document.getElementByID('list');
list.insertAdjacentHTML('afterend', newitem);
}
