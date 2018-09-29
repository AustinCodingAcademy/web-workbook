// define the loop and print 0 to 1000
for (i = 0; i < 1001; i++) {
  // print 'FizzBuzz' if the nubmer is divisible by three and five
  if (i % 5 === 0 && i % 3 === 0) {
    console.log('FizzBuzz');
  }
  // print 'Fizz' if the number is divisible by only three
  else if (i % 3 === 0) {
    console.log('Fizz');
  }
  // print 'Buzz' if the number is divisible by only five
  else if (i % 5 === 0) {
    console.log('Buzz');
  }
  // the number itself if it is none of these
  else {
    console.log([i]);
  }

