'use strict';

// add a windows.onload function

// $(document).ready(function){}

// document.addEventListener("DOMcontentloaded", function(){ })
// (does't work ^)

window.onload = function() {

  // change the title
  console.log(document.title = "Deyton's DOM");

  // Alert the user to how many list items there are on the page.

  alert("There was originally 4 list items on this page.");

  console.log(document.querySelectorAll ('li').length);

  // Add 'Fifth List Item' to the list.

  document.querySelector ('ul').insertAdjacentHTML ('beforeend', '<li>Fifth List Item</li>');
  document.querySelector ('ul').insertAdjacentHTML ('beforebegin', '<h1>I added this Title in Javascript! Whoo!</h1>');
  document.querySelector ('p').insertAdjacentHTML ('beforebegin', '<img src="http://welovekitties.com/wp-content/uploads/2015/12/cuteadorablekitty-145124828048cpl.jpg" alt="cute kitty"/>');

  // Remove 'Paragraph 4'.

  document.querySelector ('#p-4').remove();

}

// class notes:

// var list = document.getElementByTagName('ol');
// var message = 'this page has ' + list[0], child, length + 'list items';
//
// var newelement = document.createElement('h1');
//   newelement.innerHTML = 'JavaScript';
//   document.body.appendChild(newelement);
//
//   var $p = document.getElementById('P4');
//
//     $p.remove();
