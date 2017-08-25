'use strict';

// add a windows.onload function

// $(document).ready(function){}

// document.addEventListener("DOMcontentloaded", function(){ })

window.onload = function() {

  // change the title
  console.log(document.title = "Deyton's DOM");

  // Alert the user to how many list items there are on the page.

  console.log(document.querySelectorAll ('li').length);

  // Add 'Fifth List Item' to the list.

  document.querySelector ('ul').insertAdjacentHTML ('beforeend', '<li>Fifth List Item</li>');

  // Remove 'Paragraph 4'.

  document.querySelector ('#P4').remove();

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

}
