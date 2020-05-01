'use strict';

$(document).ready(function() {
  let $block = null;
  let $pickUp= null;
  let $dropOff= null;
// this picks up the block number
  $('[data-stack]').click(function() {
    if ($block) {
      $dropOff=$(this).children().last().data("block");
      console.log("I am dropping this here " + $dropOff);
    } else {
      $pickUp= $(this).children().last().data("block");
      console.log($pickUp);
    }
    // this prevents moves that aren't allowed and actually moves the blocks
    if ((($block) && ($pickUp < $dropOff)) || (($block) && ($dropOff === undefined))) {
      $(this).append($block);
      $block = null;
    } else if ($block === null) {
      $block = $(this).children().last().detach();
    } else {
      alert("You can't put that here. Try again.");
    }
    setTimeout(checkWin, 300);
  })
  function checkWin() {
    if ($('[data-stack=3]').children().length === 4) {
      alert("You win!");
    }
  }
});
