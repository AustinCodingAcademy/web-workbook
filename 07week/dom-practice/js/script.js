window.onload = function(){
  var list = document.getElementsByTagName('ul');
    var message = 'This page has ' + list[0].children.length +'list items';
    alert(message);

    var new1 = document.createElement('h1');
    new1.innerHTML = 'Manipulating the DOM!';
    document.body.appendChild(new1);

    var div = document.getElementById('div');

    var p3 = document.getElementById('P3');
    div.removeChild(p3);

    var list5 = document.createElement('li');
    list5.innerHTML = 'Fifth list item';
      list[0].appendChild(list5);

      document.body.classList.add('colors');
}
