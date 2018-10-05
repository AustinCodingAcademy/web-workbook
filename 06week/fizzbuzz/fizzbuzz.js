//solution 1: while statement with if/else
var num = 1;

while (num<=1000){
  if (num%3===0 && num%5===0) {
    console.log("FizzBuzz");
  } else if (num%3===0) {
    console.log("Fizz");
  } else if (num%5===0) {
    console.log("Buzz");
  } else {
    console.log(num);
  };
  ++num;
};


//solution 2: for statement with if/else
for (i=1; i<=1000; i++){
  if (i%3===0 && i%5===0) {
    console.log("FizzBuzz");
  } else if (i%3===0) {
    console.log("Fizz");
  } else if (i%5===0) {
    console.log("Buzz");
  } else {
    console.log(i);
  };
};


//solution 3: for statement with independent if statements
var print = ""

for (i=1; i<=1000; i++){
  if (i%3===0) {
    print += "Fizz";
  }
  if (i%5===0) {
    print += "Buzz";
  }
  if (i%3!==0 && i%5!==0){
    print += i;
  };
};

console.log(print);
