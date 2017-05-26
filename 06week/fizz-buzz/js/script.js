var print = ['Fizz', 'Buzz', 'FizzBuzz'];

for (i=0; i<101; i++) {
  if ( i % 3 ===0 ) {
    console.log(print[0]);
    // return print[1];
  }
  if ( i % 5 ===0 ) {
    console.log(print[1]);
  }
  if ( i % 15 ===0 ) {
    console.log(print[2]);
  }
  else { console.log(i);}
}
