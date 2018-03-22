'use strict';

$(document).ready(function() {
  let hand = null;
  console.log(hand)
  //hand is where the disc goes when the stack aka data-row is clicked.

  //click on the stack aka data-row to grab the first disc
  $('[data-row]').click(function() {
    console.log("working")
    //run this function when the stack is clicked
    if (hand) {
      if ($(this).children().data("size") === undefined
        //^^ this one checks to see if there is not a child peg on the peg. so this must be true || or...
        ||
        $(this).children().data("size") > $(hand).data("size")) {
        // ^^ this one checks to see what the size is of the child on the peg

        //if the either of the above are true, then take the disk in the hand
        $(this).prepend(hand);
        hand = null;
        // You win if the last stack has all four blocks
        if ($(".destination").children().length === 4) {
          alert("You Win!");
        }
      }
    } else {

      // Detach the first child and append it to an empty stack or one with a bigger block than the one you've detached
      hand = $(this).children().first().detach();
      console.log("this is working")
    }
  })
});