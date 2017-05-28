// Fizz-Buzz Project
// Write a program that prints numbers 1-100
// for numbers divisible by 3 print Fizz
// for numbers divisible by 5 print Buzz
// for numbers divisible by BOTH 3 AND 5 print FizzBuzz
var limit = 99;
var i = 0;
while (i <= limit) {
  i++;
  if (i % 3 === 0) {              // is it divisible by 3
    if (i % 5 === 0) {            // is it ALSO divisible by 5
      console.log('FizzBuzz');    // if YES/YES print FizzBuzz
    }
    else {
      console.log('Fizz');        // if YES/NO print Fizz
    }
  }
  else if (i % 5 === 0) {         // is it divisible by 5
    console.log('Buzz');          // if YES print Buzz
  }
  else {
    console.log(i);               // if NOT divisible by EITHER print num
  }
}
