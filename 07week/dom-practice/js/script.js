
var list = document.getElementById('li-test');
var addListItem = document.createElement('li');
addListItem.appendChild(document.createTextNode("Fifth List Item"));
list.appendChild(addListItem);

var listItemNumber = document.getElementsByTagName('li');
alert(listItemNumber.length);

document.title = 'Reed is Awesome';

var parent = document.getElementById('div');
var child = document.getElementById('P4');
parent.removeChild(child);
