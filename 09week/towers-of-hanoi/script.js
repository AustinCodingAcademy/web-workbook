'use strict';
    $(document).ready(function() {
      var $block = null;
      var $turns = 0;
      var $tracker = $("#tracker")
      var $reset = $("#reset")
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
            $turns++;
            $tracker.text($turns);
          } else {
            $(this).append($block);
            $block = null;
            $turns++;
            $tracker.text($turns);
          }
    }
    // Chicken Dinner!!
    if ( $("[data-stack='3']").children().length >= 4 )
    {
      alert("Winner, Winner, Chicken Dinner!!");
    }
  });
  // Reset Button!
    $reset.click(function(){
      location.reload();
  });
});
