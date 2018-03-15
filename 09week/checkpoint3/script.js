'use strict';

// $(document).ready (function() {
// ==============================
// Variables
// ==============================
  let muns = 0,
      currentMuns = 0,
      digger = 0,
      miner = 0,
      dozer = 0,
      excavator = 0;

  alert('Get Muns\nYour goal is to get all da Muns')
// ==============================
// Game Logic
// ==============================
  function saveGame(){
    localStorage.setItem("currentMuns", currentMuns);
  }
  function loadGame(){
    currentMuns = localStorage.getItem('currentMuns');
    currentMuns = parseInt(currentMuns);
  }
// ==============================
// Game Logic
// ==============================
  function getMuns(number){
      muns = muns + number;
      document.getElementById('currentMuns').innerHTML = muns;
  };
  function buyDigger(){
    let diggerCost = Math.floor(1 * Math.pow(2,digger));
    if (muns >= diggerCost) {
      digger = digger + 1;
      muns = muns - diggerCost;
      document.getElementById('digger').innerHTML = digger;
      document.getElementById('currentMuns').innerHTML = muns;
    };
      let nextCost = Math.floor(1 * Math.pow(2,digger));
      document.getElementById('diggerCost').innerHTML = nextCost;
  };
  window.setInterval(function(){
    getMuns(digger)
  }, 1000);

  function buyMiner(){
    let minerCost = Math.floor(15 * Math.pow(1.05,miner));
    if (muns >= minerCost) {
      miner = miner + 10;
      muns = muns - minerCost;
      document.getElementById('miner').innerHTML = miner;
      document.getElementById('currentMuns').innerHTML = muns;
    };
      let nextCost = Math.floor(15 * Math.pow(1.05,miner));
      document.getElementById('minerCost').innerHTML = nextCost;
  };
  window.setInterval(function(){
    getMuns(miner)
  }, 1000);

  function buyDozer(){
    let dozerCost = Math.floor(50 * Math.pow(1.05,dozer));
    if (muns >= dozerCost) {
      dozer = dozer + 50;
      muns = muns - dozerCost;
      document.getElementById('dozer').innerHTML = dozer;
      document.getElementById('currentMuns').innerHTML = muns;
    }
    let nextCost = Math.floor(50 * Math.pow(1.05,dozer));
    document.getElementById('dozerCost').innerHTML = nextCost;
  };
  window.setInterval(function(){
    getMuns(dozer)
  }, 1000)
  function buyExcavator(){
    let excavatorCost = Math.round(150 * Math.pow(1.05,excavator));
    if (muns >= excavatorCost) {
      excavator = excavator + 100;
      muns = muns - excavatorCost;
      document.getElementById('excavator').innerHTML = excavator;
      document.getElementById('currentMuns').innerHTML = muns;
    };
      let nextCost = Math.floor(150 * Math.pow(1.05,excavator));
      document.getElementById('excavatorCost').innerHTML = nextCost;
  };
  window.setInterval(function(){
    getMuns(excavator)
  }, 1000);


// });
