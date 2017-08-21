var numbers = [1,2,3,4,5,6,7,8,9,10];
function BLAMMO (placeholder) {
  return placeholder % 2 === 0;
}
var filtered = numbers.filter(BLAMMO);
console.log(filtered);
