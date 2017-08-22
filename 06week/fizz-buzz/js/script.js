'use strict';
$(document).ready(function() {

  function fizzBuzz() {

    for (var i = 1; i < 100; i++) {

      // % = mod --> 5%2=1  5/2=2

      if (i % 3 === 0 && i % 5 === 0) {
        document.write("FizzBuzz");

      } else if (i % 3 === 0) {
        document.write("Fizz");
            // $('body').append('Fizz')

      } else if (i % 5 === 0) {
        document.write("Buzz");
            // $('body').append('Buzz')

      } else {
        document.write(i);

      }
      document.write('<br><br>');
    }
  }
  fizzBuzz();

    // variablename = (condition) ? value1:value2

    // var x = (i % 3 == 0), y = (i % 5 == 0);
    //   document.write((x ? y ? "FizzBuzz") : (x ? "Fizz") : (y ? "Buzz") : (i))

})
