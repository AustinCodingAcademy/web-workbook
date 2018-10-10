'use strict';

$(document).ready(function() {
  alert('Are you ready to count by ones, tens, and hundred?');
  var num = 0;
  var num2 = 0;
  var num3 = 0;
  $('#counter-1').click(function() {
    num++;
    $(this).text(num);
  })

  $('#counter-10').click(function() {
    num2 += 10;
    $(this).text(num2);
  })

  $('#counter-100').click(function() {
    num3 += 100;
    $(this).text(num3);
  })

  $('#box-all').click(function() {
    num++;
    $('#counter-1').text(num);

    num2 += 10;
    $('#counter-10').text(num2);

    num3 += 100;
    $('#counter-100').text(num3);
  })

  $(".box").draggable();
});
