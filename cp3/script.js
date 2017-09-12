'use strict';
/*Ready?*/
$(document).ready(function() {
  // Put app logic here
var $block = null;
/*Target the last child of a stack*/
  $("[data-stack]").click(function(){
    var $children = $(this).children();
    var $lastChild = $children.last();
/*Detach the last child and append it to an empty stack or one with a bigger block than the one you've detached*/
    if ($block == null) {
      $block = $lastChild.detach();
    } else {
      if ( $lastChild.data("block") < $block.data("block")) {
        alert("Invalid Move");
      } else {
        $(this).append($block);
        $block = null;
      }
    }
    /*You win if either of the last 2 stacks have all four blocks*/
    if ( $("[data-stack='2']").children().length >= 4 || $("[data-stack='3']").children().length >= 4 )
  {
    alert("You Win!!");
  }
  });
});
