'use strict';

$(document).ready(function() {
  // Put app logic here
  var $block = null;

   $('[data-stack]').click(function() {
     if (!$block) {
       $block = $(this).children().last().detach();
     } else {
       $(this).append($block);
       $block = null;
     }
   })

});


// var lastChild = $(this).children().last()[0];
// parseInt

// $( "[data-block]" ).draggable({
//   revert: "invalid"
// });
//
// $( "[data-stack]" ).droppable({
//   drop: function(event, ui){
//
//     var last = $(this).children().last() [0].attr('data-block');
//     var drag = $(ui.draggable).attr(['data-block']
//
//    if(parseInt(drag) > parseInt(last) ) {
//      $(ui.dragable).draggable('option', 'revert', true);
//    }else { $(ui.draggable).appendTo(this).attr('style', 'position: relative');
//    }
//   }
// });
