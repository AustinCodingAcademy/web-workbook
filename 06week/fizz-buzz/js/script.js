'use strict';

$(document).ready(function() {

  function fizzBuzz() {

    for (var i = 0; i <= 100; i++) {

      // multiples of both 3 and 5 convert to fizzbuzz
      if (i % 3 === 0 && i % 5 === 0) {
        document.write("FizzBuzz");
        // $('body').append("FizzBuzz");

        // multiples of 3 convert to fizz
      } else if (i % 3 === 0) {
        document.write("Fizz");

        // multiples of 5 convert to buzz
      } else if (i % 5 === 0) {
        document.write("Buzz");

      } else {
        document.write(i);
      }
      
      document.write('<br>');


    }

    // variablename = (condition) ? value1:value2
    // var x = (i % 3 == 0), y = (i % 5 == 0);
    //   document.write(x ? y ? "FizzBuzz" : "Fizz" : y ? "Buzz" : i)

  }

  fizzBuzz();

})
