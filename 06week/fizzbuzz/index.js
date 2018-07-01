//Fizzbuzz
// Using the coding area below, looping through all numbers 1 through 1000,
// I want you to log:
//
// 'Fizz' if the number is divisible by only three
// 'Buzz' if the number is divisible by only five
// 'FizzBuzz' if the number is divisible by three and five
// the number itself if it is none of these


for (x = 0; x < 1001; x++) {
  if ((x % 3 === 0) && (x % 5 === 0)) {
    console.log('FizzBuzz');
  } else if (x % 3 === 0) {
    console.log('Fizz');
  } else if (x % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(x);
  }
}
