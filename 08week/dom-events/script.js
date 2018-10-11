'use strict';

// When the user clicks on the '10' box, a separate counter counts up by 10.
// When the user clicks on the '100' box, a separate counter counts up by 100.
// Create a new box that says click all which triggers the effect of all boxes being clicked at the same time.
// When the page loads, a pop up appears saying 'Are you ready to count by ones, tens, and hundred?'
// Extra Credit: allow the user to drag and drop the shapes.
$(document).ready(function() {
var num = 0;
var num2 = 0;
var num3 = 0;

  $('#counter-1').click(function() {
    num++;
    $(this).text(num);
  })

  $('#counter-10').click(function() {
    num2+= 10;
    $(this).text(num2);
  })

  $('#counter-100').click(function() {
    num3+= 100;
    $(this).text(num3);
  })

  $('#btn').click(function() {
      num++;
      $('#counter-1').text(num);
      num2 += 10;
      $('#counter-10').text(num2);
      num3 += 100;
    $('#counter-100').text(num3);
  })

  $('.box').draggable();
  $('.box').resizeable();



});