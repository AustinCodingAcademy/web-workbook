'use strict';
// Reset function
function reset(){
  $("[data-stack='3']").empty();
  $("[data-stack='2']").empty();
  $("[data-stack='1']").empty();
  $("[data-stack='1']").html("<div data-block='100' class='100'></div><div data-block='75' class='100'></div></div><div data-block='50' class='100'></div></div><div data-block='25' class='100'></div>");
};
// Checks to see if game is won
function checkWin(){
  if ($("[data-stack='3']").children().length >= 4 ){
    alert("You Win!! Game will reset.");
    reset();
    return;
  }
};
$(document).ready(function() {
// $block serves to be block selected
var $block = null;
// Target a block
  $("[data-stack]").click(function(){
    var $lastChild = $(this).children().last();
    if (!$block && $lastChild) {
      $block = $lastChild.detach();
    }else if ($block && !$lastChild) {
      $(this).append($block);
      $block = null;
    }else if ($block && $lastChild) {
      if ($lastChild.data("block") < $block.data("block")) {
        alert("Invalid Move");
      }else {
        $(this).append($block);
        $block = null;
      }
    }
    checkWin();
  });
// Reset button
  $("button").click(function(){
    reset();
  });
});
