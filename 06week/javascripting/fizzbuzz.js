var i =15;
if(i<1001 && i % 3 === 0) {
  console.log("fizz");
} if(i<1001 && i % 5 === 0) {
  console.log("buzz");
} if(i<1001 && i % 3 === 0 && i % 5 === 0) {
  console.log("fizzbuzz");
}  else {
  console.log(i);
}
// best so far
var i=10;
if(i<1001 && i % 3 === 0 && i % 5 === 0) {
  console.log("fizzbuzz");
  i++;
} else if(i<1001 && i % 3 === 0) {
  console.log("fizz");
  i++;
} else if(i<1001 && i % 5 === 0) {
  console.log("buzz");
  i++;
} else if(i<1001) {
    console.log(i);
  i++;
} i++
// best so far