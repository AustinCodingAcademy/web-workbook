// 'use strict';

let damage = 0;

let charCount = 0;
let charCost = 10;
let charNum = 79;
let charArray = Array.apply(null, {length: charNum}).map(Number.call, Number);


$(document).ready(function () {

    function updateCounter(){
        $('#count').text(damage);
    }

    function updateCharacterCost(){
        $('#cost_1').text(charCost);
    }

    $('#symbol').click(function () {
        damage += 1;
        updateCounter();
    });

    //Adds additional character
    $('#btn_1').click(function () {
        if ($('#count').text()>=charCost && charCount<=79){
        $('<img class="characters" src="pics/char_'+charCount+'.png">').insertAfter('#symbol')
        updateCounter();
        damage -= charCost;
        charCount += 1;
        charCost += Math.round(charCost*.2);
        $('#counter_1').text(charCount+"/80")
        animateDiv();
        console.log(w);      
        console.log(h);
        updateCharacterCost();
        }
    });

    $('#btn_2').click(function () {
        damage += 1;
        updateCounter();
    });

    $('#btn_3').click(function () {
        x += 1;
        updateCounter();
    });

    $('#btn_4').click(function () {
        damage += 1;
        updateCounter();
    });

    $('#reset').click(function () {
        let answer = confirm("Are you sure you want to do this? You will loose all of your progress.");
        if (answer){
            $('#count').text('0');
        }
    });

    $('#symbol').click(function(){
        $(this).addClass('shake-hard shake-constant');
        
        setTimeout(function(){
            $('#symbol').removeClass('shake-hard shake-constant')},100);
    });

    function timeOut() {
        setTimeout(shake, 3);
    }

    console.log($('#wrapper').height())
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    let h = $('#wrapper').height() - 250;
    let w = $('#wrapper').width() - 50;
    
    let nh = Math.floor(Math.random() * h);
    let nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    let newq = makeNewPosition();
    $('.characters').animate({ top: newq[0], left: newq[1] }, function(){
      animateDiv();  
  
    });
    
};
