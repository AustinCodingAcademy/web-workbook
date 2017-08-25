window.onload = function (){
  var list = document.getElementsByTagName('ol');
  var message = 'this page has' + list[0].child.length + 'list items';

  var newelement = document.createElement('h1');
  newElement.innerHTML = 'Javascript';
  document.body.appendChild(newElement);


}

var $p = document.getElementById('P3');
$p.remove();

var $p = document.getElementById('P4');

  $p.remove();
