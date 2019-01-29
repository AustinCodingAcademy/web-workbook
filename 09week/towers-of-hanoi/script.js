'use strict';

$(document).ready(function() {
  // Put app logic here
  let stack = $('[data-stack]');
  let hand = null;
  let newWidth = null;

  // what happens when a stack is clicked:
    stack.click(function(){
    // get new width after a ring is taken from the top
    let oldWidth = $(this).children().last().width();
    // if a ring's in your 'hand' and it's smaller than the ring in the stack you're trying to apply it to, or the stack is empty:
    if(hand && (newWidth < oldWidth || oldWidth == undefined)){
      // put contents of 'hand' in stack:
      $(this).append(hand);
      checkWin();
      // your 'hand' is now empty:
      hand = null;
    } 
    // if 'hand' is empty then pick up the top most 'ring' of the stack you clicked:
    else  if(!hand){
      // get width of the 'ring' you are picking up and store it for comparison:
      newWidth = $(this).children().last().width();
      // pick up 'ring':
      hand = $(this).children().last().detach();
    }
  })

  // function to check for win state by counting the number of 'rings' in the final stack:
  function checkWin() {
    let numClicks = (clicks / 2)+.5;
    if($('#target').children().length == 4){    
      $('#announce-game-won').text('You won in' + ' ' + numClicks + ' ' + 'moves!');
    }
  }

  // reset board:
  $('#reset').click(function(){
    $('#start').append($('[data-block="100"]'), $('[data-block="75"]'), $('[data-block="50"]'), $('[data-block="25"]'));
    clicks = 0;
    $('#announce-game-won').empty();
  });

  // count clicks:
  let clicks = 0;
  stack.click(function(){
    clicks++;
    console.log(clicks);
  });
});
