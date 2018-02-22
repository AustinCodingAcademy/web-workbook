for (var i = 1; i < 1001; i++) {
  if (i % 3 ===0 && i % 5 !==0 ) {
    console.log('Fizz');
  }
  else if (i % 3 !==0 && i % 5 ===0) {
    console.log('Buzz')
  }
  else if (i % 3 ===0 && i % 5 ===0 ) {
    console.log('FizzBuzz')
  }
  else {
    console.log(i)
  }
}
