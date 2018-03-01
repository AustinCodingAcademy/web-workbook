'use strict';

let items = document.querySelectorAll("p");
alert(items.length)

document.querySelector('h1').insertAdjacentHTML('afterend',
'<h2>You have ${items.length} items in your shopping cart.</h2>'
)
