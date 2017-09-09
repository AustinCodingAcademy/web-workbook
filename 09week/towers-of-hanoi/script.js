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
//   //
//   //     $(ui.draggable).appendTo(this).attr('style','position: relative');

$(document).ready(function() {
  $(function() {
    var x = 0; //dragged data-block reference
    var last = 0; //last data-block in stack

    // $('[data-stack]').click(function(){
    //
    // var last = $(this).children().last().attr('data-block');
    //   console.log(last);
    // }
    // );

    $('[data-block]').draggable({
      appendTo: "body",
      cursor: "move",
      revert: "invalid",
      drag: function(event, ui) {
        x = $(this).attr('data-block');
        var last = 0;

      }

    });

    $('[data-stack="2"]').droppable({

      tolerance: "intersect",
      accept: '[data-block]',
      activeClass: "ui-state-default",
      hoverClass: "ui-state-hover",
      drop: function(event, ui) {

        if ($(this).children().length < 1) {
          last = 105;
        } else {
          last = $(this).children().last().attr('data-block');
        }

        $(ui.draggable).appendTo(this).attr('style', 'position: relative');

        if (last > x) {
          alert("ok");
        };
        console.log(last + x);
        console.log("moved block " + x + " to data stack " + ($(this).attr('data-stack')));

        last = 0;



        // if($(ui, draggable).attr('[data-block]')) > parseInt(last){
        //     $(ui.draggable).draggable()
        // }
      }
    });

    $('[data-stack="3"]').droppable({

      tolerance: "intersect",
      accept: '[data-block]',
      activeClass: "ui-state-default",
      hoverClass: "ui-state-hover",
      drop: function(event, ui) {
        if ($(this).children().length < 1) {
          last = 105;
        } else {
          last = $(this).children().last().attr('data-block');
        }

        $(ui.draggable).appendTo(this).attr('style', 'position: relative');


        if (last > x) {
          alert("ok");
        };
        console.log(last + x)
        console.log("moved block " + x + " to data stack " + ($(this).attr('data-stack')));
        last = 0;


        // if($(ui, draggable).attr('[data-block]')) > parseInt(last){
        //     $(ui.draggable).draggable()
        // }
      }
    });
  });
});
