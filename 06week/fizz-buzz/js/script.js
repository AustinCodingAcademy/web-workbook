'use strict';

function fizzBuzz() {
  for (var i =1; i <= 100; i++){
    if (i % 3 === 0 ){
      console.log("Fizz");
    }
    else (i % 5 === 0){
      console.log("Buzz");

    }
  }
  fizzBuzz();
}
