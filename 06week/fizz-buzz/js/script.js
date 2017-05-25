var i = 0;
var total = 100;
for (var i = 0; i <= total; i++) {
if (i / 3) {
  console.log('Fizz');
}
if (i / 5) {
  console.log('Buzz');
}
if (i / 3 && i / 5) {
  console.log('FizzBuzz');
}
}
