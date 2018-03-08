'use strict';
// when the document is done loading, run the script inside
$(document).ready(function() {
  let num = 1;
  let num10 = 10;
  let num100 = 100;
  $('#counter-1').click(function() {
    num++;
    $(this).text(num);
  })
  $('#counter-10').click(function() {
    num10 = num10 + 10;;
    $(this).text(num10);
  })
  $('#counter-100').click(function() {
    num100 = num100 + 100;
    $(this).text(num100);
  })
  $("#counter-100").after(`<button class='clickall'>Count All</button>`);
  // count eack block simultaneously
  $('.clickall').click(function() {
    num++;
    $('#counter-1').text(num);
    num10 = num10 + 10;;
    $('#counter-10').text(num10);
    num100 = num100 + 100;
    $('#counter-100').text(num100);
  })
// playong with Ramona's draggable options
  $("#counter-1").draggable();
  $("#counter-10").draggable();
  $("#counter-100").draggable();
});
