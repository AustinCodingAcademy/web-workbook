// var numberString = '';
function FizzBuzz() {
  for (var i = 1; i < 101; i++) {
    if (i % 15 === 0) {  //3 * 5 = 15.  3 and 5 are primes as well.  Could use (i%3 === 0 && i&5 === 0)
      // console.log('FizzBuzz');
      // numberString += ' FizzBuzz ';
      print('<div class="col-xs-3"><span class="fizzbuzz">FizzBuzz</span></div>');
    }
    else if (i % 5 === 0) {
      // console.log('Buzz');
      // numberString += ' Buzz ';
      print('<div class="col-xs-3"><span class="buzz">Buzz</span></div>');
    }
    else if (i % 3 === 0) {
      // console.log('Fizz');
      // numberString += ' Fizz ';
      print('<div class="col-xs-3"><span class="fizz">Fizz</span></div>');
    }
    else {
      // console.log(i);
      // numberString += ' ' + i;
      print('<div class="col-xs-3">'+i+'</div>');
    }
  }
}

// This section controls the printing to the html
var r = document.getElementById('result');

function print(s) {
    r.innerHTML += s;
}

FizzBuzz();
