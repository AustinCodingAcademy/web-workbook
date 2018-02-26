for (var i = 1; i < 1001; i++) {
  // console.log(i);
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzBuzz');
  } else if(i % 5 === 0) {
    console.log('Buzz');
  }else if(i % 3 === 0) {
    console.log('Fizz');
  }
  else {
    console.log(i);
  }
}
