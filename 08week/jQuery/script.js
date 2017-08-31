// when the document is done loading, run the script inside
$(document).ready(function() {

  // alert('Are you ready to count by ones, tens, and hundred?')
  $( function() {
    $( "#dialog" ).dialog();
  } );

  $('#counter-1').click(function() {
    var num1 = Number($(this).text());
    num1++;
    $(this).text(num1);
  })

  $('#counter-10').click(function() {
    var num2 = Number($(this).text());
    num2+= 10;
    $(this).text(num2);
  })

  $('#counter-100').click(function() {
    var num3 = Number($(this).text());
    num3+= 100;
    $(this).text(num3);
  })

  $('#counter-all').click(function(){
    $("#counter-100, #counter-10, #counter-1").click();
  })

  $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  });

});
