'use strict';

$(document).ready(function() {
  var maxStack = 4;
  var $block = null;

  function checkForWin() {
   return ( $("[data-stack='2']").children().length >= maxStack )
   || ( $("[data-stack='3']").children().length >= maxStack ) ;
  }

$("[data-stack]").click(
  function() {
    var $children = $(this).children();
    var $lastBlock = $children.last();
    if ($block === null) {
      $block = $lastBlock.detach();
    }
    else {
      if ($lastBlock.data('block') <= $block.data('block')) {
        alert("Invalid move!")
      }
      else {
        $(this).append($block);
        $block = null;
      }
    }
    if (checkForWin()){
     $("announce-game-won").text("You won!");
     alert("You won!");
    }

  }
)
});
