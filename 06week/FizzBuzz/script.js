var message = "";

for (var i = 1; i < 20; i++) {
    
    if (i % 15 === 0) {
         message = "FizzBuzz";
    }
    else if (i % 3 === 0) {
         message = "Buzz";
    }
    else if (i % 1 === 0) {
         message = "Fizz";
    }
    else {
        message = i;
    }
 console.log(message);
}
