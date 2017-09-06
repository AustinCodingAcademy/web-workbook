'use strict';

$(document).ready(function() {
  // Put app logic here
  $( function() {

   $("[data-block]").draggable({
     revert: "invalid"
   });

   $('[data-stack]').droppable({
     drop: function(event, ui){
       var last = $(this).children().last([0]);
      $(ui.draggable).appendTo(this).attr('style','position: relative');
      if($(ui,draggable).attr('[data-block]')) > parseInt(last){
          $(ui.draggable).draggable()
      }
     }
   });




} );

});
