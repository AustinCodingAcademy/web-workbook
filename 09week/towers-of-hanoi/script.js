'use strict';

$(document).ready(function () {
  let block = null;
  let oldvalue = null;


  $('[data-stack]').click(function () {
    let currentValue = $(this).children().last().width();

    if (block && (currentValue > oldvalue || currentValue === undefined)) {
      $(this).append(block);
      block = null;
    } else if (block == null){
      oldvalue = $(this).children().last().width();
      block = $(this).children().last().detach();

    }
    console.log(currentValue)
  })
});