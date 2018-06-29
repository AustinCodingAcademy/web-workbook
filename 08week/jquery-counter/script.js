'use strict'

console.log("I am Matt");
/*
$('div').click(function(){
    var current = $('#counter').text();
    console.log ("current counter is " + current);
    var currentAsNumber = parseInt(current);
    var newCounter = currentAsNumber +1;
    $('#counter').text(newCounter);
    
})
*/
/*
$("#counter-1").click(function(){
    var clickOne = 1;
    for (var i = 0; i < 0)
    
    console.log();  
})
*/
/*
$(document).ready(function() {
  var num = 0;
  $('#counter-1').click(function() {
    num++;
    $(this).text(num);
    
  })
});

$(document).ready(function() {
  var num = 0;
  $('#counter-10').click(function() {
    num = num + 10;
    $(this).text(num);
  })
});

$(document).ready(function() {
  var num = 0;
  $('#counter-100').click(function() {
    num = num + 100;
    $(this).text(num);
      
  })
});
*/

$('.incrementer').click(function(){
    var clickedId = this.id;
    console.log("the id that was clicked is " + clickedId);
    var current = $('#counter').text();
    console.log("current counter is " +current);
    var currentAsNumber = parseInt(current);
    
    var newCounter;
    if(clickedID === 'countByOne'){
        newCounter = currentAsNumber +1;
    } else if (clickedId === 'countByTen') {
        newCounter = currentAsNumber +10;
    } else if (clickedId === 'countByHundred'){
      newCounter = currentAsNumber +100;
    }
    })



