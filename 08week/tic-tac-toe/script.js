'use strict';

$(document).ready(function() {
  var clickCount= 0;
  $('[data-cell]').click(function(){
    clickCount= clickCount+1;
    var whichDiv=$(this).attr('data-cell');
    // console.log(whichDiv);
    var move=$(this).text();
    // console.log(move);
// getting the X to work
    if ((clickCount % 2 === 0) && (move === "")) {
      // console.log("getting the X to work");
      $(this).text("X");
      // getting the O to work
    } else if ((clickCount % 2 !== 0) && (move === "")) {
      // console.log("getting the O to work");
      $(this).text("O");
      // if none of those conditions are met, you can't play that move
    } else {
      alert("That square isn't empty. Try again in an empty square.");
    }
    setTimeout(checkWin, 300);
    // Clear button
  $('#clear').click(function() {
    // console.log("clicking the clear button");
    $('[data-cell]').text("");
      // console.log("clearing to the original color");
    });
  function checkWin() {
    var box0=$('[data-cell=0]').text();
    var box1=$('[data-cell=1]').text();
    var box2=$('[data-cell=2]').text();
    var box3=$('[data-cell=3]').text();
    var box4=$('[data-cell=4]').text();
    var box5=$('[data-cell=5]').text();
    var box6=$('[data-cell=6]').text();
    var box7=$('[data-cell=7]').text();
    var box8=$('[data-cell=8]').text();

    if ((box0 === box1 && box1 === box2) && (box2 !== "")) {
      alert("You win!");
    } else if ((box3 === box4 && box4 === box5) && (box5 !== "")) {
      alert("You win!");
    } else if ((box6 === box7 && box7 === box8) && (box8 !== "")) {
    alert("You win!");
    } else if ((box0 === box3 && box3 === box6) && (box6 !== "")) {
      alert("You win!");
    } else if ((box1 === box4 && box4 === box7)  && (box7 !== "")) {
      alert("You win!");
    } else if ((box2 === box5 && box5 === box8) && (box8 !== "")) {
      alert("You win!");
    } else if ((box0 === box4 && box4 === box8) && (box8 !== "")) {
      alert("You win!");
    } else if ((box2 === box4 && box4 === box6) && (box6 !== "")) {
      alert("You win!");
    };
  };
  });
});
