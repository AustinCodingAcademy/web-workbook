var e = document.getElementById("FizzBuzz");

for (var i = 0; i < 100; i++) {

  if (i % 15 === 0){
    console.log('FizzBuzz');
    e.style.color = 'red';
  }
  else if (i % 3 === 0){
    console.log('Fizz');
    e.style.color = 'blue';
  }
  else if (i % 5 === 0){
    console.log('Buzz');
    e.style.color = 'green';
  }
  else {
    console.log(i);
  }
}
