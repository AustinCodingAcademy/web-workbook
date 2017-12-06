'use strict';

$(document).ready(function() {
  // Put app logic here

  // Defining my variables
  var $block = null;
  var gameOver = false;
  var $isDetached = {};

  // Let's the player pick up the first block in a stack with a click and
  // allows them to place it down on one of the three dropzones by clicking
  // a second time

  // $('[data-stack]').click(function() {
  //   if (!$block) {
  //     $block = $(this).children().last().detach();
  //   } else {
  //     $(this).append($block);
  //     $block = null;
  //   }
  //   Win();
  // })

  // Edit: adding onto the commented code above so that it utilizes the 'drop'
  // and 'canBeDropped' functions
  $('[data-stack]').click(function() {
    if (!$block) {
      $block = $(this).children().last().detach();
    } else {
      $(this).append($block);
      $block = null;
    }
    Win();
  })

  //Defining a function that checks if the block can be can be dropped
  function drop($isDetached) {
    if (canBeDropped($isDetached)) {
      $('[data-stack]').append($isDetached);
      return true;
    }
    else {
      return false;
    }
  }

  // Defining a function that makes sure that the player cannot place bigger
  // blocks on top of smaller blocks
  // *I NEEDED TO GOOGLE THIS ANSWER* I could not figure this part out
  function canBeDropped($isDetached) {
    var $lastBlock = $('[data-stack]').children().last();
    if (parseInt($isDetached.attr("data-block"))
<parseInt($lastBlock.attr("data-block")) ||
$('[data-stack]').children().length===0) {
      return true;
    }
    else {
      return false;
    }
  }

  // Defining a function that checks for wins
  // *A win is where all four blocks are on <div data-stack="3">
  // Also known as the bottom row
  function Win() {
    if($('[data-stack="3"]').children().length===4) {
      $('#announce-game-won').text("A winner is you!");
      gameOver = true;
    }
  }
  // End of code
});
