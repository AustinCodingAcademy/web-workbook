'use strict';

// Document Ready Function & Console Log of Ready state

$(document).ready(function() {
  console.log("ready!");
});


var coins = 0;

function coinClick(number) {
  coins = coins + number;
  document.getElementById("coins").innerHTML = coins;
};

var divers = 0;

function buyDiver() {
  //works out the cost of hiring 1 diver
  var diverCost = Math.floor(10 * Math.pow(1.1, divers));
  //checks that the player can afford the next diver
  if (coins >= diverCost) {
    //increases number of divers
    divers = divers + 1;
    //removes the coins spent
    coins = coins - diverCost;
    //updates the number of divers for the user
    document.getElementById('divers').innerHTML = divers;
    //updates the number of coins for the user
    document.getElementById('coins').innerHTML = coins;
  };
  //works out the cost of the next diver
  var nextCost = Math.floor(10 * Math.pow(1.1, divers));
  //updates the diver cost for the user
  document.getElementById('diverCost').innerHTML = nextCost;
};

window.setInterval(function() {
  coinClick(divers);
}, 2000);
