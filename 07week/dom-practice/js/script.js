

'use strict'

document.addEventListener("DOMContentLoaded", function() {

var list = document.getElementsByTagName('ul');
var message = 'This page has ' + list[0].children.length + ' list items';

alert(message);


document.querySelector('body').insertAdjacentHTML('beforebegin','<h1>Manipulating the DOM!</h1>')


document.querySelector('#P4').remove()

document.querySelector('ul').insertAdjacentHTML('beforeend','<li>Fifth List Item</li>')

})
