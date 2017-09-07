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

//   //    }
//   //  });
//
//
//
//
// };
//
// });


$(document).ready(function(){
  var lastChild = null;

  console.log('ready');
  $(function() {
    console.log("function");

    $('[data-block]').draggable({
      appendTo:"body",
      cursor:"move",
      revert:"invalid"
    });

    $('#ds1').droppable({

      tolerance:"intersect",
      accept:'[data-block]',
      activeClass:"ui-state-default",
      hoverClass:"ui-state-hover",
      drop:function(event, ui){
        var last = $(this).children().last([0]);
        console.log(#ds1.attributes);

      $(ui.draggable).appendTo(this).attr('style','position: relative');
    }
    // if($(ui, draggable).attr('[data-block]')) > parseInt(last){
    //     $(ui.draggable).draggable()
    // }
    });

    $('#ds2').droppable({
      tolerance:"intersect",
      accept:'[data-block]',
      activeClass:"ui-state-default",
      hoverClass:"ui-state-hover",
      drop:function(event, ui){
      $(ui.draggable).appendTo(this).attr('style','position: relative');
    }
  });

    $('#ds3').droppable({
      tolerance:"intersect",
      accept:'[data-block]',
      activeClass:"ui-state-default",
      hoverClass:"ui-state-hover",
      drop:function(event, ui){
      $(ui.draggable).appendTo(this).attr('style','position: relative');
    }
    });







  });
});
