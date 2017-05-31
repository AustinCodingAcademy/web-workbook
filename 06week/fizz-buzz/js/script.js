// function fizzBuzz (){
//   for (var i=1; i<=100; i++){
//   if (i%3 === 0 && i %5 === 0) {
//   document.write ('fizzBuzz');
//   } else if (i%3 === 0) {
//   document.write ('Fizz');
//   } else if (i%5 === 0) {
//   document.write('Buzz');
//   } else {
//   document.write(i);
//     }
//   document.write('<br>', '<br>');
//   }
// }
//
// fizzBuzz();

function fizzBuzz (){
  for (var i=1; i<=100; i++){
  if (i%3 === 0 && i %5 === 0) {
  console.log ('fizzBuzz');
  } else if (i%3 === 0) {
  console.log ('Fizz');
  } else if (i%5 === 0) {
  console.log('Buzz');
  } else {
  console.log(i);
    }
  console.log('<br>', '<br>');
  }
}

fizzBuzz();
