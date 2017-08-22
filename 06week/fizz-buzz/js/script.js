for ( x=1; x <= 100; x++) {

    if ( x%3 == 0  && x%5 == 0  ) {
        document.write(" fizz buzz"+'<br>');
    } else if ( x % 3 == 0 ) {
        document.write(" fizz"+'<br>');
    } else if ( x % 5 == 0 ) {
        document.write(" buzz"+'<br>');
    } else {
      document.write(x+'<br>'); //line breaks to enhance output readability
    };
}
