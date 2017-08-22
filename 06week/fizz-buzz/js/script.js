'use strict';

/*

"Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

*/

// for(var i = 0; i <= 100; i++){
//   if(i % 3 === 0 && i % 5 === 0){
//     console.log("FizzBuzz");
//   }else if(i % 5 === 0){
//     console.log("Buzz");
//   }else if(i % 3 === 0){
//     console.log("Fizz");
//   }else {
//     console.log(i);
//   }
// }

$(function(){

  function fizzBuzz(){
    for(var i = 0; i <= 100; i++){
      if(i < 10){
        (i % 3 === 0 && i % 5 === 0) ? $('ul').append('<li class="fizzbuzz"><span class="num">0' + i + '</span> FizzBuzz</li>') :
        (i % 3 === 0) ? $('ul').append('<li class="buzz"><span class="num">0' + i + '</span> Buzz</li>') :
        (i % 5 === 0) ? $('ul').append('<li class="fizz"><span class="num">0' + i + '</span> Fizz</li>') : $('ul').append('<li><span class="num">0' + i + '</span></li>');
      } else {
        (i % 3 === 0 && i % 5 === 0) ? $('ul').append('<li class="fizzbuzz"><span class="num">' + i + '</span> FizzBuzz</li>') :
        (i % 3 === 0) ? $('ul').append('<li class="buzz"><span class="num">' + i + '</span> Buzz</li>') :
        (i % 5 === 0) ? $('ul').append('<li class="fizz"><span class="num">' + i + '</span> Fizz</li>') : $('ul').append('<li><span class="num">' + i + '</span></li>');
      }
    }
  }

  fizzBuzz();

})
