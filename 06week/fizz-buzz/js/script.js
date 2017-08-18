'use strict';
$(document).ready(function(){

function fizzBuzz() {
  for (var i = 1; i <= 100; i++)
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
      $('body').append('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
      $('body').append('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
      $('body').append('buzz');
    } else {
      console.log(i);

}

})


//var x = (i % 3 == 0), y = (i % 5 == 0);
//document.write(x ? y ? "fizzbuzz" : "fizz" : y ? "buzz" : i)
