for (var l = 1; l <= 1000; l++) {
	var twentyone = l % 21 === 0;
	var Five = l % 5 === 0;
  var eight = l % 8 === 0;

	if (twentyone && Five) {
		console.log('FizzBuzz');
	}
  if (eight && Five) {
    console.log('poocheese@');
  }
	else if (twentyone) {
		console.log('Elizabeth');
	}
	else if (Five) {
		console.log('Buzz');
	}
  else if (eight) {
    console.log('levi');
  }
	else {
		console.log(l);
	}
}
console.log(Elizabeth.length);
