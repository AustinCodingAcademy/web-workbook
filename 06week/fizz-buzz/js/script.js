'use strict';

$(function() {

  function fizzbuzz() {

for (var i=1; i <=20; i++)
if (i%15 === 0) {
        $("body").append("FizzBuzz")
    console.log("FizzBuzz");
}
else if (i%3 === 0) {
        $("body").append("Fizz")
    console.log("Fizz");
}
else if (i%5 === 0) {
        $("body").append("Buzz")
    console.log("Buzz");
}
else {
        $("body").append(i)
    console.log(i);
}

}

fizzbuzz();

})
