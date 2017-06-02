//function tellFortune
function tellFortune(jobTitle, geoLocation, partnerName, numOfChildren) {
  console.log("You will be a "+ jobTitle+ " in "+"geoLocation"+" , and married to "+partnerName+ " with "+numOfChildren+"
  kids.");

}
//function calculateDogAge
  function calculateDogAge(puppyAge) {
    var puppyAge = 7 * puppyAge;
    console.log ("Your doggie is "+puppyAge+ " years old in dog years!");
  }
//function calculateSuppy
function calculateSupply(age, amountPerDay){
  var maxAge = 80; //all solutions based on this figure
  var result = (maxAge-age) * (amountPerDay*365);
  console.log("You will need "+result+" to last you until the ripe old age of "+age);
}

//function calculateCircumference
function calculateCircumference(radius) {
    var circumf= 3.141592*(radius*2)
    console.log("The circumference is "+circumf+ ".");
}
//function calArea
function calArea(radius){
  var area = 3.141592*(radius*radius);
  console.log("The area is "+area);
}

//function celsiusToFahrenheit
function celsiusToFahrenheit(celsius){
  var celsiusConversion = (celsius*9)/5 +32;
  console.log(celsius+"°C is "+celsiusConversion+"°F");
}
//celsiusToFahrenheit
 celsiusToFahrenheit(30);
 celsiusToFahrenheit(7);

//function FahrenheitTocelsius
function FahrenheitTocelsius(Fahrenheit){
  var FahrenheitConversion = ((Fahrenheit-32)*5)/5;
  console.log(Fahrenheit+"°F is "+FahrenheitConversion+ "°C.");
}
//FahrenheitTocelsius(Fahrenheit)
FahrenheitTocelsius(70);
FahrenheitTocelsius(65);

//calArea
calArea(2);
calArea(5);

//calculateCircumference
calculateCircumference(2);
calculateCircumference(5);

//calculateSupply
calculateSupply(30, 1);
calculateSupply(40,2);
calculateSupply(25, 10);

//calculateDogAge
calculateDogAge(2);
calculateDogAge(1);

//tellFortune
tellFortune("Coder", "New York", "Mary", 4);
tellFortune("singer", "Italy", "Popeye", 1);
