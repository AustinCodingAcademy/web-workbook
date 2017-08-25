
'use strict';
$(function(){

function fizzBuzz() {

  for (var i =1; i <= 100; i++) {

    if (i%5===0 && i%3===0) {
      $("main").append("Fizz-Buzz")
      console.log("Fizz-Buzz");

    } else if (i % 3 === 0 ) {
      $("main").append("Fizz")
      console.log("Fizz");
    } else if (i % 5 === 0) {
      $("main").append("Buzz")
      console.log("Buzz");
    } else {
      $("main").append(i);
      // document.write(i);

    }
  }
}


fizzBuzz();

})
