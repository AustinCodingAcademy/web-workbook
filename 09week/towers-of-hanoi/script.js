'use strict';

$(document).ready(function() {
  // Put app logic here
  const $top = $('[data-block=25]');
  const $midTop = $('[data-block=50]');
  const $midBottom = $('[data-block=75]');
  const $bottom = $('[data-block=100]');

  let $playerHand = null;
  let $currentStack;
//Click event added
  $('[data-stack]').click(function() {
//Test1: No block in hand and target has more than 0 blocks
    if ($playerHand === null && $(this).children().length > 0) {
//When true set variables
      $playerHand = $(this).children().last()
      $currentStack = $(this)
      $playerHand.detach()  //Detach the block held under variable $playerHand
    } else{ //Time to find out how to handle the drop behavior
//Test a: Test if var $playerHand is not null and the new clicked stack's last block's value is greater than the
  //the picked up block
        if ($playerHand != null && $(this).children().last().data('block') > $playerHand.data('block')) {
//When True:
          $(this).append($playerHand); //add the block to the top of the stack
          $playerHand = null; //reset the $playerHand
//When Test a is False:
//Test b: Test if var $playerHand is not null and the new clicked stack's last block's value is less than the
  //the picked up block
        }else if ($playerHand != null && $(this).children().last().data('block') < $playerHand.data('block')){
          //When True:
          $currentStack.append($playerHand); //Send the block back to the original clicked stack
          $playerHand = null; //reset the $playerHand
//When Test b is False:
        }else {
          $(this).append($playerHand); //add the block to the new stack
          $playerHand = null; //reset $playerHand
      }
    }
    winner();
  })
  function winner(){
    let winCatch = $('[data-stack="3"]').children().length
    if (winCatch === 4) {
      $('#announce-game-won').html("You Did It!");
      $('[data-stack="3"]').css("background","lightgreen")
    }
  }
});
