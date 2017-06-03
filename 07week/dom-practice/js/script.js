

window.onload=function () {

var list = document.getElementsByTagName ('ul');
var message ='This page has' + list[0].children.length +'list items'
alert('message');

var h1 = document.createElement('h1');
h1.innerHTML= 'Manipulating The DOM!!';
document.body.appendChild(h1);

var div = document.getElementById('div');
var P4 = document.getElementById('P4');
div.removeChild(P4);

var li = document.createElement('li'); // Create a <li> element
li.innerHTML='Fith List Item';  // Create a text node
document.body.appendChild(li);  // Append the text to <li>

}
