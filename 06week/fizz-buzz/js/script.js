// var numberString = '';
function FizzBuzz() {
  for (var i = 1; i < 101; i++) {
    if (i % 15 === 0) {
      // console.log('FizzBuzz');
      // numberString += ' FizzBuzz ';
      print('FizzBuzz');
    }
    else if (i % 5 === 0) {
      // console.log('Buzz');
      // numberString += ' Buzz ';
      print('Buzz');
    }
    else if (i % 3 === 0) {
      // console.log('Fizz');
      // numberString += ' Fizz ';
      print('Fizz');
    }
    else {
      // console.log(i);
      // numberString += ' ' + i;
      print(i);
    }
  }
}

var r = document.getElementById('result');

function print(s){
  r.innerHTML += s + '<br>';
}

FizzBuzz();
