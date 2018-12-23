//'use strict';

let damage = 1;

let charCount = 0;
let handCount = 0;

let charCost = 10;
let handCost = 100;
let finalCost = 1000;

let handNum = 4;
let charNum = 79;
let finalCount = 0;
let charArray = Array.apply(null, { length: charNum }).map(Number.call, Number);

let speedModifier = 0.1;
let charInterval;
let handInterval;
let finalInterval;
let timerInterval = setInterval(timer, 1000);
let minute = 9;
let sec = 59;

////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
    

  $('#symbol').click(function() {
    damage += 1;
    updateCounter();
    shakeSymbol();
  });

  //Adds additional character
  $('#btn_1').click(function() {
    if ($('#count').text() >= charCost && charCount <= 79) {
      $('<img class="characters" src="pics/char_' + charCount + '.png">').insertAfter('#symbol');

      damage = damage - charCost;
      updateCounter();
      charCost = charCost + Math.round(charCost * 0.1);
      updateCharacterCost();
      charCount = charCount + 1;
      $('#counter_1').text(charCount + '/80');

      animateDiv();
      characterInterval();
    }
  });

  $('#btn_2').click(function() {
    damage += 1;
    updateCounter();
  });

  $('#btn_3').click(function() {
    if ($('#count').text() >= handCost && handCount <= 3) {
        $('<img class="hand characters" src="pics/hand.png">').insertAfter('#symbol');
        
        damage = damage - handCost;
        updateCounter();
        handCost = handCost + Math.round(handCost * 0.2);
        updateHandCost();
        handCount = handCount + 1;
        $('#counter_3').text(handCount + '/4');

        animateDiv();
        masterHandInterval();
    }
  });

  $('#btn_4').click(function() {
    if ($('#count').text() >= finalCost && finalCount <=0){
      
    damage = damage - finalCost;
    updateCounter();
    finalCount= finalCount + 1;
    $('#counter_4').text(finalCount + '/1');
    finalSmashInterval();
    }
  });

  $('#reset').click(function() {
    let answer = confirm(
      'Are you sure you want to do this? You will loose all of your progress.'
    );
    if (answer) {
      reset();
    }
  });
  timer();


$('#godMode').click(function(){
    godMode();
    console.log("trie");
});
});
////////////////////////////////////////////////////////////////////////////////
function reset(){
  damage = 0;
  charCount = 0;
  charCost = 10;
  handCount= 0;
  handCost = 100;
  minute = 9;
  sec = 59;
  timerInterval = setInterval(timer, 1000);
  handInterval = 0;
  finalInterval =0;
  $('#count').text(damage);
  $('#counter_1').text(charCount + '/80');
  $('#cost_1').text(charCost);
  $('.characters').remove();
  $('.win_loose').remove();
  $('#timer').text(minute + ' : 0' + sec);
  timer();
}

////////////////////////////////////////////////////////////////////////////////
function updateCounter() {
  $('#count').text(damage);
  winner();
}

function updateCharacterCost() {
    $('#cost_1').text(charCost);
  }

function updateHandCost() {
$('#cost_3').text(handCost);
}
////////////////////////////////////////////////////////////////////////////////
//Handles winner if score reaches 10,000 and loser if time runs out
function loser(){
  $('<img class="fail win_loose" src="pics/fail.jpg">').insertAfter('#symbol');
  clearInterval(timerInterval);
    setTimeout(function(){
      reset();
    },3000);
}

function winner(){
  if (damage >= 10000 && damage <100000){
    $('<img class="win win_loose" src="pics/success.jpg">').insertAfter('#symbol');
    clearInterval(timerInterval);
    setTimeout(function(){
      reset();
    },3000);
  }
}

function godMode(){
  damage = 99999999999999999999;
  updateCounter()
  clearInterval(timerInterval);
}

////////////////////////////////////////////////////////////////////////////////
//Handles interval and the da
function characterInterval() {
  if (charCount > 0) {
    charInterval = setTimeout(characterInterval, 3000);
    damage = damage + (5 * charCount);
    updateCounter();
    shakeSymbol();
  }
}

function masterHandInterval() {
  if (handCount > 0) {
    handInterval = setTimeout(masterHandInterval, 1000);
    damage = damage + (10 * handCount);
    
    updateCounter();
    shakeSymbol();
  }
}

function finalSmashInterval(){
    damage = damage + (10 * (handCount+charCount));
    speedModifier = 5;
    updateCounter();
    shakeFinalSymbol();
    animateDiv();
    setInterval(function(){
      speedModifier = .5;
      shakeSymbol() 
      animateDiv();
    },5000)
  
}
////////////////////////////////////////////////////////////////////////////////

function shakeSymbol() {
  $('#symbol').addClass('shake-hard shake-constant');

  setTimeout(function() {
    $('#symbol').removeClass('shake-hard shake-constant');
  }, 100);
}

function shakeFinalSymbol() {
  $('#symbol').addClass('shake-hard shake-constant');

  setTimeout(function() {
    $('#symbol').removeClass('shake-hard shake-constant');
  }, 5000);
}

///////////////////////////////////////////////////////////////////////////////
//Count Down Timer
function timer(){
    if (sec == 00 && minute == 0){
      $('#timer').text(minute + ' : 0' + sec);
      loser();
      return;
      console.log("true");
    }
    if(sec<10){
      $('#timer').text(minute + ' : 0' + sec);
    }else{
        $('#timer').text(minute + ' : ' + sec);
    }
      sec--;
      if (sec == 00 && minute > 0) {
        minute--;
        sec = 59;
    };
  };

///////////////////////////////////////////////////////////////////////////////
//Provides animation to characters
function makeNewPosition() {
  // Get viewport dimensions (remove the dimension of the div)
  let h = $('#wrapper').height() + 300;
  let w = $('#wrapper').width() - 50;

  let nh = Math.floor(Math.random() * h);
  let nw = Math.floor(Math.random() * w);

  return [nh, nw];
}

function animateDiv() {
  let newq = makeNewPosition();
  let oldq = $('.characters').offset();
  let speed = calcSpeed([oldq.top, oldq.left], newq);

  $('.characters').animate({ top: newq[0], left: newq[1] }, speed, function() {
    animateDiv();
  });
}

function calcSpeed(prev, next) {
  let x = Math.abs(prev[1] - next[1]);
  let y = Math.abs(prev[0] - next[0]);

  let greatest = x > y ? x : y;

  speedModifier = .5;

  let speed = Math.ceil(greatest / speedModifier);

  return speed;
}
///////////////////////////////////////////////////////////////////////////////