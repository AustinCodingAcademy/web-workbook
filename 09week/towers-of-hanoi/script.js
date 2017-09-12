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
    // var $last = $(this).children().last().attr('data-block');
    var $blocks = $('[data-block]')
    var $ldb = $('[data-block]:last-child');
    $ldb.addClass("movable");
    var $ds = $('[data-stack]');
    //
    // var j = 3;
    // var k =2;
    // if (parseInt(j) > parseInt(k)) {
    //   console.log("j" + ' is greater');
    //   return true;
    // }else {
    //   console.log("k" + " is greater");
    //   return false;
    // }

    $('.datastack').click(function() {
      if ($(this).children().length === 0) {
        console.log("This stack is empty");
      } else {
        var $last = $(this).children().last().attr('data-block');

        console.log("the child is " + $last + " the value is: " + parseInt($last));
      }
    });

    $blocks.draggable({
      cursor: "move",
      revert: true,
    });




    $ds.droppable({
      tolerance: "intersect",
      accept: ".movable",
      activeClass: "ui-state-default",
      hoverClass: "ui-state-hover",
      drop: function(event, ui) {
        var $last = $(this).children().last().attr('data-block');
        var $2ndtolast = $(this).children().last().prev().attr('data-block');
        var y = ui.draggable.attr('data-block');


         if (parseInt(y) < parseInt($last) || $ldb.children().length === 0) {
          //  console.log(parseInt($last) + parseInt(y));


          $(ui.draggable).appendTo(this).attr('style', 'position: relative');
          $(this).append(ui.draggable.detach());
          $ldb.removeClass("movable");
          $ldb = null;
          $ldb = $('[data-block]:last-child');
          $ldb.addClass("movable");
          $last = null;
          y = null;
          var x = $(this).children().last().attr('data-block');
          console.log("moved block " + x + " to data stack " + ($(this).attr('data-stack')));

        } else { console.log('cannot drag');}




        // if($(ui, draggable).attr('[data-block]')) > parseInt(last){
        //     $(ui.draggable).draggable()
        // }
      }
    });

    function okToDrop() {

    }
    // var $lastDataBlockInStack = $ds.children().last();
    // var $thisBlock = $(this).children().last();
    //
    // if( parseInt($lastDataBlockInStack.attr('data-block')) < parseInt ($thisBlock.attr('data-block'))) {
    //   return true;
    //   console.log('was ok to drop');
    // }else {
    //   return false;
    //   console.log('was not ok to drop');
    // }

    // $('[data-stack="3"]').droppable({
    //
    //   tolerance: "intersect",
    //   accept: '[data-block]',
    //   activeClass: "ui-state-default",
    //   hoverClass: "ui-state-hover",
    //   drop: function(event, ui) {
    //     if ($(this).children().length < 1) {
    //       last = 105;
    //     } else {
    //       last = $(this).children().last().attr('data-block');
    //     }
    //
    //     $(ui.draggable).appendTo(this).attr('style', 'position: relative');
    //
    //
    //     if (last > x) {
    //       alert("ok");
    //     };
    //     console.log(last + x)
    //     console.log("moved block " + x + " to data stack " + ($(this).attr('data-stack')));
    //     last = 0;
    //
    //
    //     // if($(ui, draggable).attr('[data-block]')) > parseInt(last){
    //     //     $(ui.draggable).draggable()
    //     // }
    //   }
    // });
  });
});
