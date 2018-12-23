'use strict';

$(document).ready(function () {
  let block = null;
  let oldvalue = null;


  $('[data-stack]').click(function () {
    let currentValue = $(this).children().last().width();

    if (block && (currentValue > oldvalue || currentValue === undefined)) {
      $(this).append(block);
      block = null;
      checkWin();
    } else if (block == null) {
      oldvalue = $(this).children().last().width();
      block = $(this).children().last().detach();

    }
    console.log($('#stack3').children().length)
    
  })

  function checkWin() {
    if ($('#stack3').children().length == 4){
      $('#announce-game-won').text('YOU WON');
    }
  }

});