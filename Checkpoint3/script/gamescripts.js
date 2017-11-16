//Core Variables
var totalScore = 1;
var gameScore = 1;
var clickMultiplier = 100;
var scorePerTick = 1;
var tickRate = 1000;

//Document destruction Solutions Variables
var numShredders = 0;
var numIndustrials = 0;
var numDumpsterFires = 0;
var numPaperPlants = 0;
var numRockets = 0;
var numPortals = 0;

//Document Destruction Upgrades
var tierShredders = 0;
var shredderEffcacy = 5;
var tierIndustrials = 0;
var industrialEffcacy = 10;
var tierDumpsterFires = 0;
var dumpsterEffcacy = 20;
var tierPaperPlants = 0;
var paperPlantEffcacy = 50;
var tierRockets = 0;
var rocketEffcacy = 200;
var tierPortals = 0;
var portalEffcacy = 1000;

//Economy
var shredderUpgradeInitial = 80;
var shredderUpgradeMultiplier = 1.25;
var industrialUpgradeInitial = 666.66;
var industrialUpgradeMultiplier = 1.5;
var dumpsterFireUpgradeInitial = 5000;
var dumpsterFireUpgradeMultiplier = 2;
var paperPlantUpgradeInitial = 25000;
var paperPlantUpgradeMultiplier = 3;
var rocketUpgradeInitial = 50000;
var rocketUpgradeMultiplier = 4;
var portalUpgradeInitial = 100000;
var portalUpgradeMultiplier = 5;

//clicker function
$("#clicker").click(function(){
    updateScore(clickMultiplier);
    $('#clickerIcon').attr('src','./assets/shredAnim.gif'); //piskel gif
});

//updates score based on multiplier fed from clicker or ticker
function updateScore(ickMultiplier){
  gameScore = gameScore + 1*ickMultiplier;
  //update the score balance
  totalScore = totalScore +1*ickMultiplier;
  //keep track of the total score for progression
  $('#scoreboard').html('Score: '+gameScore);
}

//the ticker
window.setInterval(function(){
  updateScore(scorePerTick);
},tickRate);

//Hoverover flavor text
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

//Document Destruction shredderSolutions
$("#shredderSM").click(function(){
  if (gameScore >= shredderUpgradeInitial*shredderUpgradeMultiplier){
    //subtract the score for upgrading
    gameScore = gameScore-(shredderUpgradeInitial*shredderUpgradeMultiplier).toFixed(0);

    //update the price to reflect next level
    (shredderUpgradeInitial = shredderUpgradeInitial*shredderUpgradeMultiplier).toFixed(0);

    numShredders++;
    //save a temporary new upgrade value
    var newUpgrade = numShredders * shredderEffcacy;
    //add that to the scorePerTick
    scorePerTick = scorePerTick + newUpgrade;

    //calculate a new shredder cost
    var newShredderCost = (shredderUpgradeInitial*shredderUpgradeMultiplier).toFixed(0);

    console.log('new score per tick: ' + scorePerTick);
    $('#scoreboard').html('Score: '+gameScore);
    $('#numShredders').html(numShredders);
    $('#shredderCost').html(('-')+newShredderCost);
  }
    numShredders = numShredders++;
});

$("#shredderLG").click(function(){
  if (gameScore >= industrialUpgradeInitial*industrialUpgradeMultiplier){
    //subtract the score for upgrading
    gameScore = gameScore-(industrialUpgradeInitial*industrialUpgradeMultiplier).toFixed(0);

    //update the price to reflect next level
    (industrialUpgradeInitial = industrialUpgradeInitial*industrialUpgradeMultiplier).toFixed(0);

    numIndustrials++;
    //save a temporary new upgrade value
    var newUpgrade = numIndustrials * industrialEffcacy;
    //add that to the scorePerTick
    scorePerTick = scorePerTick + newUpgrade;

    //calculate a new industrial cost
    var newIndustrialCost = (industrialUpgradeInitial*industrialUpgradeMultiplier).toFixed(0);

    console.log('new score per tick: ' + scorePerTick);
    //update economy text
    $('#scoreboard').html('Score: '+gameScore);
    $('#numIndustrials').html(numIndustrials);
    $('#industrialCost').html(('-')+newIndustrialCost);
  }
    numIndustrials = numIndustrials++;
});
