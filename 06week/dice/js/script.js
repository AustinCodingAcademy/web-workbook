let dieChar = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"];

function roll() {
  document.querySelector("#dice").innerHTML = "&nbsp";
  for (let i = 0; i < 5; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    document.querySelector("#dice").innerHTML += `<span class="die" data-roll="${roll}">${dieChar[roll - 1]}</span>`;
  }
  report();
}

roll();

//////////////////////////////////////////////////////
// Add code here that uses loops and conditional statements
// to determine if any of the following cases are true:
//
function report() {
  document.querySelector("#report").innerHTML = ""; // clear out the report box
  let diceHtml = document.querySelectorAll('.die'); // this puts all the individual die HTML elements in diceHtml
  let dieNumberCounter = {'1': 0, '2': 0, '3': 0, '4':0, '5':0, '6':0}; //using key value pair object for counting


  for (let dice = 0;dice<diceHtml.length;dice++){
    dieNumberCounter[diceHtml[dice].getAttribute('data-roll')]+=1; //sum all apperences of a number
  }


  let pairCounter = 0;
  let pairHolder = [];
  let threeCounter = 0;
  let threeHolder = 0;
  let fourHolder = NaN;
  let yacht = NaN; //flags for different matching die states
  
  for(let key in dieNumberCounter){ 
    if(dieNumberCounter[key]==2){ //set flags for pairs
      pairCounter++;
      pairHolder.push(key);
    }
    else if (dieNumberCounter[key]==3){ //set flags for triple
      threeCounter++;
      threeHolder=key;
    }
    else if (dieNumberCounter[key]==4){ //set flags for quads
      fourHolder=key;
    }
    else if (dieNumberCounter[key]==5){ //set flag for yacht
      yacht=key;
    }
  }
  if(pairCounter==2){ //print 2 pair
    document.querySelector("#report").innerHTML += `There are a two-par of two ${pairHolder[0]}s and two ${pairHolder[1]}s<br>`;
  }
  else if (pairCounter == 1 && threeCounter==1){ //print full house
    document.querySelector("#report").innerHTML += `There is a full-house with two ${pairHolder[0]}s and three ${threeHolder}s<br>`;

  } 
  //print low straight 
  else if(dieNumberCounter['1']==1 && dieNumberCounter['2']==1 && dieNumberCounter['3']==1 && dieNumberCounter['4']==1 && dieNumberCounter['5']==1){
    document.querySelector("#report").innerHTML += `There is a small-straight from 1 through 5<br>`;

  }
  //print high straight
  else if(dieNumberCounter['2']==1 && dieNumberCounter['3']==1 && dieNumberCounter['4']==1 && dieNumberCounter['5']==1 && dieNumberCounter['6']==1){
    document.querySelector("#report").innerHTML += `There is a large-straight from 2 through 6<br>`;

  }

  else if(pairCounter==1){ //print a lonely pair
    document.querySelector("#report").innerHTML += `There are a pair of ${pairHolder[0]}s<br>`;
  }
  else if(threeCounter==1){ //print 3s company
    document.querySelector("#report").innerHTML += `There are three ${threeHolder}s<br>`;
  }
  else if (fourHolder){ //print showing off with four
    document.querySelector("#report").innerHTML += `You got four of ${fourHolder}s<br>`;
  }
  else if (yacht){ //print way to manny things
    document.querySelector("#report").innerHTML += `You got a yacht of ${yacht}s<br>`;

  }
  else{ //print my life
    document.querySelector("#report").innerHTML += `You got nothing, scrub<br>`;

  }
}  
   

report();