"use strict";
//When the user clicks on the '10' box, a separate counter counts up by 10.
//When the user clicks on the '100' box, a separate counter counts up by 100.
//Create a new box that says click all which triggers the effect of all boxes being clicked at the same time.
//When the page loads, a pop up appears saying 'Are you ready to count by ones, tens, and hundred?'
//Extra Credit: allow the user to drag and drop the shapes.
$(document).ready(function() {
  let num = 0;
  $("#counter-1").click(function() {
    num++;
    $(this).text(num);
  });
  let num10 = 10;
  $("#counter-10").click(function() {
    num10 = num10 + 10;
    $(this).text(num10);
  });
  let num100 = 100;
  $("#counter-100").click(function() {
    num100 = num100 + 100;
    $(this).text(num100);
  });
});

$("#all-counters").click(function() {
  num++;
  $("#counter-1").text(num++);
  num10 + 10;
  $("#counter-10").text(num10);
  num100 + 100;
  $("#counter-100").text(num100);
});

$(document).ready(function() {
  alert("Are you ready to count by ones, tens, and hundred?");
});

$(function() {
  $("#boxid").draggable({
    axis: "y"
  });
});
