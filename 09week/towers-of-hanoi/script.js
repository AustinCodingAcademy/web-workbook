'use strict';
//
// $(document).ready(function() {
//   // Put app logic here
//
//    $( function() {
//     $( "[data-block]" ).draggable();
//   } );
//
//   //  $('[data-stack]').droppable({
//   //    drop: function(event, ui){
//   //      var last = $(this).children().last([0]);
//   //     $(ui.draggable).appendTo(this).attr('style','position: relative');

$(document).ready(function() {
  $(function() {
    var x = 0; //dragged data-block reference
    var lastChild = null; //last data-block in stack

    $('[data-stack]').click( function(){
      lastChild = $(this).children().last().attr('data-block')
    });

    $('[data-block]').draggable({
      appendTo: "body",
      cursor: "move",
      revert: "invalid",
      drag:function(event, ui){
        x = $(this).attr('data-block');

      }

    });

    $('[data-stack]').droppable({

      tolerance: "intersect",
      accept: '[data-block]',
      activeClass: "ui-state-default",
      hoverClass: "ui-state-hover",
      drop: function(event, ui) {
        $(ui.draggable).appendTo(this).attr('style', 'position: relative');
        // var lastChild = $(this).children().last([0]).attr('[data-block]');
        // alert(lastChild);
        console.log("moved block " + x + " to data stack " + ($(this).attr('data-stack')));
        }
      // if($(ui, draggable).attr('[data-block]')) > parseInt(last){
      //     $(ui.draggable).draggable()
      // }
    });
  });
});
