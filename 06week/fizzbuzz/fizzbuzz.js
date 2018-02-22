var number = 0;
for (var i = 0; i < 1000; i++){
  number++;
  if (number % 3 === 0 && number % 5 === 0) {
    console.log('fizzbuzz');
  } else if (number % 3 === 0) {
    console.log('fizz');
  } else if (number % 5 === 0) {
    console.log('buzz');
  } else {
    console.log(number);
  }
};
