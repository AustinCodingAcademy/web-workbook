for (i=1; i<101; i++) {
  if ((i % 3 === 0) && (i % 5 !== 0)){
    var x = 'Fizz';
  }else if ((i % 3 !== 0) && (i % 5 === 0)){
    x = 'Buzz';
  }else if ((i % 3 === 0) && (i % 5 === 0)){
  x = 'FizzBuzz';
}else{
  x = i;
  }
  console.log(x);
}
