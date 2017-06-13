'use strict';

var block = null;

$(document).ready(function() {

function checkForWin(){

  if($('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4){
    $('#announce-game-won').html('Winner Winner Chicken Dinner!');
  };
}
  var block = null;
  $('[data-stack]').click(function(){
    $('#announce-game-won').html('');
    if(block){

      var blockData = block.data('block');

      var $children = $(this).children();
      if($children.last().data('block') < blockData){
        $('#announce-game-won').text('Follow the rules! You cant move here!');
      }
      if (($children.length === 0) || $children.last().data('block') > blockData) {
        $(this).append(block);
        block = null;
      }
    }
    else{
      if($(this).children().length > 0){
        block = $(this).children().last().detach();

      }
      else{
        $('#announce-game-won').text('Doh! Remember to click on a stack that has blocks!');
      }
    }
    checkForWin();
  })
});
