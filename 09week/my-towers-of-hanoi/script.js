'use strict';

$(document).ready(function() {

  var gameOver = false;
  var $stacks = $('.column');
  var $blocks = $('.block');
  //since only last child of every stack is allowed to make the move, give them class movable
  var $movableBlocks = $('.block:last-child');
  $movableBlocks.addClass("movable");

  // var $moves = $('#moves');
  // $moves += 1;
  // $("#moves").text($moves + " moves");

  //any block is draggable, but they revert to original position unless condition is met
  $movableBlocks.draggable({
    revert: true
  });

  $stacks.droppable({
    accept: ".movable",
    drop: function(event, ui) {
      if (!gameOver) {
        if (goodToDrop($(this), ui.draggable)) {
          ui.draggable.draggable('option', 'revert', false);
          $(this).append(ui.draggable.detach());
          ui.draggable.css({
            'top': 0,
            'left': 0
          });
          //reset things
          $movableBlocks = $('.block:last-child');
          $('.block').removeClass("movable");
          $movableBlocks.addClass("movable");
          $blocks.draggable({
            revert: true
          });
          //checkForWin
          checkForWin();
        }
      }
    }
  });

  // function countMove() {
  //
  // }

  function goodToDrop($stack, $blocks) {
    var $last_block = $stack.children().last();
    if (parseInt($blocks.css("width")) < parseInt($last_block.css("width")) || $stack.children().length === 0) {
      return true;
    } else {
      return false;
    }
  }

  function checkForWin() {
    if ($('#col3').children().length === 8) {
      $('#winner').html('<h2><span id="red">Y</span><span id="orange">o</span><span id="yellow">u</span><span id="green"> W</span><span id="blue">o</span><span id="purple">n</span><span id="violet">!</span></h2>');
      gameOver = true;
      // make all of the block unmovable until reset button is pressed
    }
  }

  $("button").click(function() {
    $('#col1').html('<div class="base"></div><div class="block" id="first"></div><div class="block" id="second"></div><div class="block" id="third"></div><div class="block" id="fourth"></div><div class="block" id="fifth"></div><div class="block" id="sixth"></div><div class="block" id="seventh"></div>');
    $('#col2').html('<div class="base"></div>');
    $('#col3').html('<div class="base"></div>');
    $('#winner').empty();
    gameOver = false;
    // moves = 0;
  })

  // $("button").click(function() {
  //   $('#col1').html('<div class="base"></div><div class="block" id="first"></div><div class="block" id="second"></div><div class="block" id="third"></div><div class="block" id="fourth"></div><div class="block" id="fifth"></div><div class="block" id="sixth"></div><div class="block" id="seventh"></div>');
  //   $('#col2').html('<div class="base"></div>');
  //   $('#col3').html('<div class="base"></div>');
  //   $('#winner').empty();
  //   gameOver = false;
  //   // moves = 0;
  // })


});
