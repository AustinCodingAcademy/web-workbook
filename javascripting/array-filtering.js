var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenNumbers(x) {
 return x % 2 == 0;
}

var filtered = numbers.filter(evenNumbers);
console.log(filtered);
