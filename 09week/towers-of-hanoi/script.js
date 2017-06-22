'use strict';


$(document).ready(function() {

  var gameover = false;
  var $stacks = $('[data-stack]');
  var $blocks = $('[data-block]');
  var $movableBlock = $('[data-block]:last-child');
  $movableBlock.addClass("movable");

  $blocks.draggable({
    revert: true
  });

  $stacks.droppable({
    accept: ".movable",
    drop: function(event, ui) {
      if (!gameover) {
        if (dropIt($(this), ui.draggable)) {
          ui.draggable.draggable('option','revert', false);
          $(this).append(ui.draggable.detach());
          ui.draggable.css({
            'top': 0,
            'left': 0
          });

          $movableBlock = $('[data-block]:last-child');
          $('[data-block]').removeClass("movable");
          $movableBlock.addClass("movable");
          $blocks.draggable({
            revert: true;
          });
          checkWin();
        }
      } else {
        resetGame();
      }
      //$(ui.draggable).appendTo(this).attr('style', 'position: relative');
      //$(ui.draggable).draggable('option','revert',true);
    }
    });

  function dropIt($stack,$block){
    var $last_Block = $stack.children().last();
    if (parseInt($block.attr("data-block")) < parseInt($last_block.attr("data-block")) ||
    $stack.children().length === 0) {
      return true;
    } else {
      return false;
    }
  }

  function checkWin(){
    if ($('[data-stack="3"]').children().length === 4) {
      $("#announce-game-won").html("You Win!");
      gameover = true;
    }
  }

  function resetGame(){
    $('[data-stack="1"]').html(',div data-block="100"></div><div data-block="75"></div><div data-block"50"></div><div data-block="25"></div>');
    $('[data-stack="2"]').empty();
    $('data-stack="3"').empty();
    $("#announce-game-won").empty();
    gameover = false;
  }

});
