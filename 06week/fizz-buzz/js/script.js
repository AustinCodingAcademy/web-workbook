var n =[];
for (var i = 1; i <=100; i++) {
  n.push(i);
}
for (i=0; i<100; i++) {
  if (n[i] %5 ===0 && n[i]%3 ===0) {
    n[i]='FizzBuzz';
  } else if (n[i] %5 ===0) {
    n[i]='Buzz';
  } else if (n[i] %3 ===0) {
    n[i]='Fizz';
  }
}
console.log(n);
