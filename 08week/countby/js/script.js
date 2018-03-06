// when the document is done loading, run the script inside
$(document).ready(function() {

  //annoying alert
  // next challenge - see if you can do this w/ jquery dialog instead
  $(window.alert('Are you ready to count by ones, tens, and hundreds?'));



  var numo = 1;
  var numt = 10;
  var numh = 100;
  $('#counter-1').click(function() {
    numo++;
    $(this).text(numo);
  })
  $('#counter-10').click(function() {
    numt = numt + 10;;
    $(this).text(numt);
  })
  $('#counter-100').click(function() {
    numh = numh + 100;
    $(this).text(numh);
  })

  //insert button
  $("#counter-100").after("<button class='clickall'>Count All</button>");

  // trigger all of them at once
  $('.clickall').click(function() {
    numo++;
    $('#counter-1').text(numo);
    numt = numt + 10;;
    $('#counter-10').text(numt);
    numh = numh + 100;
    $('#counter-100').text(numh);
  })


  // draggable

  $("#counter-1").draggable();
  $("#counter-10").draggable();
  $("#counter-100").draggable();

});


// Extra Credit: allow the user to drag and drop the shapes.
