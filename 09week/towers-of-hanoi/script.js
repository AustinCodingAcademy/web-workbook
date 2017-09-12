'use strict';

$(document).ready(function() {
  $(function() {
    var x = 0; 
    var $last = $(this).children().last().attr('data-block');
    var $blocks = $('[data-block]')
    var $ldb = $('[data-block]:last-child');
    $ldb.addClass("movable");
    var $ds = $('[data-stack]');


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


        if (parseInt(y) < parseInt($last) || $(this).children().length === 0) {
          console.log(parseInt($last), parseInt(y));


          $(ui.draggable).appendTo(this).attr('style', 'position: relative');
          $(this).append(ui.draggable.detach());
          $ldb.removeClass("movable");
          $ldb = null;
          $ldb = $('[data-block]:last-child');
          $ldb.addClass("movable");
          $last = $(this).children().last().attr('data-block');

          y = null;
          var x = $(this).children().last().attr('data-block');
          console.log("moved block " + $last + " to data stack " + ($(this).attr('data-stack')));

          if($('#ds3').children().length === 4){
            alert('You win!');
          }
        } else {
          console.log('cannot drag');
        }
      }
    });



  });
});
