'use strict';
//made it so the javascipt wouldn't load until the page was loaded
$(document).ready(function() {
  var $block = null;
  var $turns = 0;
  var $tracker = $("#tracker")
  var $reset = $("#reset")

$("[data-stack]").click(function(){
  //set the var $children equal to the children of the data stack, and then set $lastChild equal to the last of the variable $children
var $children = $(this).children();
var $lastChild = $children.last();

if ($block == null) {
  //made it so the last child would detach if clicked on
$block = $lastChild.detach();
} else {
  // made it so the column would not let a bigger block move onto a smaller block by making it so that if the last child on a columns data wasbigger than the block that was trying to be placed ontop of it, it would give an alert saying invalid move
if ( $lastChild.data("block") < $block.data("block")) {
alert("Invalid Move")
//made it so the tracker ticks up with an invalid move
$turns++
$tracker.text($turns);
} else {
$(this).append($block);
$block = null;
//made it so the tracker ticks up with a valid move
$turns++;
$tracker.text($turns);
}
}
//made it so if the blocks all were on the 3rd column, it would give an alert saying you win. this works and does not allow any four blocks to trigger a win because of the rule that gives an alert saying invalid move when a bigger block is tried to be placed on a smaller block
if ( $("[data-stack='3']").children().length >= 4 )
{
alert("You Win!");
}
});
//made reset function
$reset.click(function(){
  location.reload();
});
});
