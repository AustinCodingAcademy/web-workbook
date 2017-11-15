
var dieChar = ["", "&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"]

function roll() {
  document.getElementById("dice").innerHTML = "";
  for (a=0; a<5; a++) {
    var roll = Math.floor(Math.random()*6)+1;
    document.getElementById("dice").innerHTML += "<span  class='die' data-roll='"+roll+"'>"+dieChar[roll]+"</span>";
  }
  report();
}

roll();

//////////////////////////////////////////////////////
// Add code here that uses loops and conditional statements
// to determine if any of the following cases are true:
//
function report() {
  document.getElementById("report").innerHTML = "";
  let diceHtml = document.getElementsByClassName('die');

  //Variables//
  var one=0;
  let pair=0;
  let triple=0;
  let four=0;
  let yacht=0;
  var straight1=0;
  var straight2=0;
  var straight3=0;
  var straight4=0;
  var straight5=0;
  var straight6=0;

  //outer for loop//
  for (var dieVal = 1; dieVal < 7; dieVal++) {
    let howManyDice = 0;
    for (var die = 0; die < 5; die++) {
      if (dieVal == diceHtml[die].dataset.roll) {
        howManyDice++;
      }
    }
    //Logic to store variables//
     if (howManyDice===1) {
      if (dieVal===1) {
        straight1++
      } else if (dieVal===2) {
        straight2++
      } else if (dieVal===3) {
        straight3++
      } else if (dieVal===4) {
        straight4++
      } else if (dieVal===5) {
        straight5++
      } else if (dieVal===6) {
        straight6++
      }
    }

    if (howManyDice===2) {
      document.getElementById("report").innerHTML += "There are a pair of "+dieVal+"s<br>";
      pair++;
    }
    if (howManyDice===3) {
      document.getElementById("report").innerHTML += "There are a three of "+dieVal+"s<br>";
    }
    if (howManyDice===4) {
      document.getElementById("report").innerHTML += "There are a four of "+dieVal+"s<br>";
    }
    if (howManyDice===5) {
      document.getElementById("report").innerHTML += "There are a yacht of "+dieVal+"s<br>";
    }
  }

  //Logic to evaluate variables//
  if (pair===2) {
    document.getElementById("report").innerHTML += "two pair";
  } else if (pair && triple) {
    document.getElementById("report").innerHTML += "fullhouse";
  } else if (straight1 && straight2 && straight3 && straight4 && straight5) {
    document.getElementById("report").innerHTML += "small straight";
  } else if (straight2 && straight3 && straight4 && straight5 && straight6) {
    document.getElementById("report").innerHTML += "big straight";
  }
}

//
// report the results in the div with the ID 'report'.
report();

  
