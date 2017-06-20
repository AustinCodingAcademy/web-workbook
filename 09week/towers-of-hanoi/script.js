'use strict';

$(document).ready(function() {
  // Put app logic here
var $block = null;

  $("[data-stack]").click(function(){
    var $children = $(this).children();
    var $lastChild = $children.last();

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
    if ( $("[data-stack='2']").children().length >= 4 || $("[data-stack='3']").children().length >= 4 )
  {
    alert("You Win!!");
  }
  });
});
