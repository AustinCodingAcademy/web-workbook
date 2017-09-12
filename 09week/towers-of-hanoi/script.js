'use strict';
    $(document).ready(function() {
      var $block = null;
// On Click!!
      $("[data-stack]").click(function(){
        var $children = $(this).children();
        var $lastChild = $children.last();

        if ($block == null) {
          $block = $lastChild.detach();
        } else {
          if ( $lastChild.data("block") < $block.data("block")) {
// Invalid Move!!
            alert("Invalid Move");
          } else {
            $(this).append($block);
            $block = null;
          }
    }
    // Chicken Dinner!!
    if ( $("[data-stack='3']").children().length >= 4 )
    {
      alert("Winner, Winner, Chicken Dinner!!");
    }
  });
});

//
// if ($block) {
//   $(this).append($block) {
//     if ('data-stack').children().last().height(<$this)
//   }
// }
