// print 1-100.
//check for multiples of 3 and 5.
function fizzbuzz() {
  for (var i = 1; i <=100; i++) {
    if (i % 3 ===0 && i % 5===0) {
      script('<span class="fizzbuzz">FizzBuzz</span>');
      //console.log('FizzBuzz');
    }
    else if (i % 3===0) {
      script('<span class="fizz">Fizz</span>');
      //console.log('Fizz');
    }
    else if (i % 5===0) {
      script ('<span class="buzz">Buzz</span>');
      //console.log('Buzz');
    }
    else {
    script(i);
    //  console.log(i);
    }
  }
}
function script(x) {
  document.getElementById('java').innerHTML += x + '<br>'
}
fizzbuzz();
