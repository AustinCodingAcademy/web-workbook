'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
    // You code here
    var listOfItems = document.getElementsByTagName('li');

    alert('Number of items: ' + listOfItems.length);



var subtitle = '<h2>You Have ' + listOfItems.length + ' items in your shopping cart</h2>';
var d1 = document.getElementById('title');

d1.insertAdjacentHTML('afterend' , subtitle);

});
