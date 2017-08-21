'use strict';

//hide the reset button
window.onload = function() {
 $("#resetGame").hide();
}

function dragBlock(e) {

  var blockValue = $(e.target).data("block")
  //data("block") data-block

  e.dataTransfer.setData("block", blockValue);
  // console.log("I am being dragged");
  console.log("block Value:" + blockValue);
}

function allowDrop(e) {
  e.preventDefault();
}

function dropBlock(e) {
  e.preventDefault();
  var blockValue = e.dataTransfer.getData("block");
  var $stack = $(e.target);
  var $block = $("[data-block=" + blockValue + "]")

  //when the stack empty we append and count the move
  if ($stack.children().length === 0) {
    $stack.append($block);
    $("#count").text(++moves);
    // console.log("Drop empty");
  }
  //when the stack already has blocks, the dropped block needs to be smaller
  else {
    //get the value of the top block
    var children = $stack.children(); //this is an array
    var length = $stack.children().length;
    var topChild = children[length - 1] //children[length -1]
    var topChildBlockValue = $(topChild).data("block");
    // console.log(topChildBlockValue);

    //compare it with the block that is being dropped.  If smaller, drop and increase move count

    if (blockValue < topChildBlockValue) {
      $stack.append($block);
      $("#count").text(++moves);
      // console.log("Dropped on top of something");
    }
  }
  toggleDragAttribute();

  //Only move the top block per stack
  function toggleDragAttribute() {
    //This is for each stack 1, 2, 3
    for (var e = 1; e < 4; e++) {
      var children = $("[data-stack=" + e + "]").children();
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        $(child).removeAttr("draggable"); //remove attribute

      }
      //put back the draggable to the top child
      $(children[children.length - 1]).attr("draggable", "true"); //last child - get through length minus one
    }
    // function checkForWin() {
    //   if ($('[data-stack="3"]').children().length === 4) {
    //     $('#announce-game-won').html("You Won!");
    //     }
    // }
    //call function to check for win
    checkForWin();
  }
}
