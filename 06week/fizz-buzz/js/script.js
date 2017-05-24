'use strict';

for (var i = 1; i <= 100; i++) {
  // is this a factor of 3? subsequently, it is also a factor of 5?
  if (i % 3 === 0) {
    if (i % 5 === 0) {
      document.write('fizzbuzz');

      // if not both, then just apply to factor of 3
    } else {
      document.write('fizz');
    }

    // catch the remaining 5s
  } else if (i % 5 === 0) {
    document.write('buzz');

    // every other number
  } else {
    document.write(i);
  }
  // breaks so you can read
  document.write('<br><br>');
}
