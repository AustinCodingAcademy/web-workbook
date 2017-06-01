window.onload = function(){

  var list = document.getElementsByTagName('ol');
  var message = 'This page has ' + list[0].children.length + ' list items';
  alert(message);


  var h = document.createElement("h1");
  var t = document.createTextNode("Manipulating the DOM!");
  h.appendChild(t);
  document.body.appendChild(h);

  var div = document.getElementById('div');
  var p3 =  document.getElementById('P3');
  div.removeChild(p3);

  var list5 = document.createElement('li');
  list5.innerHTML = 'Fifth List Item';
  list[0].appendChild(list5);

  document.body.classList.add('colors')
}


//Create a JS file and write code the will do the following:

//Alert the user to how many list items there are on the page.

//Add a title to the page that says 'Manipulating the DOM!'. Do not use html to do this. Use JS.

//Add 'Fifth List Item' to the list.

//Remove 'Paragraph 4'
