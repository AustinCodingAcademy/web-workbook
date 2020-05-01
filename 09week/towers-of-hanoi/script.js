'use strict';
//what do we know
//move one at a time
//cant put lager blocks on smaller ones
//to win move all blocks to last column
//3+ columns
//starts with 3 blocks
//every level goes up one block
//blocks should be movable to any column
//

$(document).ready(function() {
  // Put app logic here
    let $block = null;
    let $blockSize = null;

    
    $('[data-stack]').click(function(){
      console.log('$block =', $block)
      if ($block){
        var $currentBlockInRow = $(this).children.last
        console.log("currentBlockInRow", $currentBlockInRow)
        if($blockSize > $currentBlockInRow){}
        // appends block to row
        $(this).append($block);
        //set $block as null so you can start again
        $block = null;
      }else {
        //grabs last child block and detaches but saves
        $block = $(this).children().last().detach();

        // retrieve value of atribute
        console.log('$block.attr().val():', $block.attr('data-block'))
        var $blockSize = parseInt($block.attr('data-block'))
        console.log('$blockSize: ', $blockSize)
        //convert string to number

      }
    })
  
    /*$( '[data-block]' ).draggable();
    $( '[data-block]' ).droppable({
      over: function (){
        $(this).css('background-color', 'pink')
      },
      out: function (){
        $(this).css('background-color', 'aliceblue')
      },
      drop: function (){
        alert( "dropped" );
      }
      });*/

    
    
    
  });