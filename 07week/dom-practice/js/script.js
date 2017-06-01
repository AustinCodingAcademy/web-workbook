window.onload = function () {
var list =  document.getElementsByTagName ('ul');
var message = 'this page has' + list[0].children.length + 'list items';
alert(message);


var newh1 = document.createElement ('h1')
newh1.innerHTML = "Manipulating the Dom";
document.body.appendChild (newh1);

var list5 = document.createElement ('li');
list5.innerHTML = 'Fifth Item List';
list[0].appendChild(list5);

var div = document.getElementsById ('div');
var p4 = document.getElementsById ('p4');
div.removeChild ('p4');

}
