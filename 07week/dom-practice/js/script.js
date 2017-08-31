'use strict';

window.onload = function() {




  // Setting Title
  var title = document.createElement('H1');
  title.textContent = 'Manipulating the Dom';
  document.body.appendChild(title);
  document.body.insertBefore(title, document.body.firstChild);


  // Adding Fifth List Item
  var par = document.createElement("LI");
  var node = document.createTextNode("Fifth list item");
  par.appendChild(node);

  // Placing newly created list item
  var element1 = document.getElementById("ul");
  element1.appendChild(par);


  //Remove Paragraph 4
  var parent = document.getElementById("div");
  var child = document.getElementById("p4");

  parent.removeChild(child);

  var total = document.getElementsByTagName('LI').length;
  console.log(total);
  alert(total);
}
