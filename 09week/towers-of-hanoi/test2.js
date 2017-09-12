'use strict';
/*Ready?*/
$(document).ready(function() {
  // Put app logic here
var $block = null;
// Target a block
  $("[data-block]").click(function(){
    var $stackNum = $(this).parent();
    var $stackChild = $stackNum.children();
    var $stackLast = $stackChild.last();
    if ($(this).data("block") > $stackLast.data("block")) {
      alert("Invalid Move");
    }
    // call function to clear css after 1000ms
  })
// Target the last child of a stack
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
    $(this).append($block);
    $block = null;
    alert("You Win!!");
  }
  });
  $("button").click(function(){
    $("[data-stack='3']").empty();
    $("[data-stack='2']").empty();
    $("[data-stack='1']").empty();
    $("[data-stack='1']").html("<div data-block='100' class='100'></div><div data-block='75' class='100'></div></div><div data-block='50' class='100'></div></div><div data-block='25' class='100'></div>");
  });
});
