window.onload = function(){
alert(document.getElementsByTagName("ul")[0].getElementsByTagName("li").length);


document.title = "Manipulating the DOM!";

document.getElementById("P4").remove();



function addListItem() {
  return 'Fifth List Item'
}

var ul = document.getElementById('myList');
var li = document.createElement('li');
li.appendChild(document.createTextNode('Fifth List Item'));
ul.appendChild(li);
}
