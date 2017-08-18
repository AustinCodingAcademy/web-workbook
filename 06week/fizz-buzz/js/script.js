'use strict';
$(document).ready(function() {
  function fizzBuzz() {
    for (var i = 0; i <=100; i++) {
      if(i % 3 === 0){
        $('main').append("Fizz");
      } else if (i % 5 === 0){
        $('main').append("Buzz");
      } else if (i % 5 === 0 && i % 3 === 0){
        $('main').append("FizzBuzz")
      } else {
        $('main').append(i);
      }
      $('main').append('<br><br>');
    }
  }
// $('body').append("hello")
  fizzBuzz();
});
