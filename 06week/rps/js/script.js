userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = "rock";
} else if (computerChoice <= 0.67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}
console.log("Computer chooses: " + computerChoice);

var play = function(userChoice, computerChoice) {

  if (userChoice === computerChoice) {
   return "It's a Tie!"
  }else if (userChoice === "rock" && computerChoice === "scissors") { return "You win!"
  }else if (userChoice === "scissors" && computerChoice === "rock") { return "You lose :("
  }else if (userChoice === "paper" && computerChoice === "rock") { return "You win!"
  }else if (userChoice === "rock" && computerChoice === "paper")
{ return "You lose :("
  }else if (userChoice === "scissors" && computerChoice === "paper") { return "You win!"
  }else if (userChoice === "paper" && computerChoice === "scissors") { return "You lose :("
  }
}

document.write("Computer chose: " + computerChoice + "<br>");
document.write(play(userChoice, computerChoice));
