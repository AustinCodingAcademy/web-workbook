function tellfortune (numChildren, partner, location, jobTitle) {
  console.log('You will be a '+ jobTitle +' in '+ location + ', and married to ' + partner + ' with ' + numChildren + ' kids');
}

function calculateDogAge (age) {
    console.log('Your doggie is '+ age*7 +' years old in dog years');
}

function calculateSupply (maxAge,dayAmount) {
  var lifeIncome = maxAge*365*dayAmount;
  console.log('You will need ' + lifeIncome + ' to last you until the ripe old age of '+maxAge);
}

function calcCircumfrence (radius) {
  var Circumfrence = 2*radius*Math.PI;
  console.log('The circumference is ' + Circumfrence);
}

function calcArea (radius) {
  var Area = radius*radius*Math.PI;
  console.log('The area is ' + Area);
}

function celciusToFahrenheit (tempInC) {
  var tempInF = tempInC*(9/5) + 32;
  console.log(tempInC + 'C is ' + tempInF + 'F')
}

function fahrenheitToCelcius (tempInF) {
  var tempInC = (tempInF - 32)*(5/9);
  console.log(tempInF + 'F is ' + tempInC + 'C')
}
tellfortune (2, 'Katy', 'Austin', 'Coder');
tellfortune (3, 'Janice', 'Delaware', 'Janitor');
tellfortune (6, 'Ty', 'Canada', 'Realter');

calculateDogAge(6);
calculateDogAge(.5);
calculateDogAge(2);

calculateSupply (85, 100);
calculateSupply(42, 315.14);
calculateSupply(91, 500);

calcCircumfrence (2);
calcCircumfrence (5);
calcCircumfrence (78);

calcArea(5);
calcArea(10);
calcArea(18.1);

celciusToFahrenheit(24);
celciusToFahrenheit(37);
celciusToFahrenheit(100);

fahrenheitToCelcius(76);
fahrenheitToCelcius(32);
fahrenheitToCelcius(104);
