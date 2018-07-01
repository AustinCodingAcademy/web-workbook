'use strict';

var form = querySelector('form');

// document.querySelector('#reset').addEventListener('click', function(e) {
//   e.preventDefault();

  // form.reset();
  // alert('reset the form?');

// }, false);

$('#reset').click(function(){
  form.reset();
  alert("reset the form?");
})
