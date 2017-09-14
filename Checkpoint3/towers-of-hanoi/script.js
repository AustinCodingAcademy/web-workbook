'use strict';

$(document).ready(function() {
  var $block = null;

  $('[data-block]').draggable({
      revert:"invalid"
    });
      $('[data-stack]').droppable({
        drop: function(event,ui) {
          var drag = $(ui.draggable).attr('data-block');
          accept: 'data-block'
          var last = $(this).children().last().attr('data-block');

          console.log(parseInt(last,10));
          console.log(parseInt(drag,10));

          if(parseInt(drag)>parseInt(last)){
          $(ui.draggable).draggable('option','revert',true);
        }else{
          $(ui.draggable).detach().css({top: 0, left: 0}).appendTo(this);
        }
      }
    });

    // $(`[data-cell="3"]`)function(){
    //   if($(this).text() === ''){
    //     if (stackThree === 4){
    //     alert("You Win");
    //       turnCount++;
  //     }
  //   })
  //       // function (){
  //       // var stackThree = $('[data-stack="3"]').children().length;
  //       // if(stackThree === 4) {
  //       // alert("You Win");
  //   }
  // });

      var stackThree = $('[data-stack="3"]').children().length;
      if(stackThree === 4) {
        else {
        }
        alert("You Win");
    };


    // function goodToDrop($stack, $block) {
    //     var $last_block = $stack.children().last();
    //     if (parseInt($block.attr('[data-block]')) < parseInt($last_block.attr('[data-block]')) || $stack.children().length === 0) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   }
  //   function resetGame() {
  //   $('[data-stack="3"]').html('<div data-block="100"></div><div data-block="75"></div><div data-block="50"></div><div data-block="25"></div>');
  //   $('[data-stack="1"]').empty();
  //   $('[data-stack="2"]').empty();
  //   $('#announce-game-won').empty();
  //   gameover = false;
  // }
  //
  // });
