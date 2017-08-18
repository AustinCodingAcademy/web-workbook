'use strict'

function fizzBuzz() {

  for (var i = 1; i <= 100; i++) {

    if (i % 3 === 0){
      console.log("Fizz");
    }

else(i % 5 === 0){
  console.log("Buzz");
}


  }




}



for (var i = 1; i <= 100; i++) {
  var f = i % 3 == 0, b = i % 5 == 0;
  console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
}
