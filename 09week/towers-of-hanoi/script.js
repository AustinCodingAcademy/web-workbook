'use strict';


  function dragBlock(e){  //ondragstart
  var blockValue = $(e.target).data("block")
  var stackValue = $(e.target).data("stack")


  //data("block") data-block
    e.dataTransfer.setData("block", blockValue);
    e.dataTransfer.setData("stack", stackValue);

    // console.log("I am being dragged");
    console.log("block Value:" + blockValue);
    console.log("stack Value: " + stackValue);
  }


function allowDrop(e){ //ondragover
  e.preventDefault();
  var last_block = stack.children().last();
  console.log(last_block);
}

function dropBlock(e){//ondrop
  e.preventDefault();

var blockValue = e.dataTransfer.getData("block");
var lastBlockValue = $(e.target).children().last();

  //when the stack empty we append
  if($(e.target).children().length === 0){
  $(e.target).append($("[data-block=" + blockValue +"]"));
}

  if($(e.target).children().length !== 0){ //just to get it to move(take out)
  $(e.target).append($("[data-block=" + blockValue +"]"));
}



// Example
// function checkForWin() {
//   if($('[data-stack="3"]').children().length===4) {
//     $('#announce-game-won').html("You Won!");
//     gameover=true;
//
//   }



}
