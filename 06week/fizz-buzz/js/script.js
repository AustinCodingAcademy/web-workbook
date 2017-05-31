'use strict';
// document.write ('<div style="container; display: flex; justify-content: center; margin: 30px; font-size: 20px;">');


for ( var i = 1; i <= 100; i++) {
  if (i% 3 == 0) {
    if (i% 5 == 0) {
      // nesting applies if not 3s or 5s
      document.write ('FizzBuzz');
    }
    else {
      document.write ('Fizz')
    }
  }
  else if (i% 5 == 0) {
    document.write ('Buzz');
  }
  else {
    document.write (i);
  }
      // this applies to break the i
    document.write ('<br><br>');
}

document.write ('</div>');
