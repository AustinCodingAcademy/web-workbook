var fizz = "Fizz";
var buzz = "Buzz";
var FizzBuzz = "FizzBuzz";

for(var value = 1; value <= 100; value++) {
    numList.push(value);
}

for (var i = 0; i <= 99; i++) {
  if ((numList[i] % 3) === 0) {
    if ((numList[i] % 5) === 0) {
      console.log(FizzBuzz);
    } else {
      console.log(fizz);
    }
  } else if ((numList[i] % 5) === 0) {
    console.log(buzz);
  } else {
    console.log(i);
  }
}

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
