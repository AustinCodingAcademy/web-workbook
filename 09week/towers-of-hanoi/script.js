'use strict';

$(document).ready(function() {
      // Put app logic here
      // var stacks = $('[data-stack]');
      // var blocks = $('[data-block]');

      $('[data-block]').draggable({
        revert: 'invalid'
      });

      $('[data-stack]').droppable({
        drop: function(event, ui){
          var drag = $(ui.draggable).attr('data-block');
          var last = $($(this).children().last()).attr('data-block');
          if(parseLint(drag) > parseInt(last) ){
            $(ui.draggable).draggable('option', 'revert', true);
          // if(parseInt($(ui.draggable).attr(['data-block']) > parseInt(last) )){
          } else {
              $(ui.draggable).appendTo(this).attr('style', 'position: relative');
            }
        }
      });

      });






      //   $('.data-block').draggable({
      //       revert: 'invalid'
      //     });
      //
      // }
      //
      // $('#dropArea').droppable( {
      // drop:function(event, ui)  {
      //     $(ui.draggable).appendTo9(this).attr('style', 'position:relative');
      //   }
      // });
