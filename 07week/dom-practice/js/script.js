
  var objective2 = document.title;
  document.title = "Manipulating the Dom!"
  var objective1 = document.querySelectorAll('li');
  alert(objective1.length);

  var node = document.createElement ("li");
  var textnode = document.createTextNode ("fifth list item");
  node.appendChild(textnode);
  document.getElementById("InventoryItem").appendChild(node);

  var parent = document.getElementById('div');
  var child = document.getElementById('P4');
  parent.removeChild(child);
  
