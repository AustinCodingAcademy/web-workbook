'use strict';
$(document).ready(function() {

  // When the user clicks on the '10' box, a separate counter counts up by 10.
  // When the user clicks on the '100' box, a separate counter counts up by 100.
  // Create a new box that says click all which triggers the effect of all boxes being clicked at the same time.
  // When the page loads, a pop up appears saying 'Are you ready to count by ones, tens, and hundred?'
  // Extra Credit: allow the user to drag and drop the shapes.

// when the document is done loading, run the script inside
  let num = 0;
  let num2= 10;
  let num3 = 100;
  $('#counter-1').click(function() {
    num++;
    $(this).text(num);
  })
  $('#counter-10').click(function() {
    num2 = num2 + 10;
    $(this).text(num2);
  })
  $('#counter-100').click(function() {
    num3 = num3 + 100;
    $(this).text(num3);
  })
  $('#click-all').click(function(){
    num++;
    num2 = num2 + 10;
    num3 = num3 + 100;
   $('#counter-1').text(num);     
   $('#counter-10').text(num2);     
   $('#counter-100').text(num3);     
  })
window.alert('Are you ready to count by ones, tens, and hundred?');
});
