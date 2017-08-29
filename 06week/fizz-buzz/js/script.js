'use strict';

$(document).ready(function() {

  function fizzBuzz() {

    for (var i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
        $('ul').append('<li>fizzBuzz</li>')
      } else if (i % 3 === 0) {
        console.log('Fizz');
        $('ul').append('<li>fizz</li>')
      } else if (i % 5 === 0) {
        console.log('Buzz');
        $('ul').append('<li>buzz</li>')
      } else {
        console.log(i);
        $('ul').append('<li>' + i + '</li>')
      }
    }
  }

  fizzBuzz();


  $('ul').append('<li>fizz</li>')


})


// Write FizzBuzz
// "Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
