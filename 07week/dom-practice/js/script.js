'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
    // You code here
});

'use strict';

window.onload = function(){
  var list = document.getElementsByTagName('li');

var count = 'You have ' + list[0].children.length + ' items in your shopping cart.'
// alert(count);
console.log(count);


var NewElement = document.createElement('h2');
NewElement.innerHTML = 'You have ... items in your shopping cart';
NewElement.appendAfter(document.getElementsByTagNames('h1'));





 }
