
//Alert user to number of list items on page.//
window.onload = function () {
    var lists = document.getElementsByTagName("ul");
    var message = 'this page has ' + lists[0].children.length + ' list items';
    alert(message);

//Title for Dom Manipulation.//
	var newh1 = document.createElement("h1");
	var h1text = document.createTextNode('Manipulating the DOM!');
	newh1.appendChild(h1text);
	document.body.appendChild(newh1);

//Add Fifth list item.//
	var list5 = document.createElement("li");
	lists[0].appendChild(list5);
	var textnode = document.createTextNode("Fifth List Item");
	list5.appendChild(textnode);

//Removing Paragraph 4.//
	var paragraph = document.getElementById("P4");
	div.removeChild(P4);

}
