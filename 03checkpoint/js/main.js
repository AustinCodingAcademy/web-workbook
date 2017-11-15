var score = 0;
var multiplier = 1;
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

    }
    else{
      playDenySound();
    }
  });

  $('#yoshi').click(function(){
    if(score >= 100){
      score = score - 100;
      multiplier = multiplier + 5;
      $('#yoshiSound').trigger('play');
    }
    else{
      playDenySound();
    }
  });

  $('#babyBowser').click(function(){
    if(score >= 100){
      alert("hi");
      score = score - 100;
      multiplier = multiplier + 10;
      $('#babyBowserSound').trigger('play');
    }
    else{
      playDenySound();
    }
  });
});

function scoreUpdater(){
  $('#score').text(score);
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
