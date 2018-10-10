'use strict';
$(document).ready(function(){

  // When the user clicks on the '10' box, a separate counter counts up by 10.
  // When the user clicks on the '100' box, a separate counter counts up by 100.
  // Create a new box that says click all which triggers the effect of all boxes being clicked at the same time.
  // When the page loads, a pop up appears saying 'Are you ready to count by ones, tens, and hundred?'
  // Extra Credit: allow the user to drag and drop the shapes.

  var num1 = 0;  
  var num2 = 0;
  var num3 = 0; 
  $('#counter-1').click(function() {
    num1++;
    $(this).text(num1);
  })
  
  $('#counter-10').click(function(){
    num2 += 10;
    $(this).text(num2);
  })
  
  $('#counter-100').click(function(){
    num3 += 100;
    $(this).text(num3);
  })

  $('#clickall').click(function(){
    num1++;
    $('#counter-1').text(num1);

    num2 += 10;
    $('#counter-10').text(num2);

    num3 += 100;
    $('#counter-100').text(num3);
  })

  alert("Are you ready to count by 1s 10s and 100s?");

  $( "#counter-1" ).resizable();
  $( ".box" ).draggable();




});