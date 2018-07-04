// console.log("hello");
 // Using the coding area below, looping through all numbers 1 through 1000, I want you to log:
 // 'Fizz' if the number is divisible by only three
 // 'Buzz' if the number is divisible by only five
 // 'FizzBuzz' if the number is divisible by three and five
 // the number itself if it is none of these


for(var i=0; i< 1000 ;i++){
    if(i%3===0&& i%5===0){
      console.log("FizzBuzz")
    } else if (i%5===0) {
      console.log("Buzz")

    } else if (i%3===0){
      console.log("Fizz")
    } else {
      console.log(i)
    }

}
