var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filtered = numbers.filter(function evenNumbers (number) {
  return number % 2 === 0; /*each number of the array is passed into the function (number) can be anything
                             number % 2 ===0 is taking each number and dividing by 2.  if the remainder is zero, the number is returned */
});
console.log(filtered);
