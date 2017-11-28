var dieChar = ["", "&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"]

 var small1 = false;
 var small2 = false;
 var small3 = false;
 var small4 = false;
 var small5 = false;

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
  document.getElementById("report").innerHTML = ""; // clear out the report box
  let diceHtml = document.getElementsByClassName('die'); // this puts all the individual die HTML elements in diceHtml
  for (var dieVal = 1; dieVal < 7; dieVal++) {  // we set up a nested loop, first we check for all the 1s, then 2s, etc
    let howManyDice = 0; // we zero out our counter

    for (var die = 0; die < 5; die++) {  // we create the inner loop that cycles through the rolled dice
      if (dieVal == diceHtml[die].dataset.roll) {  // we check if the rolled die is equal to the one's we're counting
      howManyDice++; // if so, we add one to the count
      }
   }


 //////Pair
   if (howManyDice===2) { // we check after the counting is done if it is equal to '2'
  document.getElementById("report").innerHTML += "Pair of "+dieVal+"s!<br>";  // if yes, we report a pair of dice
   }
    //////Three
    if (howManyDice===3) { // we check after the counting is done if it is equal to '3'
   document.getElementById("report").innerHTML += "Three "+dieVal+"s!<br>";  // if yes, we report three dice
  }
     //////Four
   if (howManyDice===4) { // we check after the counting is done if it is equal to '4'
   document.getElementById("report").innerHTML += "Four "+dieVal+"s!<br>";  // if yes, we report four dice
   }
    //////Yacht
       if (howManyDice===5) { // we check after the counting is done if it is equal to '5'
      document.getElementById("report").innerHTML += "Yacht!<br>";
   } // if yes, we report yacht

    /////Small Straight


    if(dieVal===1){small1 = true}
    else if(dieVal===2){small2 = true}
    else if(dieVal===3){small3 = true}
    else if(dieVal===4){small4 = true}
    else if(dieVal===5){small5 = true}

    if (small1===true && small2===true && small3===true && small4===true && small5===true)
      {document.getElementById("report").innerHTML += "It's a small straight!<br>"; }


  }

// two of dice have the same points, like 3 6 5 6 1 - called pair: example solved for you. Complete the other cases below:

// three of dice have the same points, like 2 4 5 4 4 - called three; //done
// four of dice have the same points, like 1 4 1 1 1 - called four;  //done
// all five dice have the same points, like 2 2 2 2 2 - called yacht; //done
// two pairs at once, like 3 6 5 3 5 - called two-pairs; //already there
// pair and three at once, like 1 6 6 1 6 - called full-house;  //already there
// sequence from 1 to 5, like 2 4 3 5 1 - called small-straight;
// sequence from 2 to 6, like 6 3 4 2 5 - called big-straight.
}


// reports the results in the div with the ID 'report'.
report();
