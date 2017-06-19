
// Remove 'Paragraph 4'.

var array_of_li =  document.querySelectorAll("ul li").length;

alert(array_of_li);


document.title = 'Manipulating the DOM!';

function addli() {
var node = document.createElement("li");
var textnode = document.createTextNode("Fifth List Item");
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);
}

addli ();


document.getElementById("P4").remove();
