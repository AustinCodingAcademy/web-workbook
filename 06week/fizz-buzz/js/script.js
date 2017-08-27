'use strict';
$(function() {

  function fizzBuzz() {

    for (var i = 1; i <= 100; i++) {

      if (i % 5 === 0 && i % 3 === 0) {
        // $("main").append("Fizz-Buzz")
        document.write("Fizz-Buzz");

      } else if (i % 3 === 0) {
        $("main").append("Fizz")
        document.write("Fizz");
      } else if (i % 5 === 0) {
        $("main").append("Buzz")
        document.write("Buzz");
      } else {
        // console.log(i);
        // $("main").append(i);
        document.write(i);
      }
      document.write('<br>');


    }
  }


  fizzBuzz();

})
