

for (var number = 1; number <= 100; number ++){//runs numbers from 1 to 100 inclusive

  //number is multiple of both 3 and 5
    if (number%3===0 && number%5===0) {
  // if number is multiple of both 3 and 5, print "fizz buzz"
      console.log(number+" = fizz buzz");
      document.getElementById('demo').innerHTML += number+" = fizz buzz<br>";
  }
    //number is a multiple of 3
    else if(number%3 === 0) {
  // if the number is a multiple of 3, print "fizz"
      console.log(number+" = fizz");
        document.getElementById('demo').innerHTML += number+" = fizz<br>";
  }
  //number is multiple of 5
    else if (number%5 === 0) {
  // if number is multiple of 5, print "buzz"
      console.log(number+" = buzz");
        document.getElementById('demo').innerHTML += number+" = buzz<br>";
  }
}
