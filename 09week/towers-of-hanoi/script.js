'use strict';

$(document).ready(function() {
  let $block = null;
  let heightVar = $('[data-stack]').height;
  $('[data-stack]').click(function() {
    if ($block) {
      $(this).append($block);
      $block = null;
    } else if ($(this).height() > heightVar) {
    alert("Not Allowed");
    } else {
      $block = $(this).children().last().detach();
    }
    // click counter
    // function countClicks() {
  	// 	clicks++;
  	// 	$clicksCount.html(clicks);
  })
  // testing console.logs
  // console.log($('[data-block]').height());
  // console.log($(this).height());
  // console.log("heightVar");
});
