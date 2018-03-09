// when the document is done loading, run the script inside
$(document).ready(function() {
  alert($('#alert').text())
  var num1 = 0;
  var num10 = 0;
  var num100 = 0;
  $(function() {
    $('*').draggable();
  });
  $('#counter-1').click(function() {
    num1++;
    $(this).text(num1);
  });
  $('#counter-10').click(function() {
    num10 += 10;
    $(this).text(num10);
  });
  $('#counter-100').click(function() {
    num100 += 100;
    $(this).text(num100);
  });
  $('#all').click(function() {
    num1 ++;
    num10 += 10;
    num100 += 100;
    $('#counter-1').text(num1);
    $('#counter-10').text(num10);
    $('#counter-100').text(num100);
  });
  $('#reset').click(function() {
    num1 = 1;
    num10 = 10;
    num100 = 100;
    $('#counter-1').text(num1);
    $('#counter-10').text(num10);
    $('#counter-100').text(num100);
  });
});
