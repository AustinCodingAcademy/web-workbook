'use strict';
// When the user clicks on the '10' box, a separate counter counts up by 10.
// When the user clicks on the '100' box, a separate counter counts up by 100.
// Create a new box that says click all which triggers the effect of all boxes being clicked at the same time.
// When the page loads, a pop up appears saying 'Are you ready to count by ones, tens, and hundred?'
// Extra Credit: allow the user to drag and drop the shapes.

$(document).ready(function() {
    /* var num = 0; */
    $('#counter-1').click(function() {
      let num = 1;
      num++;
      $(this).text(num);
    })
    $('#counter-10').click(function() {
        let num = 10;
        num = num+10;
        $(this).text(num);
    })
    $('#counter-100').click(function() {
        let num = 100;
        num = num+100;
        $(this).text(num);
    })







  });