'use strict';

$(document).ready(function() {

  var $myBlock = null;
  var firstMove = true;

  $("[data-stack]").click(
    function () {
        var $children = $(this).children();
        var $lastBlock = $children.last();
        if($myBlock == null ) {
          $myBlock = $lastBlock.detach ();
        }
        else {
          if ($lastBlock.data("block") < $myBlock.data("block")) {
            alert("Invalid Move")
        }
        else {

          $(this).append ($myBlock);
          $myBlock = null;
          firstMove = false;
        }
      }
      if(
          $("[data-stack='2']").children().length  >= 7  ||
          $("[data-stack='3']").children().length  >= 7
        )
      {
        alert("You Win");
      }
    }
  )
});



// Below is code I was experimenting with.

// var rings=[
// var pegA = [4,3,2,1],
// var pegB = [],
// var pegC = []
// ];
//
// var oldPosition = null, newPosition = null, flag = false;
//
// function move(peg) {
//   if (oldPosition === null) {
//           oldPosition = peg;
//   }
//   else {
//     newPosition = peg;
//     if (newPosition !== oldPosition){
//       var oldRing = rings[oldPosition].length;
//       if(rings[oldPosition[]])
//     }
//     alert("Invalid Move");
//     }
//   }
// }
