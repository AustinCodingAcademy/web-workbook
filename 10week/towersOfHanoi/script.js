$(document).ready(function() {

  let $block = null;

$('[data-stack]').click(function() {

  if (!$block) {
    $block = $(this).children().last().detach();
  } else {
    if (
      $(this).children().last() <
        $(this).children().last().data('block') ||
      $(this).children().length === 0
  ) {
      $(this).append($block);
      $block = null;
    }
  }









})










});
