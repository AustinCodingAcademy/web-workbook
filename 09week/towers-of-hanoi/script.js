'use strict';

$(document).ready(function() {
  let $block = null;

    //$('[data-stack]').click(function() {
    //if ($block) {
      //$(this).append($block);
     // $block = null;
    //} else {
      //$block = $(this).children().last().detach();
      //$block.getAttribute('data-block').value
    //}

    $( '[data-block]' ).draggable();
    $( '[data-stack]' ).droppable({
      over: function () {
        $(this).css('background-color', 'pink')
      },
      out: function() {
        $(this).css('background-color', 'aliceblue')
      },
    drop: function() {
    alert( "dropped" );
    }
    )};

//What we know
//Move one piece at a time
//can't put larger blocks on top of small blocks
//to win must move same order to other end of box
//3+columns
//every level goes up by one block
//blocks should be moveable to any column