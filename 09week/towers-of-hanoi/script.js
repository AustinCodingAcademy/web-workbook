'use strict';

$(document).ready(function() {
  // Put app logic here
  var gameOver = false;
  var $stack = $('[data-stack]');
  var $block = $('[data-block]');
  var $moveBlock = $('[data-block]:last-child');
  $moveBlock.addClass('move');

//Make blocks draggable

  $block.draggable({
    revert: true
  });

//make blocks droppable
//Comparing values
  $stack.droppable({
    accept: '.move',
    drop: function(event, ui){
      if(!gameOver){
        if(dropMe($(this), ui.draggable)){
          ui.draggable.draggable('option', 'revert', false);
          $(this).append(ui.draggable.detach());
          ui.draggable.css({
            'top': 0,
            'left': 0
          });
          $moveBlock = $('[data-block]:last-child');
          $('[data-block]').removeClass('move');
          $moveBlock.addClass('move');
          $block.draggable({
            revert: true

        });
        checkWinner();
      }
    } else{
      reset();
    }
  }


});




//Comparing the values of the children
  function dropMe($stack, $block) {
    var $lastBlock = $stack.children().last();
    if (parseInt($block.attr('data-block')) < parseInt($lastBlock.attr('data-block')) || $stack.children().length === 0) {
      return true;
    } else {
      return false;
    }
  }

//checking for a winner
function checkWinner(){
  if ($('[data-stack = "3"]').children().length === 4){
    $('#announce-game-won').html('You are the best!');
    gameOver = true;
  }
}


//Resetting the game
  function reset() {
    $('[data-stack = "1"]').html('<div data-block="100"></div><div data-block="75"></div><div data-block="50"></div><div data-block="25"></div>');
    $('[data-stack = "2"]').empty();
    $('[data-stack = "3"]').empty();
    $('#announce-game-won').empty();
    gameOver = false;
  }
});
