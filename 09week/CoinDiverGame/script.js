'use strict';

// Document Ready Function & Console Log of Ready state

$(document).ready(function() {
  console.log("ready!");
});


var coins = 0;

function coinclick(number) {
  coins = coins + number;
  document.getElementById("coins").innerHTML = coins;
};

var divers = 0;

function buydiver() {
  //works out the cost of hiring 1 diver
  var divercost = Math.floor(10 * Math.pow(1.1, divers));
  //checks that the player can afford the next diver
  if (coins >= divercost) {
    //increases number of divers
    divers = divers + 1;
    //removes the coins spent
    coins = coins - divercost;
    //updates the number of divers for the user
    document.getElementById('divers').innerHTML = divers;
    //updates the number of coins for the user
    document.getElementById('coins').innerHTML = coins;
    adddiverimg ();
  };
  //works out the cost of the next diver
  var nextcost = Math.floor(10 * Math.pow(1.1, divers));
  //updates the diver cost for the user
  document.getElementById('divercost').innerHTML = nextcost;

};

function adddiverimg() {
  var img=document.createElement("img");
      img.src="diver.png"
      img.id="picture"
      var foo = document.getElementById("scubaimage");
      foo.appendChild(img);
};

function resetbutton() {
  $("#scubaimage").empty();
  coins = 0;
  divers = 0;
  document.getElementById("coins").innerHTML = ("0");
  document.getElementById("divers").innerHTML = ("0");
  document.getElementById("divercost").innerHTML = ("10");
  document.getElementById("button4").innerHTML = ("New Game");
};

window.setInterval(function() {
  coinclick(divers);
}, 2000);
