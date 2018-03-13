'use strict';

$(document).ready(function() {
  // Put app logic here
  var $block = null;

  $('[data-stack]').click(function() {
    if ($block) {
      $(this).append($block);
      $block = null;
    } else {
      $block =
  $(this).children().last().detach();
    }
  })

  // function gameRule() {
  //   if $('[data-block="25"]') < $('[data-block="50"]') <  $('[data-block="75"]') < $('[data-block="100"]')
  //     return false;
  //   }
  // }


});
