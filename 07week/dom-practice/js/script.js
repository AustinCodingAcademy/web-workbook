'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
// You code here
//  ALERT WINDOW
window.onload = function() {
  var list = document.getElementsByTagName('ul');
  var count = 'This page has ' +list[0].children.length + ' list items';
  alert(count);
}

// SHOPPING LIST LENGTH
var h2 = document.createElement("h2");
var list = document.getElementsByTagName('ul');
h2.innerHTML = 'You have ' +list[0].children.length + ' items in your shopping cart';
document.body.insertBefore(h2, document.body.secondChild);


// ADD TO LIST


});
