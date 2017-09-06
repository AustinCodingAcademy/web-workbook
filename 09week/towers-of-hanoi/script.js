'use strict';

$(document).ready(function() {
  // Put app logic here

     $( "[data-block]" ).draggable({
       revert: "invalid"
     });

     $( "[data-stack]" ).droppable({
       drop: function(event, ui){

         var last = $(this).children().last() [0].attr('data-block');
         var drag = $(ui.draggable).attr(['data-block']

        if(parseInt(drag) > parseInt(last) ) {
          $(ui.dragable).draggable('option', 'revert', true);
        }else { $(ui.draggable).appendTo(this).attr('style', 'position: relative');
        }
       }
     });
});


// var lastChild = $(this).children().last()[0];
// parseInt
