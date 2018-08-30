var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = "rock";
} else if (computerChoice <= 0.67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}
//console.log("Computer chooses: " + computerChoice);

var play = function(userChoice, computerChoice) {

  if (userChoice === computerChoice) {
return "tie!";
  }else if (userChoice === "rock" && computerChoice === "paper"){
    return "haha, computer wins"
  }else if (userChoice === "paper" && computerChoice === "paper"){
    return "tie!"
  }else if (userChoice === "scissors" && computerChoice === "paper"){
    return "well done, you WIN"
  }else if (userChoice === "rock" && computerChoice === "rock"){
    return "tie!"
   }else if (userChoice === "paper" && computerChoice === "rock"){
    return "well done, you win"
   }else if (userChoice === "scissors" && computerChoice === "rock"){
    return "you lose"
  }else if (userChoice === "rock" && computerChoice === "scissors"){
    return "way to go, you win"
   }else if (userChoice === "paper" && computerChoice === "scissors"){
    return "you lose"
     }else if (userChoice === "scissors" && computerChoice === "scissors"){
    return "tie"
  }
} //closes compare function

document.write("Computer chose: " + computerChoice + "<br>");
document.write(play(userChoice, computerChoice));
