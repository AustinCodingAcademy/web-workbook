'use strict';

$(document).ready(function() {
  // Put app logic here
  var $block = null;

  $("[data-stack]").click(function(){
  var $thisBlock = $(this).children();
  var $lastBlock = $thisBlock.last();
/*Detach the last child and append it to an empty stack or one with a bigger block than the one you've detached*/
  if ($block == null) {
    $block = $lastBlock.detach();
  } else {
    if ($lastBlock.data("block") < $block.data("block")) {
      alert("Invalid Move");
    } else {
      $(this).append($block);
      $block = null;
    }
  }
  /*You win if either of the last 2 stacks have all four blocks*/
  if ($("[data-stack='3']").children().length >= 4)
{
  alert("You Win!!");
}
});



  // $('[data-stack]').click(function() {
  //     if ($block) {
  //       $(this).append($block);
  //       $block = null;
  //     } else {
  //       $block = $(this).children().last().detach();
  //     }
  //   })

  // $('[data-stack]').on('click', function() {
  //     if ($block) {
  //       $block = $(this).children().last().detach();
  //     } else {
  //       $(this).append($block);
  //       block = null;
  //     }
  //   })

  // function gameRule() {
  //
  //   if $('$block').children().last < $(event.currentTarget).children().last().detach();
  // } else {
  //   block = null
  // }
  // }


});
