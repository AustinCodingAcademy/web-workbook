'use strict';

// $(document).ready (function() {
// ==============================
// Variables
// ==============================
  let muns = 0,
      currentMuns = 0,
      diggerBonus = 0,
      minerBonus = 0,
      dozerBonus = 0,
      excavatorBonus = 0,
      digger = 0,
      miner = 0,
      dozer = 0,
      excavator = 0;

  alert('Get Muns\nYour goal is to get all da Muns')
// ==============================
// Save Game / Load Game
// ==============================

// ==============================
// Game Logic
// ==============================
  function getMuns(number){
      muns = muns + number;
      $('#current-muns').html(muns);
  };
  function buyDigger(){
    let diggerCost = Math.floor(1 * Math.pow(1.5,digger));
    if (muns >= diggerCost) {
      digger = digger + 1;
      diggerBonus = diggerBonus + 1;
      muns = muns - diggerCost;
      $('#digger').html(diggerBonus);
      $('#digger-num').html(digger);
      $('#current-muns').html(muns);
    };
      let nextCost = Math.floor(1 * Math.pow(1.5,digger));
      $('#digger-cost').html(nextCost);
  };

  function buyMiner(){
    let minerCost = Math.floor(15 * Math.pow(1.15,miner));
    if (muns >= minerCost) {
      miner = miner + 1;
      minerBonus = minerBonus + 5;
      muns = muns - minerCost;
      $('#miner').html(minerBonus);
      $('#miner-num').html(miner);
      $('#current-muns').html(muns);
    };
      let nextCost = Math.floor(15 * Math.pow(1.15,miner));
      $('#minercost').html(nextCost);
  };

  function buyDozer(){
    let dozerCost = Math.floor(50 * Math.pow(1.15,dozer));
    if (muns >= dozerCost) {
      dozer = dozer + 1;
      dozerBonus = dozerBonus + 10;
      muns = muns - dozerCost;
      $('#dozer').html(dozerBonus);
      $('#dozer-num').html(dozer);
      $('#current-muns').html(muns);
    }
    let nextCost = Math.floor(50 * Math.pow(1.15,dozer));
    $('#dozerCost').html(nextCost);
  };

  function buyExcavator(){
    let excavatorCost = Math.round(500 * Math.pow(1.15,excavator));
    if (muns >= excavatorCost) {
      excavator = excavator + 1;
      excavatorBonus = excavatorBonus + 50;
      muns = muns - excavatorCost;
      $('#excavator').html(excavatorBonus);
      $('#excavator-num').html(excavator)
      $('#current-muns').html(muns);
    };
      let nextCost = Math.floor(500 * Math.pow(1.15,excavator));
      $('#excavator-cost').html(nextCost);
  };
  setInterval(function(){
    getMuns(diggerBonus)
    getMuns(minerBonus)
    getMuns(dozerBonus)
    getMuns(excavatorBonus)
  }, 2000);


// });
