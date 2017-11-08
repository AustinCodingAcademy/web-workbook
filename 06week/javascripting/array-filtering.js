var numbers = [1,2,3,4,5,6,7,8,9,10];
/*
for (var i = 0; i < numbers.length; i++) {
if (evenNumbers (numbers [i]);
console.log (evenNumbers (numbers[i]));
}
*/
var filtered=numbers.filter(function evenNumbers (number){
return number % 2 === 0;
});
console.log(filtered);
