'use strict';

$(document).ready(function() {
  var $block = null;

  $('[data-block]').draggable({
      revert:"invalid"
    });
      $('[data-stack]').droppable({
        drop: function(event,ui) {
          var drag = $(ui.draggable).attr('data-block');
          accept: 'data-block'
          var last = $(this).children().last().attr('data-block');

          console.log(parseInt(last,10));
          console.log(parseInt(drag,10));

          if(parseInt(drag)>parseInt(last)){
          $(ui.draggable).draggable('option','revert',true);
        }else{
          $(ui.draggable).detach().css({top: 0, left: 0}).appendTo(this);
     }
   }
  });

        //   var colors = ['#ff0000', '#00ff00', '#0000ff'];
        // var random_color = colors[Math.floor(Math.random() * colors.length)];
        // document.getElementById('title').style.color = random_color;
        // $('#title').css('color', random_color);

      var stackThree = $('[data-stack="3"]').children().length;
      if(stackThree === 4) {
        alert("You Win");
    };
  });
