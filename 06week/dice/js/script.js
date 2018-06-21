"use strict"

 var userChoice = prompt(" Do you choose rock, paper or sissors?");
console.log(userChoice);
  var computerchoice = Math.random();
  if (computerchoice <= 0.35){
    computerchoice = "rock";

  }
  else if (computerchoice = 0.67){
    computerchoice = "paper"
  }
  else{
    computerchoice= "sissors";
  }
var compare = function (x,y){
  if(x ===y){
    return "Tie"
  }
  else if (x === "rock"){
    if(y ==="sissors")
    return "you wins";
  }
  else{
    return "computer Win";
  }
  else if (x === "paper"){
    if(y ==="rock")
    return "computer wins";
  }
  else{
    return "You Win";
  }
  else if (x === "sissors"){
    if(y ==="rock")
    return "computer wins";
  }
  else{
    return "You Win";
  }
  }
}

document.write("computer chose:"+ computer = ",/br>");
document.write(compare( computerchoice,userChoice))
compare(userchoice,computerchoice)
