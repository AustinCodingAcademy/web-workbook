'use strict';

$(document).ready(function() {
  // Put app logic in here
  game();
  resetGame()
});


 var holdingBlock = null;
 var clickTurn = 1;
 var currentStack = null;
 var nextStack = null;

function game() {
  $('div[data-stack]').click(function() {
    if (clickTurn === 1) {
      var currentStack = $(this);
      if (currentStack.children().length > 0) {
        var currentBlock = currentStack.children().last();
        holdingBlock = currentBlock;
        clickTurn = 2;
      }
    } else {
      var nextStack = $(this);
      var compareBlock = nextStack.children().last();

      var holdingBlockValue = parseInt(holdingBlock.attr('data-block'));
      var compareBlockValue = parseInt(compareBlock.attr('data-block'));

        if (holdingBlockValue <= compareBlockValue) {
          moveBlock(holdingBlock, nextStack);
          checkWin();

        } else if (!compareBlockValue) {
          moveBlock(holdingBlock, nextStack);
        } else {
          alert('Illegal Move. Please try again.')
        }
    }
  });
}

function moveBlock(holdingBlock, nextStack) {
  holdingBlock.appendTo(nextStack);
  console.log(nextStack);
  clickTurn = 1;
  holdingBlock = null;
}

function checkWin () {
  var isWin = false;
  if ($('div[data-stack="3"]').children().length === 4) {
    isWin = true;
  }

  if (isWin) {
    $('#announce-game-won').html('You won!');
  }
}

function resetGame (){
  $('.resetGame').click(function(){
    $('div[data-block]').remove();
    $('div[data-stack="1"]').html('<div data-block="100"></div><div data-block="75"></div><div data-block="50"></div><div data-block="25"></div>');
    var holdingBlock = null;
    var clickTurn = 1;
    var currentStack = null;
    var nextStack = null;
    $('#announce-game-won').html('');
  });
}
