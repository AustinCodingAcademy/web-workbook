'use strict';

let selectedBlock = null;

function test() {
  alert('you are here');
}

$(document).ready(function() {
  $(".reset").click(function() {
    reset();
  });

  $('li[data-stack]').click(function() {
    if (selectedBlock != null && selectedBlock.length > 0) {
      moveBlock($(this));

      if (checkWin()) {
        $('#announce-game-won').html('You Won!');
      }

      return;

    }
    selectedBlock = $(this).children().first().addClass('selected');

  });

  animate();


});

function moveBlock(newStack) {
  var newStackValue = newStack.children().first().attr('data-block');
  var currentStackValue = selectedBlock.attr('data-block');

  if (parseInt(currentStackValue) >= parseInt(newStackValue)) {
    selectedBlock.removeClass('selected');
    selectedBlock = null;
    return;
  }
  selectedBlock.removeClass('selected');
  selectedBlock.prependTo(newStack);
  $('.counter').html(function(i, val) {
    return +val+1 });
  selectedBlock = null;
}

function checkWin() {
  return $('li[data-stack="3"]').children().length === 4;
}

function reset() {
  $('div[data-block]').remove();
  $('#announce-game-won').html('');
  $('li[data-stack="1"]').html('<div data-block="25"></div><div data-block="50"></div><div data-block="75"></div><div data-block="100"></div>');
  $('.counter').html('0');

  selectedBlock = null;
}


function animate() {
  $('.rule').click(function() {
    document.querySelector('blockquote').classList.toggle('animate');
    setTimeout(animate, 1000);
  });
}
