'use strict';

$(document).ready(function() {
  // Put app logic here

  // var $block = null;
  // $('[data-stack]').click(function(){
  // if (!$block) {
  //   $block = $(this).children().last().detach();
  // } else {
  //   $(this).append($block);
  //   $block = null;
  // }
  // });
  let $playerMove = null;
  let currentStack;
let moveCounter = 0;
  $('[data-stack]').click(function(){
    if ($playerMove === null && $(this).children().length > 0) {
      $playerMove = $(this).children().last().detach();
    } else if (($(this).children().length >0)){
      if (($(this).children().last().data('block'))<($playerMove.data('block'))){
        $playerMove.appendTo($('[data-stack]').eq(currentStack - 1));
      } else if (($(this).children().last().data('block')) > ($playerMove.data('block'))){
        $(this).append($playerMove);
        $playerMove = null;

      }
    } else if ($(this).children().length === 0) {
      $playerMove.appendTo($(this));
      $playerMove = null;
    }
    checkForWin();
});
function checkForWin() {
  if ($('[data-stack="3"]').children().length === 4) {
    $('#announce-game-won').text('You Won!');
  }
}
});
