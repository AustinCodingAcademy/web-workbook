'use strict';

for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    if (i % 5 === 0) {
      document.write('fizzbuzz');
    } else {
      document.write('fizz');
    }
  } else if (i % 5 === 0) {
    document.write('buzz');
  } else {
    document.write(i);
  }
  // breaks so you can read
  document.write('<br><br>');
}
