
//>>LIST OF STEPS ON BOTTOM OF PAGE//
'use strict';

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
  var $moves = $("[moves]")

  //when the stack empty we append
  if ($stack.children().length === 0) {
        $stack.append($block);
        console.log("Drop empty");
  }
  //when the stack already has blocks, the dropped block needs to be smaller
  else {
    //get the value of the top block
    var children = $stack.children(); //this is an array
    var length = $stack.children().length;
    var topChild = children[length - 1] //children[length -1]
    var topChildBlockValue = $(topChild).data("block");
    // console.log(topChildBlockValue);

    //compare it with the block that is being dropped
    if (blockValue < topChildBlockValue) {
      $stack.append($block);
      console.log("Dropped on top of something");
    }
  }
    toggleDragAttribute();
}
  //Only move the top block per stack
  function toggleDragAttribute() {
    //This is for each stack 1, 2, 3
    for (var e = 1; e < 4; e++) {
      var children = $("[data-stack=" + e + "]").children();
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        $(child).removeAttr("draggable"); //remove attribute
        console.log("child: " + child);
      }
      //put back the draggable to the top child
      $(children[children.length - 1]).attr("draggable", "true"); //last child - get through length minus one

      }

      function checkForWin() {
        if ($('[data-stack="3"]').children().length === 4) {
          $('#announce-game-won').html("You Won!");
          }
      }
      checkForWin();

  }
//***NOTES****/

// What we know
//*Purpose of game is to move all blocks on certain level from one side of screen within a column to the far right side of screen colume. 
//*Have 3 verial or Horizonal Column. 
//*Game starts on level 1 with 3 blocks.
//*each level adds 1 block to tier. 
//*Each block is of different size to each other, with the largest on the bottom. 
//*after each completion of level, add 1 extra block larger than the last level largest block. 
//*User is only able to move 1 block at a time to far right column. 
//*Blocks are not able to place ontop of each other is top block is larger than the block that was placed down first. 
//*user must move blocks in different orders or patterns using all three columns. 
//*Game ends after a set amount of levels have been completed or when timer runs out. 
//*Any level will be considered completed once user places all blocks inorder from largest to smallest on the far right columns. 