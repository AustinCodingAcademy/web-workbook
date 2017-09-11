'use strict';


$(document).ready(function() {
  $(function(){

    // Defining vars

    var $stacks = $('[data-stack]');
    var $detached = {};
    var gameover = false;

    $stacks.click(move);

    function move() {
      if (gameover === false) {
        if ($.isEmptyObject($detached)) {
          // if current stack is not empty, detach the last-child of current stack
          if(!($(this).children().length ===0) ) {
            $detached=$(this).children().last().detach();
          }
        }
        else {
          if (dropDetached($(this), $detached)) {
            $detached = {};
          }
        }
        checkForWin();
      }
      else {
        resetGame();
      }
    }

    function dropDetached($stack, $detached) {
      //if droppable, drop detached
      //if not, do nothing, return
      if (droppable($stack, $detached)) {
        $stack.append($detached);
        return true;
      }
      else {
        return false;
      }
    }
    // ONLY CAN DROP WHEN DATACHED DATA BLOCK IS LESS THAN THE LAST
    function droppable($stack, $detached) {
      var $last_block = $stack.children().last();
      if( parseInt($detached.attr("data-block"))<parseInt($last_block.attr("data-block")) || $stack.children().length===0) {
        return true;
      }
      else {
        return false;
      }
    }
    // WIN CHECKER
    function checkForWin() {
      if($('[data-stack="3"]').children().length===4) {
        $('#announce-game-won').html("WINNER WINNER CHICKEN DINNER!");
        gameover=true;

      }
    }
    // RESET FUNCTION
    function resetGame() {
      $('[data-stack="1"]').html('<div data-block="100"></div><div data-block="75"></div><div data-block="50"></div><div data-block="25"></div>');
      $('[data-stack="2"]').empty();
      $('[data-stack="3"]').empty();
      $('#announce-game-won').empty();
      $detached = {};
      gameover = false;
    }

  });
})


// var lastChild = $(this).children().last()[0];
// parseInt

// $( "[data-block]" ).draggable({
//   revert: "invalid"
// });
//
// $( "[data-stack]" ).droppable({
//   drop: function(event, ui){
//
//     var last = $(this).children().last() [0].attr('data-block');
//     var drag = $(ui.draggable).attr(['data-block']
//
//    if(parseInt(drag) > parseInt(last) ) {
//      $(ui.dragable).draggable('option', 'revert', true);
//    }else { $(ui.draggable).appendTo(this).attr('style', 'position: relative');
//    }
//   }
// });
