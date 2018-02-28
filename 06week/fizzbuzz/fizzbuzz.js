for (var i = 1; i <= 1000; i++) {
  if ((i % 3 == 0) && (i % 5 == 0)) {
    console.log('FizzBuzz');
  } else if (i % 3 == 0) {
    console.log('Fizz');
  } else if (i % 5 == 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}


// Found this solution online - https://codeburst.io/javascript-breaking-down-the-shortest-possible-fizzbuzz-answer-94a0ad9d128a

// Studied it and then re-wrote my solution without referencing the article.
// And it works.
// for(let i=0;i<1000;){
//   console.log((++i %3?"":"fizz")+(i%5?"":"buzz")||i);
// or
//  console.log(!(++i%15)?’Fizzbuzz’:!(i%3)?’Fizz’:!(i%5)?’Buzz’:i));
// }
// Thoughts:
// --Can increment looping variable within the loop. This seems like setting myself up for an infinite loop.  Definitely not best practice.
// --Can do all kinds of crazy evaluation within the console.log statement
// --Plus to handle the 3 or 5 cases
// --Or to handle the final default
// --Love that ternary operator  (test ? yes : no)
// --Can reverse the ternary yes/no cases by using !(not) and then stack conditionals within the false case ... question is 'is there no remainder when dividing by 15?   How about by 3?  by 5?'
