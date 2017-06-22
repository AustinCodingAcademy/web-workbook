'use strict';

for (var i = 1; i <= 100; i++) {
  //nesting
  // mutiple of 3 and 5 nested below
  if (i%3 == 0) {
    if (i%5 == 0) {
    document.write ('fizzbuzz');
    }
    //mutiple of 3 write "fizz"
    else {document.write ('fizz');
    }
  }
    //mutiple of 5 write "buzz"
  else if(i % 5 == 0) {
  document.write ('buzz');
  }
  //if above condition doesnt match ANY conditions above  keep going with numbers
  else {
    document.write (i);
  }

  document.write ('<br><br>')
 }
