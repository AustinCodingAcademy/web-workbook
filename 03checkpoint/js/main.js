var score = 0;
var multiplier = 0;
var rate = 1000;

$(document).ready(function() {
  //increment score variable when baby mario image is clicked
  $('#clickable').click(function(){
    playSound();
    score++;
    scoreUpdater();
  });

  $('#babyLuigi').click(function(){
    if(score >= 10){
      score = score - 10;
      multiplier++;
      $('#babyLuigiSound').trigger('play');
      $('#babyLuigis').append('<img style="width:30px;" src="./assets/img/babyLuigi.png"/>');
    }
    else{
      playDenySound();
    }
  });

  $('#yoshi').click(function(){
    if(score >= 100){
      score = score - 100;
      multiplier = multiplier + 10;
      $('#yoshiSound').trigger('play');
      $('#yoshis').append('<img style="width:30px;" src="./assets/img/yoshi.png"/>');
    }
    else{
      playDenySound();
    }
  });

  $('#babyBowser').click(function(){
    if(score >= 1000){
      score = score - 1000;
      multiplier = multiplier + 20;
      $('#babyBowserSound').trigger('play');
      $('#babyBowsers').append('<img style="width:30px;" src="./assets/img/babyBowser.png"/>');
    }
    else{
      playDenySound();
    }
  });
});

function scoreUpdater(){
  $('#score').text(score);
  $('#coinsPerSecond').text(multiplier);
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

function playDenySound(){
  $('#notEnoughCoins').trigger('play');
}
