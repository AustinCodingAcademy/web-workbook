'use strict';

function dragBlock(e) {
  var blockValue = $(e.target).data("block")
  e.dataTransfer.setData("block", blockValue);
  // console.log("I am being dragged");
  // console.log("block value:" + blockValue);
}



function allowDrop(e) {
  e.preventDefault();
}


function dropBlock(e) {
  e.preventDefault();
  var blockValue = e.dataTransfer.getData("block");

  // when the stack is empty we append the block
  var $stack = $(e.target);
  var $block = $("[data-block=" + blockValue + "]");


  if ($stack.children().length === 0) {
    $stack.append($block);
  } else {

    var children = $stack.children();
    var length = $stack.children().length;
    var topChild = children[length - 1]
    var topChildBlockValue = $(topChild).data("block");

    if (blockValue < topChildBlockValue) {
      $stack.append($block);

    }

  }
  toggleDragAttribute();
}

function toggleDragAttribute() {

  for (var e = 1; e < 4; e++) {


    var children = $("[data-stack=" + e + "]").children();

    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      $(child).removeAttr("draggable");
      winConditon();
    }

    $(children[children.length - 1]).attr("draggable", "true");

    var children = $("[data-stack-2]").children();
  }


}


var stack3 = $('[data-stack=3]');
var dataBlock100 = $('[data-block=100]');
var dataBlock75 = $('[data-block=75]');
var dataBlock50 = $('[data-block=50]');
var dataBlock25 = $('[data-block=25]');


function winConditon() {
  var checkLength = stack3.children();



  if (checkLength.length === 4) {
    alert('You win!');
    dataBlock100.removeAttr('draggable');
    dataBlock75.removeAttr('draggable');
    dataBlock50.removeAttr('draggable');
    dataBlock25.removeAttr('draggable');
  }
}
