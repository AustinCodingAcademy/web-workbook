// When the page loads, a pop up appears saying 'Are you ready to count by ones, tens, and hundred?'
$(document).ready(function() {
  alert("Are you ready to count by ones, tens, and hundreds?");
});

// When the user clicks on the '1' box, a separate counter counts up by 1.
$("#box-1").click(function() {

  var counterValue = $("#counter-1").text() === "" ? 0 : $("#counter-1").text();

  var num = parseInt(counterValue) + 1;

  $("#counter-1").text(num);

});

// When the user clicks on the '10' box, a separate counter counts up by 10.
$("#box-10").click(function() {

  var counterValue = $("#counter-10").text() === "" ? 0 : $("#counter-10").text();

  var num = parseInt(counterValue) + 10;

  $("#counter-10").text(num);

});

// When the user clicks on the '100' box, a separate counter counts up by 100.
$("#box-100").click(function() {

  var counterValue = $("#counter-100").text() === "" ? 0 : $("#counter-100").text();

  var num = parseInt(counterValue) + 100;

  $("#counter-100").text(num);

});

// Create a new box that says click all which triggers the effect of all boxes being clicked at the same time.

$("#box-all").click(function() {

  $(function() {

    var counterValue = $("#counter-10").text() === "" ? 0 : $("#counter-10").text();

    var num = parseInt(counterValue) + 10;

    $("#counter-10").text(num);

  });

  $(function() {

    var counterValue = $("#counter-100").text() === "" ? 0 : $("#counter-100").text();

    var num = parseInt(counterValue) + 100;

    $("#counter-100").text(num);

  });

});

// Extra Credit: allow the user to drag and drop the shapes.
