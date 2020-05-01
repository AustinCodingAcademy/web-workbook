'use strict';

$(document).ready(function() {
  let $block = null;
  let moves = 0;
  console.log($("[data-stack=1]"))
  $('[data-stack]').click(function() {
    let rowCondition = parseInt($(this).children().last().attr('data-block'),10)
   
    if (($block && (parseInt($block.attr('data-block'),10) < rowCondition)) || (!rowCondition)) {
      $(this).append($block);
      $block = null;
      moves++
      $('.counter').text('Moves: ' + moves)
    } else if($block ===null){
      $block = $(this).children().last().detach();
    }
    winCondition($(this))
  })
  function winCondition(row){
    console.log(row.children().length)
    if ((row.attr('data-stack')==3) && row.children().length === 4){
      $('#announce-game-won').text("You've won with " + moves + " moves! \n Click to reset")
    }
  }
  $('#announce-game-won').click(function(){
    reset()
  })
  function reset(){
    let k=$("[data-stack=3]").children().detach()
    $("[data-stack=1]").append(k)
    moves = 0
    $('.counter').text('Moves: ' + moves)
    $('#announce-game-won').text("")
  }
});
