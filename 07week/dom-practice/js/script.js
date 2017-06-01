window.onload = function () {
  var listitems = document.getElementsByClassName('listitem');
  alert("I have " + (listitems.length+1) + " list items.");

  var newh1 = document.createElement('h1');
  newh1.innerHTML = 'Manipulating the DOM!';
  document.body.appendChild(newh1);



  var list = document.getElementsByTagName('ul');
  var p4 = document.getElementById("P4");
  div.removeChild(P4);

  var list5 = document.createElement('li');
  list5.innerHTML = 'Fifth List Item';

  listitems[3].appendChild(list5);


  document.body.classList.add('colors');
  document.body.insertBefore(newh1, list[0]);
}
