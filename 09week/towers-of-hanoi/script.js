'use strict';

$(document).ready(function() {

  var gameover = false;
  var $stacks = $('[data-stack]');
  var $blocks = $('[data-block]');

  var movable = $('[data-block]:last-child');
  $(movable).addClass("movable");
  $('[data-block]').removeClass("movable");
  $(movable).addClass("movable");
  $blocks.draggable({
    revert: true
  });

  // make blocks draggable
  $('.movable').draggable({
    revert: true
  });

  // blocks only droppable in stacks
  $('[data-stack]').droppable({
    // accept: ".movable",
    drop: function(event, ui) {
      var drag = $(ui.draggable).attr('data-block');
      var lastChild = $($(this).children().last[0]).attr('data-block');
      if (parseInt(drag) > parseInt(lastChild)) {
        $(ui.draggable).draggable.draggable('option', 'revert', true);
        checkVictory();
      } else {
        $(ui.draggable).appendTo(this).attr('style', 'position: relative');
      }
    }
  });

  function checkVictory() {
    if ($('[data-stack="3"]').children().length === 4) {
      alert("You've won!)");
      gameover = true;
    }
  }

  function resetGame() {
    $('[data-stack="1"]').html('<div data-block="100"></div><div data-block="75"></div><div data-block="50"></div><div data-block="25"></div>');
    $('[data-stack="2"]').empty();
    $('[data-stack="3"]').empty();
    $('#announce-game-won').empty();
    gameover = false;
  }

  // classwork
  // var movableBlocks = $('[data-block]:last-child');
  // movableBlocks.addClass("movable");
  //
  // $('[data-block]').draggable({
  //   revert: true
  // });
  // $('[data-stack]').droppable({
  //   // accept: ".movable",
  //   drop: function(event, ui) {
  //     var drag = $(ui.draggable).attr('data-block');
  //     var lastChild = $($(this).children().last[0]).attr('data-block');
  //     if (parseInt(drag) > parseInt(lastChild) ){
  //       $(ui.draggable).draggable('option', 'revert', true);
  //     } else {
  //       $(ui.draggable).appendTo(this).attr('style', 'position: relative');
  //     }
  //   }
  // });
});


// parseInt([data-block])
