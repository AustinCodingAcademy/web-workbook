//for loop to set i and number of times to run loop
for (var i=1; i < 1001; i++){
    //Conditional to check division by 3 and 5 print fizzbuzz
    if (i % 3 === 0 && i % 5 === 0)console.log('fizzbuzz');
    //Conditional to check division by 3 print fizz
    else if (i % 3 === 0)console.log("fizz");
    //Conditional to check division by 5 print buzz
    else if (i % 5 === 0)console.log("buzz");
    //Print number it's on
    else console.log(i);
}
