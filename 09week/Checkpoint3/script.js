
var score = document.getElementById("score");
var clock = document.getElementById("clock");

//the variables//
var clicks = 0;//clicks//
var timer = 15;//countdown//
var beenClicked = false;
var intervalId

//functions//
function tick() {
    timer--;
    clock.textContent = timer;
    if (timer === 0) {
        clearInterval(intervalId);
        displayScore();
        displayReward();
        showElement();
    }
}

function showElement() {
    var overlay = document.getElementById("overlay");
    if (overlay.style.display === "none") {
        overlay.style.display = "block";
    } else {
        overlay.style.display = "none";
    }
}


//Gathered number of clicks to show in element "final-score"//
function displayScore() {
    var finalScore = document.getElementById('final-score');
    finalScore.textContent = "Score: " + clicks;
}

//Gathered element "reward" to show text dependant on how many clicks//
function displayReward () {
    var reward = document.getElementById('reward')
    if (clicks <= 50) {
        reward.textContent = "Not impressed. Give me your best shot!";
    } else if (clicks >= 51 && clicks <= 100) {
        reward.textContent = "Meh... Getting better.";
    } else if (clicks >= 101 && clicks <= 150) {
        reward.textContent = "Must say, I'm impressed.";
    }
}

//Event listeners//

document.getElementById("click-button").onclick = function() {
    if (beenClicked === false) {
        beenClicked = true;
        intervalId = setInterval(tick, 1000);
    }
    clicks++;
    score.textContent = "Score: " + clicks;
}

document.getElementById("restart-button").onclick = function() {
    window.location.reload();
}

document.getElementById("restart-button-2").onclick = function() {
    window.location.reload();
}
