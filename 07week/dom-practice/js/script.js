window.onload = function (){
  var list = document.getElementsByTagName('ul');
  var message = 'this page has ' + list[0].children.length + ' list items';
  alert(message);

  var newTitle = document.createElement('title');
    newTitle.innerHTML = 'Manipulating the DOM';
    document.head.appendChild(newTitle);

  var div = document.getElementById('div');
  var p4 = document.getElementById('P4');
    div.removeChild(p4);

  var list5 = document.createElement('li');
    list5.innerHTML = 'Fifth List Item';
    list[0].appendChild(list5);

  document.body.classList.add('colors');

}
