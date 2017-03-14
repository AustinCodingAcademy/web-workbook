var baller= prompt ("10 seconds left on the shot clock! Do you shoot, pass or call a timeout?").toLowerCase();

switch (baller){
    case "shoot":

    var pullUp = prompt("Is your jumper pure like fiji water?").toLowerCase();

    var release = prompt("Do you have a quick release ?").toLowerCase();

    if (pullUp ==="yes" && release ==="yes"){
      console.log("Ooooh that jumper was wet BIG FELLA!")
    }
    else{
      console.log("They blocked that shot into the bleachers!");
    }
    break;


  case "pass":
    var vision= prompt("Do you have the court vision of CP3?").toLowerCase();

    var dimes= prompt ("Are you dropping dimes like John Wall?").toLowerCase();

    if (vision==="yes" || dimes==="yes"){
      console.log("You threw a perfect alley-oop to your SG!");
    }
    else{
      console.log("They just picked your pocket");
    }
    break;


  case "timeout":
    var drawingBoard= prompt("Do you have a play in mind (Yes or no)?").toLowerCase();

    var sub= prompt("Do you want tp stay in the game?").toLowerCase();

    if(drawingBoard=== "yes" && sub==="yes"){
      console.log("Poetry in motion, nice play!");

       }
    else{
      console.log("They stopped your play easily, maybe next time.");
    }
    break;

  default:
    console.log ("Sorry, can you please pick Shoot, Pass or Timeout?");
              }
