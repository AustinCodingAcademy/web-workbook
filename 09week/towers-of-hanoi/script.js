'use strict';

$(document).ready(function() {
  var $block = null;
var x = [];
  $('[data-stack]').click(function() {
    if (!$block) {
      $block = $(this).children().last().detach();
    } else {
      $(this).append($block);
      $block = null;
    }

  });


  $('[data-stack]').click(function() {
    var i;
    x = $(this).children().attr("data-block");
    // for (i = 0; i < x.length; i++) {}
      console.log(x);

  });


});
