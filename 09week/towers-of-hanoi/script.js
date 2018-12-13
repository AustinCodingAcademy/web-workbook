'use strict';

$(document).ready(function () {

  var $block = null;
  $('[data-stack]').click(function () {
    if ($block && ($block.data("block") < $(this).children().last().data("block") || $(this).children().last().data() == undefined)) {
      $(this).append($block);
      $block = null;
    } else if ($block && ($block.data("block") > $(this).children().last().data("block"))) {
      return;
    } else {
      $block = $(this).children().last().detach();
    }
  });

});
