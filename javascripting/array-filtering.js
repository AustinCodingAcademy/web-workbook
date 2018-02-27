var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filter = numbers.filter (function evenNumbers (numbers){
  return numbers % 2 ===0;
})
console.log(filter);
