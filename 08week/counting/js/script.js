// when the document is done loading,
//run the script inside

// When the user clicks on the '10' box, a separate counter counts up by 10.
// When the user clicks on the '100' box, a separate counter counts up by 100.
// Create a new box that says click all which triggers
//      the effect of all boxes being clicked at the same time.
// When the page loads, a pop up appears saying 'Are you ready to count by ones, tens, and hundred?'
// Extra Credit: allow the user to drag and drop the shapes.


$(document).ready(function() {

  window.alert("Are you ready to count by ones, tens, and hundreds?");

  $("#counter-1,#counter-10,#counter-100").draggable();

  $('#counter-1').click(function() {
    var num = $(this).text();
    num = parseInt(num);
    num = num + 1;
    $(this).text(num);
  });

  $('#counter-10').click(function() {
    var num = $(this).text();
    num = parseInt(num);
    num = num + 10;
    $(this).text(num);
  });

  $('#counter-100').click(function() {
    var num = $(this).text();
    num = parseInt(num);
    num = num + 100;
    $(this).text(num);
  });

  $('#click-all').click(function() {
    $("#counter-1,#counter-10,#counter-100").trigger("click");
  })

});
