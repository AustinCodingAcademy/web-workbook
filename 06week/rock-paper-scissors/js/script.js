var userChoice = prompt("do you choose rock, paper or scissors?");

var computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = "rock";
} else if (computerChoice <= 0.67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

var play = function(userChoice, computerChoice) {

  if (userChoice === computerChoice) {
   return "It's A Tie"
  } else if (userChoice === "rock" && computerChoice === "scissors"){
    return "You Win"
  } else if (userChoice === "scissors" && computerChoice === "paper"){
    return "You Win"
  } else if (userChoice === "paper" && computerChoice === "rock"){
    return "You Win"
  } else{
    return "You Lose"
  }
}

document.write("Computer chose: " + computerChoice + "<br>");
document.write("You chose: " + userChoice + "<br>");
document.write(play(userChoice, computerChoice));
