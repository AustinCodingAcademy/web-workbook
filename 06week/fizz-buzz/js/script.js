var fizz = "Fizz";
var buzz = "Buzz";
var FizzBuzz = "FizzBuzz";

for (var j = 1; j <= 100; j++) {
  if (!(j % 15)) {
    console.log(FizzBuzz);
  } else if (!(j % 5)){
    console.log(buzz);
  } else if (!(j % 3)) {
    console.log(fizz);
  } else {
    console.log(j);
  }
}
