$('#play-game').click(function() {
  location.reload();
});
var userChoice = prompt("Do you choose rock, paper or scissors?");

if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors" && userChoice !== "bomb") {
  alert('The choice of "' + userChoice + '" is an invalid entry.');
}

//  userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = "rock";
} else if (computerChoice <= 0.67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

alert("Computer chooses --> " + computerChoice);

var compare = function(playerChoice, compChoice) {
  if (playerChoice === compChoice) {
    confirm("The result is a tie!");

  } else if (playerChoice === "rock") {
    if (compChoice === "scissors") {
      confirm("You win");
    } else {
      confirm("Computer wins");
    }

  } else if (playerChoice === "paper") {
    if (compChoice === "rock") {
      confirm("You win!");
    } else {
      confirm("Computer wins");
    }

  } else if (playerChoice === "scissors") {
    if (compChoice === "paper") {
      confirm ("You win!");
    } else {
      confirm ("Computer wins");
    }
  }

  if (playerChoice === 'bomb') {
    alert('You win!');
  }
};
compare(userChoice, computerChoice);
