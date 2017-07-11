var printout = ['Fizz', 'Buzz', 'FizzBuzz'];

for (i=0; i<101; i++) {
  if ( i % 3  ===0  && i % 5 ===0 ) {
    console.log(printout[2]);
    }
  else if ( i % 3 ===0 ) {
      console.log(printout[0]);
      }
  else if ( i % 5 ===0 ) {
      console.log(printout[1]);
      }
  else { console.log(i);}
}
