'use strict';
//When the user clicks on the '10' box, a separate counter counts up by 10.
//When the user clicks on the '100' box, a separate counter counts up by 100.
//Create a new box that says click all which triggers the effect of all boxes being clicked at the same time.
//When the page loads, a pop up appears saying 'Are you ready to count by ones, tens, and hundred?'
//Extra Credit: allow the user to drag and drop the shapes.
$(document).ready(function(){
    var num = 0;
  $('.box').click(function() {
    num++;
    $(this).text(num);
  })
});