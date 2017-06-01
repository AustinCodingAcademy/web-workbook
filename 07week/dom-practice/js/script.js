window.onload = function () {
  var list =
  document.getElementsByTagName('ul');
  var message = 'This page has ' + list[0].children.length + ' list items.';
  alert(message);
//Manipulating ze DOM//
var newh1 = document.createElement('h1');
  newh1.innerHTML = 'Manipulating the DOM';
  document.body.appendChild(newh1);
//fifth list item//
var list5 = document.createElement('li');
  list5.innerHTML = 'Fifth list item';
  list[0].appendChild(list5);
//removed paragraph 4//
var div = document.getElementById('div');
var p4 = document.getElementById('P4');
div.removeChild(p4);
}
