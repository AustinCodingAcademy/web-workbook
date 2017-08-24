window.onload = function(){
  // alert("work!");
  document.title = "Manipulating the DOM!";

  alert(document.getElementsByTagName('li').length)

  //creates variable node = make the new list element.
  var node = document.createElement("li");
  // creates var textnode = create text saying THING
  var textnode = document.createTextNode("THING");
  //document.createElement("li").appendChild(document.createTextNode("THING"))
  //create the element and ammend it with the text THING.
  node.appendChild(textnode);
  document.getElementById("youel").appendChild(node);

  // document.getElementById("youel").appendChild(document.createElement('li'));
  // document.getElementById("youel")[4].innerText = "THING";

  document.getElementById('div').removeChild(document.getElementById('P4'));
};
