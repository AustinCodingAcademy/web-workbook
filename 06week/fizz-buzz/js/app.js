var first = 1, last = 100;

var fizz = {
  name: 'Fizz',
  value: 3
};

var buzz = {
  name: 'Buzz',
  value: 5
};

document.open();

for (var i = first; i<last+1; i++) {

  if (i % fizz.value === 0) {
    if (i % buzz.value  === 0) {
      document.write(fizz.name, buzz.name, "<br>");
    } else {
      document.write(fizz.name, "<br>");
    }
  } else if (i % buzz.value  === 0) {
    document.write(buzz.name, "<br>");
  } else {
    document.write(i, "<br>");
  }
}

document.close();
