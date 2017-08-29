'use strict';

window.onload = function() {

  alert("There was originally 4 list items on this page.");


  console.log(document.title = "Andrew's DOM");


  console.log(document.querySelectorALL('li').length);

  document.querySelector('ul').insertAdjacentHTML('beforeend', '<li>Fifth List Item</li>');

  document.querySelector('#P4').remove();

}
