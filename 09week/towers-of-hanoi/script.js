'use strict';

$(document).ready(function() {
  // Put app logic here

  // $('[data-block]').draggable({
  //   revert: "invalid"
  // });
  // $('[data-stack]').droppable({
  //   drop:function(event,ui){
  //     $(ui.draggable).appendTo(this).attr('style', 'position: "relative"');
  //   }
  // });

  let $current = null;
  $('[data-stack]').click(function() {



    if ($current === null && $(this).children().length > 0) {
      $current = $(this).children().last().detach();
      let $currentStack=$(this).data('stack');
    }else if($(this).children().length > 0){
      if($(this).children().last().data('block') < ($current.data('block'))){
        $current = null;
        // checkIfPlayerWon();
      }

      else if($(this).children().last().data('block') > ($current.data('block'))){
        $(this).append($current);
        $current = null;
        // checkIfPlayerWon();
      }
    }

    else if ($(this).children().length === 0) {
      $current.appendTo($(this));
      $current = null;
      // checkIfPlayerWon();
    }
    checkIfPlayerWon();


  })
  function checkIfPlayerWon(){
    if ($('[data-stack="3"]').children().length === 4){
      alert('Winner Winner Chicken Dinner');
    }
  };






});
