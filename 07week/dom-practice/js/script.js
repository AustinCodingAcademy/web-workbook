
function addItem(){
  var ul = document.getElementById("shopping-list");
  var candidate = document.getElementById("candidate");
  var li = document.createElement("li");
  li.setAttribute('id',candidate.value);
  li.appendChild(document.createTextNode(candidate.value));
  ul.appendChild(li);
}  
function removeItem(){
	var ul = document.getElementById("shopping-list");
  var candidate = document.getElementById("candidate");
  var item = document.getElementById(candidate.value);
  ul.removeChild(item);
}

document.addEventListener("DOMContentLoaded", function(event) {

 alert ("There are four list items on this page");

  // You code here

});


