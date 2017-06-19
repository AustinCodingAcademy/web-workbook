window.onload = function () {
  var list = document.getElementsByTagName('ul');
  var message = 'this page has' + list[0].children.length + ' list items';
  alert(message);
  var newh1 =
  document.createElement('h1');
  newh1.innerHTML =
  'MARIOnipulating the dom';
  document.body.appendChild(newh1);
  var div =
  document.getElementById('div');
  var p3 =
  document.getElementById('P4');
  div.removeChild(P4);
  var list5 =
  document.createElement('li');
  list5.innerHTML = 'fifth list item';
  list[0].appendChild(list5);
  document.body.classList.add('colors');
  document.body.insertBefore(newh1, list[0]);

}
