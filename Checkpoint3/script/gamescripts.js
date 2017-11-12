var gameScore = 1;
var clickMultiplier = 1;
var scorePerTick = 1;
var tickRate = 1000;


$("#clicker").click(function(){
    updateScore(clickMultiplier);
});


function updateScore(ickMultiplier){
  gameScore = gameScore + 1*ickMultiplier;
  $('#scoreboard').html('Score: '+gameScore);
}

window.setInterval(function(){
  updateScore(scorePerTick);
},tickRate);
