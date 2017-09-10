'use strict';

$(document).ready(function() {
  // Put app logic here
  //$('[data-block]').draggable({
  //  revert: "invalid"
  //});

//  $('[data-stack]').droppable({
//    drop: function(event, ui){
  //    var drag = $(ui.draggable).attr('data-block');
  //      var last = $($(this).children().last()[0]);
  //      if (parseInt($(drag)) > parseInt($(last))); {
  //        $(ui.draggable).draggable('option', 'revert', true);
//      $(ui.draggable).appendTo(this).attr('style', 'position: relative');
  //      }
//    }
//  });

var endGame = false;
  var $stacks = $('[data-stack]');
  var $blocks = $('[data-block]');
  var $movableBlocks = $('[data-block]:last-child');
  $movableBlocks.addClass("movable");
  $blocks.draggable({
    revert: true
  });

  $stacks.droppable({
    accept: ".movable",
    drop: function(event, ui) {
      if (!endGame) {
        if (goodToDrop($(this), ui.draggable)) {
          ui.draggable.draggable('option', 'revert', false);
          $(this).append(ui.draggable.detach());
          ui.draggable.css({
            'top': 0,
            'left': 0
          });
          //reset
          $movableBlocks = $('[data-block]:last-child');
          $('[data-block]').removeClass("movable");
          $movableBlocks.addClass("movable");
          $blocks.draggable({
            revert: true
          });

          winState();
        }
      } else {
        reset();
      }
    }
  });

  function goodToDrop($stack, $block) {
    var $lastBlock = $stack.children().last();
    if (parseInt($block.attr("data-block")) < parseInt($lastBlock.attr("data-block")) || $stack.children().length === 0) {
      return true;
    } else {
      return false;
    }
  }

  function winState() {
    if ($('[data-stack="3"]').children().length === 4) {
      $('#announce-game-won').html("YOU'RE A WINNER!");
      endGame = true;
    }
  }

  function reset() {
    $('[data-stack="1"]').html('<div data-block="100"></div><div data-block="75"></div><div data-block="50"></div><div data-block="25"></div>');
    $('[data-stack="2"]').empty();
    $('[data-stack="3"]').empty();
    $('#announce-game-won').empty();
    endGame = false;
  }


});

  //make blocks draggable/droppable
  //rules: smaller on top(children/lastchild)
  //winstate
  //can't drop outside of the blocks
  //(if event is larger that lastchild)
  // reset lastchild => var lastchild=$(this.children().last()[0];
  //convert data-block to value parseInt()
