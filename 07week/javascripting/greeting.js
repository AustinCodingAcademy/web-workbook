//Simple Function
function greeting(name){
  console.log("Hello " + name + "!");
}

greeting("Joe");

//Callback Function
function getUserInput(firstName, lastName, gender) {
    var fullName = firstName + " " + lastName;
    return greetUser(fullName, gender);
}

function greetUser(fullName, gender)  {
   var salutation  = gender && gender === "Man" ? "Mr." : "Ms.";
  console.log("Hello, " + salutation + " " + fullName);
}

getUserInput("Kevin", "Colten", "Man");
getUserInput("Wonder", "Women", "Woman");
