alert(document.querySelectorAll("li").length);
document.getElementsByTagName("title")[0].innerHTML = "Manipulating the DOM!";


var x = document.createElement("li");
var t = document.createTextNode("Fifth List Item");
x.appendChild(t);
document.getElementsByTagName("ul").appendChild(x);
