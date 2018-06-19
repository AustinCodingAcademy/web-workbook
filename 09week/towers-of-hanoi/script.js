'use strict';

$(document).ready(function () {
  // Put app logic here 
  //variable assignment for storing values of bars at different points.  
  let $block = null;
  //refers to last block in stack div element
  let $lastBlock;
  //captures block size upon detach
  let $blockSize;
  //event handler for moving bars between 'block-stack' containers
  $('[data-stack]').click(function (event) {
    //capture and store last block in div upon click 
    let lastblockindiv = $(this).children().last().data('block');    
    if ($block) {
      if ((lastblockindiv == null) || ($blockSize < lastblockindiv)) {        
        //we want to append.      
      } else {
        alert('Block can not be placed here, try again!');
        $(this).preventDefault(); //this seems to work as needed but getting a TypeError in console staying preventDefault is not a function.
      }  
        $(this).append($block);
        $block = null;
        $blockSize = null;       
    } else if ($(this).children().length > 0) {
      $blockSize = $(this).children().last().data('block');
      $block = $(this).children().last().detach();
      $lastBlock = null;
    }    
  })
})


