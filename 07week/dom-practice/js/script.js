window.onload=function(){
  var list = document.getElementsByTagName('ul');
  var message = 'This page has '+ list[0].children.length + ' list items';
  alert(message);
  var title = document.createElement('title');
  title.innerHTML= 'Manipulating the DOM!';
  document.body.appendChild(title);
  var leeloo = document.createElement('li');
  leeloo.innerHTML = 'Fifth List Item';
  list[0].appendChild(leeloo);
  var div = document.getElementById('div');
  var p4 = document.getElementById('P4');
  div.removeChild(p4);
}
