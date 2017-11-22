var score = 0;
var multiplier = 0;
var rate = 1000;
//var buttonIds = [['#babyLuigi','#babyLuigiSound', "babyLuiguis"], ['#yoshi','#yoshiSound', 'yoshis'],
//  ['#babyBowser','#babyBowserSound', 'babyBowsers']];
var upgradeDictionary = {
  babyMario: ['#coin', 'babyMarios'],
  babyLuigi: ['#babyLuigiSound', '#babyLuigis'],
  yoshi: ['#yoshiSound', '#yoshis'],
  babyBowser: ['#babyBowserSound', '#babyBowser']
};

$(document).ready(function() {
  //increment score variable when baby mario image is clicked
  $('#clickable').click(function(){
    playSound();
    score++;
    scoreUpdater();
  });

  $('.upgrade-buttons').click(function(){
    buttonClicked(this.id);
  });
});

function scoreUpdater(){
  $('#score').text(score);
  $('#coinsPerSecond').text(multiplier);
}

function buttonClicked(id){
  var buttonId = id;

  switch(buttonId){
    case 'babyLuigi':
      if(score >= 10){
        score = score - 10;
        multiplier++;
        playSounds(buttonId);
        addImage(buttonId);
      }
      else{
        playDenySound();
      }
      break;
    case 'yoshi':
      if(score >= 100){
        score = score - 100;
        multiplier = multiplier + 10;
        playSounds(buttonId);
        addImage(buttonId);
      }
      else{
        playDenySound();
      }
      break;
    case 'babyBowser':
      if(score >= 1000){
        score = score - 1000;
        multiplier = multiplier + 20;
        playSounds(buttonId);
        addImage(buttonId);
      }
      else{
        playDenySound();
      }
      break;
    default:
      alert('Error');
      break;
  }
}

window.setInterval(superCharge, rate);

//function to steadily increase the score multiplier variable
function superCharge(){
  score = score + (1 * multiplier);
  scoreUpdater();
}

function playSound(){
  $('#coin').trigger('play');
}

function playSounds(id){
  $(upgradeDictionary[id][0]).trigger('play');
}

function addImage(id){
  $(upgradeDictionary[id][1]).append('<img style="width:30px;" src="./assets/img/'+ id +'.png"/>');
}

function playDenySound(){
  $('#notEnoughCoins').trigger('play');
}
