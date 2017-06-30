window.onload = function(){

var list = document.getElementsByTagName("ul");
  var message = "This page has " + list[0].children.length + " list items";
   alert(message);


var element = document.createElement('h1');
element.innerHTML = 'Manipulating the DOM!';
document.body.appendChild(element);

var list5 = document.createElement('li');
list5.innerHTML = 'Fifth List Item';
list[0].appendChild(list5);

var div = document.getElementById('div')
var p4 = document.getElementById('P4');
div.removeChild(p4);


}
