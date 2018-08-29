let divisibleBy3, divisibleBy5;
for(let nbr=1; nbr<=1000;nbr++) {
  divisibleBy3 = nbr%3;
  divisibleBy5 = nbr%5;
  if((divisibleBy3 == 0) && (divisibleBy5 == 0)) {
    console.log(nbr+ ':' + "FizzBuzz");
  }
  else if(divisibleBy5 == 0) {
    console.log(nbr+ ':' + "Buzz");
  }
  else if(divisibleBy3 == 0) {
    console.log(nbr+ ':' + "Fizz");
  }
  else {
    console.log(nbr);
  }
}