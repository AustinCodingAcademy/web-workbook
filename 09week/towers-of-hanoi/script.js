'use strict';

$(document).ready(function() {
  // Put app logic here
  // 1. make draggable and droppable DONE
  // 2. rules: no big blocks on top of small ones DONE
  // 3. rules: revert if condition not met (false) DONE
  //  how do I prevent picking up 'illegal' blocks?
  //  - Can only pick the last block on the stack PENDING
  //  + need to know which drop area you're dropping in,
  // which item you're clicking,
  // which items is already in drop area
  // 4. clear the Board DONE
  // 5. win condition (all have been moved to last area) DONE
  // 6. BONUS: keep count of how many moves PENDING
  $('.draggable').draggable({
    revert: 'invalid'
});
  $('#drop1, #drop2, #drop3').droppable({
    drop: function(event, ui) {
      // whatever i'm 'holding,' compare to last child in the stack
      //  ui is whatever is being passed into this function
      let $dragging = $(ui.draggable).data('block');
      // looks for "data-block"
      // this function makes whichever block you're 'holding' the current variable
      console.log($dragging);
      // let $last = ($(this).children('div:last').data('block'));
// OR MAYBE
      let $last = ($(this).children().last().data('block'));
      console.log($last);
      // this = which stack I'm dropping on, its children, its last child and
      // the last child's value
      // need which stack I'm dropping on AND whether there's a block there or not
      if($dragging > $last){
          (ui.draggable).draggable('option', 'revert', true);
      }else{
        $(ui.draggable).appendTo($(this)).attr('style', 'position: relative');
      }
      checkWin();
    }
  });
  // FROM CODEPEN:
  //   let $block = null;
  //    $('[data-block]').click(function() {
  //    if ($block) {
  //      $(this).append($block);
  //      $block = null;
  //    } else {
  //      $block = $(this).children().last().detach();
  //    }

  // MY CODE:
// let $block = ???;
  $('[data-block]').ui.draggable(function(){
    if ($block) {
      $(this).append($block);
      // block = ???;
    } else {
      $block = $(this).children().last().detach();
      // why .detach()? what does it do?
    }
  })

  function checkWin(){
    if($('[data-stack=3]').children().length === 4){
      $('#announce-game-won').text('You Won!');
    }
  }
  $('#clear').click(function(){
    $('#announce-game-won').empty();
    location.reload();
  });
//
});
