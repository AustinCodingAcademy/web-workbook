'use strict';


window.onload = function() {
  var list = document.getElementsByTagName('ul');
  var count = 'This page has ' + list[0].children.length + ' list items';
  alert(count);

  var newElement = document.createElement('h2');
  newElement.innerHTML = "You have " + list[0].children.length + " items in your shopping cart.";
  document.getElementsByTagName('h1')[0].appendChild(newElement);
}



//THIS CODE WORKS - BUT I DONT UNDERSTAND IT
// function get_todos() {
//     var todos = new Array;
//     var todos_str = localStorage.getItem('todo');
//     if (todos_str !== null) {
//         todos = JSON.parse(todos_str);
//     }
//     return todos;
// }
//
// function add() {
//     var task = document.getElementById('task').value;
//
//     var todos = get_todos();
//     todos.push(task);
//     localStorage.setItem('todo', JSON.stringify(todos));
//
//     show();
//
//     return false;
// }
//
// function remove() {
//     var id = this.getAttribute('id');
//     var todos = get_todos();
//     todos.splice(id, 1);
//     localStorage.setItem('todo', JSON.stringify(todos));
//
//     show();
//
//     return false;
// }
//
// function show() {
//     var todos = get_todos();
//
//     var html = '<ul>';
//     for(var i=0; i<todos.length; i++) {
//         html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
//     };
//     html += '</ul>';
//
//     document.getElementById('todos').innerHTML = html;
//
//     var buttons = document.getElementsByClassName('remove');
//     for (var i=0; i < buttons.length; i++) {
//         buttons[i].addEventListener('click', remove);
//     };
// }
//
// document.getElementById('add').addEventListener('click', add);
// show();
