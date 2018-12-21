'use strict';

$(document).ready(function() {
  // Put app logic here

  var lastblock
  let newdiv = null;
  let hand = null;
  
   $("[data-stack]").click(function(event) { //target stack with a click
    console.log("CLICK")
    var lastblock = $(this).children().last().data("block");  // create new variable for clicked block and captures value "block" is a key
    console.log(lastblock)


    // determines if first or second click
    if (hand == null) {    // comparing to see if hand does in fact equal null
      hand = $(this).children().last().detach();   // pick up the last child (div)
      console.log("GOT IT")
      
    } else {  
       if (lastblock < newdiv || newdiv == null) {
      $(this).append(hand);   // hand contains something, so where you click adds from the hand to that spot
     console.log("PLACED")
     newdiv = $(this).children().last().data("block");
     hand = null;  // empty hand again for next turn
     console.log("EMPTY")
       } else {
        console.log("CAN'T BE PLACED")
       }};

    
  });




});