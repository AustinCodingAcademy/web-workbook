'use strict';

$(document).ready(function() {
  let $block = $('div');
  if  ($block) {
      $(this).append($blue)
      $block = null;
  }
  else {
    $block.click(function() {
        $(this).children().last().detach();
      })
    }


});
